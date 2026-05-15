import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionGrid from "../components/SectionGrid";
import HighlightsSection from "../components/HighlightsSection";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <SectionGrid />
      
      {/* CTA Quote Section */}
      <section className="bg-brand-dark py-60 px-6 md:px-10 text-center overflow-hidden relative border-t-4 border-black">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-brand-neon-purple text-white brutal-border mb-8 -rotate-1">
              <span className="font-display font-black uppercase text-sm tracking-widest">Protocol // Alpha</span>
            </div>
            <h2 className="text-[10vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-[0.8] max-w-6xl mx-auto mb-16 italic">
              ENGINEERING <br /> 
              <span className="text-brand-neon-lime underline">SENSORY</span> <br /> 
              SYSTEMS
            </h2>
            <button className="btn-brutal bg-white px-16 py-6 text-xl hover:bg-brand-neon-blue">
              SYNCHRONIZE NOW
            </button>
          </motion.div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-neon-pink/10 brutal-border -z-10 rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-brand-neon-lime/10 rounded-full border-4 border-black border-dashed -z-10 animate-spin-slow"></div>
      </section>
    </>
  );
}
