import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Fingerprint, Target, Zap } from "lucide-react";

const interiorImages = [
  "/input_file_0.png",
  "/input_file_1.png",
  "/input_file_2.png",
  "/input_file_3.png",
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % interiorImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-40 pb-20 px-6 md:px-10 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-brand-neon-lime/10 blur-[100px] -z-10 rotate-45"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative aspect-square brutal-border bg-brand-neon-purple shadow-brutal-white overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIdx}
                  src={interiorImages[currentIdx]} 
                  initial={{ opacity: 0, scale: 1.2, filter: 'grayscale(100%)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Cafe Interior ${currentIdx + 1}`}
                />
              </AnimatePresence>
              
              <div className="absolute top-6 left-6 bg-brand-neon-lime text-black px-4 py-1 brutal-border font-display font-black uppercase text-xs z-10">
                SCENE // 0{currentIdx + 1}
              </div>

              <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                {interiorImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-4 h-4 brutal-border transition-all duration-300 ${idx === currentIdx ? "bg-brand-neon-lime scale-125" : "bg-white"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-4 py-1 bg-brand-neon-blue text-black brutal-border mb-6 -rotate-2">
                <span className="font-display font-black uppercase text-sm tracking-widest">The Origin Story</span>
              </div>
              <h1 className="text-7xl md:text-[8vw] font-display font-black uppercase tracking-tighter text-white leading-[0.8] mb-8">
                EVE'S <br /> 
                <span className="text-brand-neon-lime italic">RECKONING</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 font-bold text-xl text-white/70 leading-tight"
            >
              <p className="border-l-8 border-brand-neon-purple pl-6 italic">
                EVE'S CAFE WASN'T BORN. IT WAS ENGINEERED. WE STRIPPED AWAY THE BORING AND BUILT A SYSTEM FOR THE CREATIVE REBELS.
              </p>
              <p>
                WE BELIEVE THE ENVIRONMENT CONTROLS THE OUTPUT. THAT'S WHY WE BUILT A SPACE THAT VIBRATES AT THE FREQUENCY OF INNOVATION. NO COFFEE SHOP PLAYS THIS LOUD.
              </p>
              
              <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="brutal-card bg-brand-neon-lime p-8 text-black rotate-1">
                  <div className="bg-black text-white w-10 h-10 flex items-center justify-center brutal-border mb-4">
                    <Fingerprint size={20} strokeWidth={3} />
                  </div>
                  <h4 className="font-display font-black uppercase text-lg mb-2 italic underline">Identity</h4>
                  <p className="text-xs uppercase font-black">99% RAW EMOTION. 1% CAFFEINE STAIN.</p>
                </div>
                <div className="brutal-card bg-brand-neon-purple p-8 text-white -rotate-2">
                  <div className="bg-white text-black w-10 h-10 flex items-center justify-center brutal-border mb-4">
                    <Target size={20} strokeWidth={3} />
                  </div>
                  <h4 className="font-display font-black uppercase text-lg mb-2 italic underline">Target</h4>
                  <p className="text-xs uppercase font-black">THE MISFITS. THE BUILDERS. THE BOLD.</p>
                </div>
              </div>
              
              <button className="btn-brutal btn-brutal-lime w-full flex justify-center items-center gap-4">
                Enter the Void <Zap size={20} fill="black" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
