import { motion } from "motion/react";
import { Sparkles, Heart, Star, Navigation2 } from "lucide-react";

interface BobaBottleProps {
  className?: string;
  delay?: number;
}

export default function BobaBottle({ className = "", delay = 0 }: BobaBottleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* SVG Boba Bottle */}
      <div className="relative p-6 bg-white/10 backdrop-blur-md border-4 border-black rounded-[2.5rem] shadow-brutal-dark hover:shadow-brutal-purple transition-all duration-500 overflow-visible flex items-center justify-center bg-white">
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic Hand-drawn Straw */}
          <path 
            d="M62 5 Q65 -2 68 5 L72 45 Q70 48 65 45 L62 5" 
            fill="#BF00FF" 
            stroke="black" 
            strokeWidth="3" 
            strokeLinejoin="round"
          />
          
          {/* Organic Cup Body - Slightly taller and more tapered */}
          <path
            d="M26 40 Q50 36 74 40 L70 125 Q68 135 50 135 Q32 135 30 125 L26 40"
            fill="white"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* Tea / Liquid - More stable path */}
          <path
            d="M27 65 Q50 60 73 65 L70 125 Q68 133 50 133 Q32 133 30 125 L27 65"
            fill="#CCFF00"
            className="opacity-90"
          />
          
          {/* Scattered Boba Pearls */}
          <circle cx="36" cy="115" r="5.5" fill="black" />
          <circle cx="50" cy="120" r="5.5" fill="black" />
          <circle cx="64" cy="112" r="5.5" fill="black" />
          <circle cx="44" cy="102" r="5.5" fill="black" />
          <circle cx="58" cy="105" r="5.5" fill="black" />

          {/* Lid - More pronounced cap shape */}
          <path
            d="M22 40 Q50 30 78 40 L74 45 Q50 40 26 45 L22 40"
            fill="#BF00FF"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Cute Face */}
          <circle cx="42" cy="75" r="2" fill="black" />
          <circle cx="58" cy="75" r="2" fill="black" />
          <path d="M48 82 Q50 85 52 82" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        
        {/* Doodle Accents */}
        <div className="absolute -top-4 -right-4 text-brand-neon-purple group-hover:scale-125 transition-transform">
          <Sparkles size={24} fill="currentColor" />
        </div>
        <div className="absolute -bottom-4 -left-4 text-brand-neon-pink group-hover:scale-125 transition-transform delay-75">
          <Heart size={20} fill="currentColor" />
        </div>
      </div>

      {/* Floating Doodles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-8 -left-8 text-brand-neon-lime opacity-60"
      >
        <Star size={28} strokeWidth={3} />
      </motion.div>
    </motion.div>
  );
}
