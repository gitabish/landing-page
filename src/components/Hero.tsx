import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, Sparkles, Zap, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingElements from "./FloatingElements";
import BobaBottle from "./BobaBottle";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const textY = useTransform(smoothProgress, [0, 1], [0, -200]);
  const rotateHero = useTransform(smoothProgress, [0, 0.5], [0, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-40 px-6 md:px-10 overflow-hidden bg-brand-dark flex flex-col justify-center">
      <FloatingElements />
      
      {/* Aesthetic Boba Bottles floating in Hero */}
      <BobaBottle 
        className="absolute top-[15%] right-[5%] w-24 h-32 rotate-12 z-20 hidden md:block" 
        delay={0.5}
      />
      <BobaBottle 
        className="absolute bottom-[25%] left-[2%] w-20 h-28 -rotate-12 z-20 hidden md:block" 
        delay={1}
      />
      
      {/* Dynamic Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-6">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-black/10"></div>
          ))}
        </div>
      </div>

      <motion.div 
        style={{ y: textY, rotate: rotateHero }}
        className="container mx-auto relative z-10 px-4 md:px-10"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 bg-brand-neon-purple text-white brutal-border mb-8 rotate-2"
            >
              <span className="font-display font-black uppercase text-sm tracking-widest flex items-center gap-2">
                <Zap size={14} fill="white" /> New Wave Boba
              </span>
            </motion.div>

            <h1 className="kinetic-text text-[15vw] md:text-[180px] text-black leading-[0.8] mb-8">
              <span className="block text-brand-neon-lime">BOBA</span>
              <span className="block italic text-transparent stroke-text" style={{ WebkitTextStroke: '4px #BF00FF' }}>QUEEN</span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl md:text-3xl font-display font-bold leading-tight mb-12 text-black/90">
                WE DON'T DO BASIC TEA. <br />
                <span className="text-brand-neon-blue">ELECTRIC FLAVORS</span> FOR THE <br />
                URBAN REBELLION.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link to="/about" className="btn-brutal btn-brutal-lime flex items-center gap-4 group">
                  Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/menu" className="btn-brutal bg-white text-black shadow-brutal-pink hover:shadow-brutal-dark">
                  Explosive Menu
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="brutal-card bg-brand-neon-blue p-8 rotate-3 shadow-brutal-dark"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center brutal-border mb-4">
                <Zap size={24} color="black" strokeWidth={3} />
              </div>
              <h3 className="font-display font-black uppercase text-2xl mb-2 text-black">99% Flavor</h3>
              <p className="font-bold text-black/60">Scientifically proven to keep you vibe until 4 AM.</p>
            </motion.div>

            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="brutal-card bg-brand-neon-pink p-8 -rotate-2 shadow-brutal-dark"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center brutal-border mb-4">
                <Sparkles size={24} color="black" strokeWidth={3} />
              </div>
              <h3 className="font-display font-black uppercase text-2xl mb-2 text-black">Neo Vibes</h3>
              <p className="font-bold text-black/60">The only boba cafe that looks as good as your IDE setup.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-brand-neon-lime border-y-4 border-black overflow-hidden z-20">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-display font-black uppercase italic text-black mx-8 flex items-center gap-12">
              Stay Electric <Zap size={32} fill="black" /> 
              No Basic <Sparkles size={32} fill="black" /> 
              Boba Queen <Zap size={32} fill="black" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
