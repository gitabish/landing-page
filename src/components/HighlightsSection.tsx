import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Gamepad2, Coffee, Utensils, Star } from "lucide-react";

const items = [
  {
    title: "Game On",
    desc: "Tabletop strategy for the bold.",
    image: "https://images.unsplash.com/photo-1544650030-3c9baf62427a?q=75&w=800&auto=format&fit=crop",
    icon: <Gamepad2 size={20} strokeWidth={3} />,
    tag: "Social",
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-lime"
  },
  {
    title: "Purple Rain",
    desc: "Natural root-based magic brew.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=75&w=800&auto=format&fit=crop",
    icon: <Sparkles size={20} strokeWidth={3} />,
    tag: "Bestseller",
    color: "bg-brand-neon-purple",
    shadow: "shadow-brutal-purple"
  },
  {
    title: "Wild Dough",
    desc: "3-day fermented sourdough treats.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=75&w=800&auto=format&fit=crop",
    icon: <Utensils size={20} strokeWidth={3} />,
    tag: "Fresh",
    color: "bg-brand-neon-pink",
    shadow: "shadow-brutal-pink"
  },
  {
    title: "Nitro Bomb",
    desc: "Nitrogen infused stout-like coffee.",
    image: "https://images.unsplash.com/photo-1592318763199-c9852e5a3edb?q=75&w=800&auto=format&fit=crop",
    icon: <Coffee size={20} strokeWidth={3} />,
    tag: "Tech",
    color: "bg-brand-neon-blue",
    shadow: "shadow-brutal-blue"
  }
];

function HighlightCard({ item }: { item: typeof items[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, x: -8 }}
      className={`group relative overflow-hidden brutal-border bg-brand-gray transition-all duration-300 hover:${item.shadow}`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
      <div className="p-6 border-t-4 border-black">
        <div className={`inline-flex items-center gap-2 ${item.color} text-black px-3 py-1 brutal-border mb-4 rotate-1`}>
          {item.icon} <span className="font-display font-black uppercase text-xs">{item.tag}</span>
        </div>
        <h3 className="text-3xl font-display font-black uppercase tracking-tighter text-white mb-2 italic">
          {item.title}
        </h3>
        <p className="font-bold text-white/50 leading-tight">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HighlightsSection() {
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ["start end", "end start"]
  });

  const headY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="bg-brand-dark py-32 px-6 md:px-20 border-t-4 border-black relative overflow-hidden">
      <div className="absolute top-10 right-10 text-brand-neon-lime/10">
        <Star size={400} fill="currentColor" stroke="none" className="animate-spin-slow" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={headRef}
          style={{ y: headY }}
          className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12"
        >
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-[8vw] font-display font-black uppercase tracking-tighter text-white leading-[0.8]">
              BEYOND THE <br /> 
              <span className="text-brand-neon-purple italic">BREW</span> <span className="text-brand-neon-lime italic">REVOLUTION</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-xl font-bold text-white/60 mb-8 border-l-4 border-brand-neon-blue pl-6">
              WE'RE NOT JUST SERVING COFFEE. WE'RE BUILDING A SYSTEM FOR THE CREATIVE REBELS.
            </p>
            <button className="btn-brutal btn-brutal-purple w-full">Join the Mission</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <HighlightCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
