import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, Zap, Target, Layers } from "lucide-react";

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
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      {/* First Grid */}
      <RevealSection>
        <motion.div 
          style={{ rotate: rotateX }}
          className="brutal-card bg-brand-neon-purple p-12 space-y-8 shadow-brutal-white"
        >
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center brutal-border">
            <Target size={24} strokeWidth={3} />
          </div>
          <h3 className="text-5xl font-display font-black uppercase tracking-tighter leading-none text-black">
            The Single <br /> Source Code.
          </h3>
          <p className="text-black font-bold text-lg leading-tight">
            We don't mix beans. We don't mix vibes. Pure single-origin Ethiopian ritual for the focused mind.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <button className="btn-brutal bg-black text-white shadow-brutal-lime hover:shadow-brutal-dark">
              Get the Beans
            </button>
            <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black/60 hover:text-black transition-colors group">
              Process <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
        
        <div className="relative group brutal-border overflow-hidden bg-brand-neon-lime">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=75&w=1200&auto=format&fit=crop" 
            alt="Coffee ritual"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-brand-neon-blue text-black px-4 py-1 brutal-border font-display font-black uppercase text-xs">
            System // 01
          </div>
        </div>
      </RevealSection>

      {/* Second Grid */}
      <RevealSection>
        <div className="order-2 md:order-1 relative group brutal-border overflow-hidden bg-brand-neon-pink shadow-brutal-blue">
           <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=75&w=1200&auto=format&fit=crop" 
            alt="Cafe atmosphere"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 bg-brand-neon-lime text-black px-4 py-1 brutal-border font-display font-black uppercase text-xs">
            Atmosphere // 02
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-10 brutal-card bg-white p-12 -rotate-2 shadow-brutal-pink">
          <div className="bg-brand-neon-blue text-black w-12 h-12 flex items-center justify-center brutal-border">
            <Layers size={24} strokeWidth={3} />
          </div>
          <h3 className="text-5xl font-display font-black uppercase tracking-tighter leading-none text-black">
            Minimal <br /> Static.
          </h3>
          <p className="text-black/60 font-bold text-xl leading-tight italic">
            Zero noise. Full focus. Every surface is designed for the modern architect.
          </p>
          <button className="btn-brutal btn-brutal-lime w-full sm:w-auto">
            Book a Desk
          </button>
        </div>
      </RevealSection>
    </div>
  );
}
