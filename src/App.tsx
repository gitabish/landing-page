import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Lazy loading components for better initial performance
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Service = lazy(() => import("./pages/Service"));
const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));

gsap.registerPlugin(ScrollToPlugin);

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    // Optional: Smooth scroll implementation if needed or additional GSAP global effects
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: `#${id}`,
            ease: "power4.out"
          });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <ScrollReset />
      <div className="grain-overlay" />
      <main className="min-h-screen selection:bg-brand-neon-lime selection:text-black">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center"><div className="w-12 h-12 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </main>
    </Router>
  );
}

