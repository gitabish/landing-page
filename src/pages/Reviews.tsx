import { motion } from "motion/react";
import { Star, Quote, Zap, Plus } from "lucide-react";

const reviews = [
  {
    name: "Julian Vane",
    role: "Architect",
    text: "THE ARCHITECTURAL PRECISION OF THE BREW HERE IS MATCHED ONLY BY THE INCREDIBLE ATMOSPHERE. A TRUE SANCTUARY FOR DESIGN REBELS.",
    stars: 5,
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-purple"
  },
  {
    name: "Elena Rossi",
    role: "Critic",
    text: "EVE’S CAFE HAS REDEFINED THE MORNING RITUAL. THE PURPLECCINO IS A MASTERSTROKE IN FLAVOR SYSTEMS.",
    stars: 5,
    color: "bg-brand-neon-purple",
    shadow: "shadow-brutal-blue"
  },
  {
    name: "Marcus Thorne",
    role: "Engineer",
    text: "INCREDIBLE ATTENTION TO ACOUSTIC DETAIL. THE PERFECT PLACE TO CODE, WORK, AND VIBRATE.",
    stars: 4,
    color: "bg-brand-neon-blue",
    shadow: "shadow-brutal-pink"
  }
];

export default function Reviews() {
  return (
    <div className="pt-40 pb-20 px-6 md:px-10 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[10vw] border-brand-neon-blue rounded-full"></div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 bg-brand-neon-pink text-white brutal-border mb-6 rotate-1">
            <span className="font-display font-black uppercase text-sm tracking-widest">Digital Transmissions</span>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-display font-black uppercase tracking-tighter text-white leading-none">
            GUEST <br /> <span className="text-brand-neon-lime underline italic">STORIES</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: idx % 2 === 0 ? 2 : -2 }}
              viewport={{ once: true }}
              className={`p-10 brutal-card ${review.color} group hover:${review.shadow}`}
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-black opacity-10 group-hover:opacity-30 transition-opacity" />
              
              <div className="flex gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    strokeWidth={3}
                    className={i < review.stars ? "fill-black text-black" : "text-black/20"} 
                  />
                ))}
              </div>

              <p className="text-2xl font-display font-black uppercase leading-tight text-black mb-12">
                "{review.text}"
              </p>

              <div className="border-t-4 border-black pt-6">
                <h4 className="font-display font-black text-black uppercase tracking-widest text-lg italic">{review.name}</h4>
                <p className="text-xs text-black/60 font-black uppercase flex items-center gap-2">
                  <Zap size={12} fill="currentColor" /> {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-40 p-12 md:p-24 brutal-border bg-white text-center relative overflow-hidden shadow-brutal-lime"
        >
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-neon-lime brutal-border rotate-45 flex items-center justify-center">
              <Plus size={48} className="text-black rotate-45" strokeWidth={3} />
           </div>

           <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-black mb-12 italic">
              SHARE THE <span className="text-brand-neon-purple underline">NOISE</span>
           </h2>
           <button className="btn-brutal btn-brutal-purple px-16 py-6 text-xl">
              SUBMIT SYSTEM LOG
           </button>
        </motion.div>
      </div>
    </div>
  );
}
