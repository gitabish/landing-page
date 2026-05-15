import { motion } from "motion/react";

const elements = [
  { top: "10%", left: "5%", size: "w-4 h-4", color: "bg-black", delay: 0 },
  { top: "25%", left: "90%", size: "w-6 h-6", color: "bg-brand-neon-purple", delay: 1 },
  { top: "45%", left: "15%", size: "w-3 h-3", color: "bg-black", delay: 0.5 },
  { top: "60%", left: "85%", size: "w-5 h-5", color: "bg-brand-neon-purple", delay: 1.5 },
  { top: "80%", left: "8%", size: "w-4 h-4", color: "bg-black", delay: 2 },
  { top: "15%", left: "80%", size: "w-2 h-2", color: "bg-black", delay: 0.2 },
  { top: "70%", left: "20%", size: "w-6 h-6", color: "bg-brand-neon-purple", delay: 0.8 },
  { top: "35%", left: "95%", size: "w-3 h-3", color: "bg-black", delay: 1.2 },
  { top: "5%", left: "40%", size: "w-5 h-5", color: "bg-brand-neon-purple", delay: 0.4 },
  { top: "90%", left: "60%", size: "w-4 h-4", color: "bg-black", delay: 1.8 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} ${el.color} rounded-full border-2 border-black shadow-brutal-dark will-change-transform`}
          style={{ top: el.top, left: el.left }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: el.delay,
          }}
        />
      ))}
    </div>
  );
}
