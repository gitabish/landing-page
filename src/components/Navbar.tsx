import { motion, useScroll, useTransform } from "motion/react";
import { Search, Menu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  // Parallax background movement: move background slower than scroll
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const navbarBackgroundOpacity = useTransform(scrollY, [0, 100], [0.4, 0.9]);
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 30]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 bg-brand-dark -z-10 border-b-4 border-black box-shadow-[4px_4px_0px_0px_#BF00FF]"
      />

      <div className="flex items-center gap-16 relative z-10">
        <Link to="/" className="text-3xl font-display font-black tracking-tighter text-brand-neon-lime italic">EVE'S CAFE</Link>
        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-widest font-bold text-white">
          <Link to="/" className="hover:text-brand-neon-lime transition-all hover:skew-x-6">Home</Link>
          <Link to="/menu" className="hover:text-brand-neon-purple transition-all hover:-skew-x-6">Menu</Link>
          <Link to="/service" className="hover:text-brand-neon-pink transition-all hover:scale-110">Service</Link>
          <Link to="/about" className="hover:text-brand-neon-blue transition-all hover:rotate-3">About Us</Link>
          <Link to="/reviews" className="hover:text-brand-neon-orange transition-all hover:-rotate-3">Reviews</Link>
        </div>
      </div>
      
      <div className="flex items-center gap-8 relative z-10">
        <button className="p-3 border-4 border-black bg-brand-neon-blue text-black hover:shadow-brutal-dark transition-all active:translate-x-1 active:translate-y-1">
          <Search size={24} strokeWidth={3} />
        </button>
        <button className="hidden md:block px-8 py-3 bg-brand-neon-lime text-black border-4 border-black font-display font-black uppercase tracking-widest hover:shadow-brutal-purple transition-all active:translate-x-1 active:translate-y-1">
          Reserve Now
        </button>
        <button className="md:hidden p-2 text-white border-4 border-black bg-brand-neon-purple shadow-brutal-dark">
          <Menu size={24} strokeWidth={3} />
        </button>
      </div>
    </motion.nav>
  );
}
