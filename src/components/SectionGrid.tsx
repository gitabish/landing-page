import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, Zap, Target, Layers, Utensils } from "lucide-react";
import BobaBottle from "./BobaBottle";

function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function SectionGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <div ref={containerRef} className="w-full px-6 md:px-20 py-32 space-y-40 bg-brand-dark relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      {/* First Grid */}
      <RevealSection>
        <motion.div 
          style={{ rotate: rotateX }}
          className="brutal-card bg-brand-neon-purple p-12 space-y-8 shadow-brutal-dark relative overflow-hidden"
        >
          <BobaBottle 
            className="absolute -bottom-10 -right-10 w-40 h-52 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700" 
            delay={0.5}
          />
          <div className="bg-white text-black w-12 h-12 flex items-center justify-center brutal-border">
            <Utensils size={24} strokeWidth={3} />
          </div>
          <h3 className="text-5xl font-display font-black uppercase tracking-tighter leading-none text-black">
            The Cyber <br /> Ramen Ritual.
          </h3>
          <p className="text-black font-bold text-lg leading-tight">
            18-hour bone broth. Hand-pulled noodles. Charred pork belly. A system engineered for maximum soul fuel.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <button className="btn-brutal bg-white text-black shadow-brutal-lime hover:shadow-brutal-dark">
              Order Ramen
            </button>
            <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black/60 hover:text-black transition-colors group">
              View Menu <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
        
        <div className="relative group brutal-border overflow-hidden bg-brand-neon-lime">
          <img 
            src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=75&w=1200&auto=format&fit=crop" 
            alt="Signature Ramen"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-brand-neon-blue text-black px-4 py-1 brutal-border font-display font-black uppercase text-xs">
            Broth // 01
          </div>
        </div>
      </RevealSection>

      {/* Second Grid */}
      <RevealSection>
        <div className="order-2 md:order-1 relative group brutal-border overflow-hidden bg-brand-neon-pink shadow-brutal-blue">
           <img 
            src="https://images.unsplash.com/photo-1521305916504-4a1121188589?q=75&w=1200&auto=format&fit=crop" 
            alt="Cyber Burger"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 bg-brand-neon-lime text-black px-4 py-1 brutal-border font-display font-black uppercase text-xs">
            Grill // 02
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-10 brutal-card bg-white p-12 -rotate-2 shadow-brutal-pink">
          <div className="bg-brand-neon-blue text-black w-12 h-12 flex items-center justify-center brutal-border">
            <Utensils size={24} strokeWidth={3} />
          </div>
          <h3 className="text-5xl font-display font-black uppercase tracking-tighter leading-none text-black">
            Smashed <br /> Systems.
          </h3>
          <p className="text-black/60 font-bold text-xl leading-tight italic">
            Zero noise. Full focus. Our supreme pizza-style burgers are the ultimate fuel for design rebels.
          </p>
          <button className="btn-brutal btn-brutal-lime w-full sm:w-auto">
            Order Burgers
          </button>
        </div>
      </RevealSection>
    </div>
  );
}
