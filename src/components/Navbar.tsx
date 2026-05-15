import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Search, Menu, ShoppingBag, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax background movement: move background slower than scroll
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const navbarBackgroundOpacity = useTransform(scrollY, [0, 100], [0.4, 0.9]);
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 30]);

  const navLinks = [
    { name: "Home", path: "/", color: "hover:text-brand-neon-lime" },
    { name: "Menu", path: "/menu", color: "hover:text-brand-neon-purple" },
    { name: "Service", path: "/service", color: "hover:text-brand-neon-pink" },
    { name: "About Us", path: "/about", color: "hover:text-brand-neon-blue" },
    { name: "Reviews", path: "/reviews", color: "hover:text-brand-neon-orange" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-8 overflow-hidden"
      >
        {/* Parallax Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-brand-dark -z-10 border-b-4 border-black shadow-brutal-dark"
        />

        <div className="flex items-center gap-16 relative z-10">
          <Link to="/" className="text-3xl font-display font-black tracking-tighter text-brand-neon-lime italic">BOBA QUEEN</Link>
          <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-widest font-bold text-black">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${link.color} transition-all hover:skew-x-6`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8 relative z-10">
          <button className="hidden md:block px-8 py-3 bg-brand-neon-lime text-black border-4 border-black font-display font-black uppercase tracking-widest hover:shadow-brutal-purple transition-all active:translate-x-1 active:translate-y-1">
            Reserve Now
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-black border-4 border-black bg-brand-neon-purple shadow-brutal-dark"
          >
            <Menu size={24} strokeWidth={3} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-neon-lime flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-display font-black tracking-tighter italic">BOBA QUEEN</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 border-4 border-black bg-white text-black shadow-brutal-dark active:translate-x-1 active:translate-y-1"
              >
                <X size={32} strokeWidth={4} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-6xl font-display font-black uppercase tracking-tighter hover:italic hover:translate-x-4 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <button className="w-full py-6 bg-brand-neon-purple text-white border-4 border-black font-display font-black uppercase text-2xl shadow-brutal-dark flex items-center justify-center gap-4">
                RESERVE NOW <Zap size={24} fill="currentColor" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
