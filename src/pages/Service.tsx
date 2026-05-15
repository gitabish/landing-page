import { motion } from "motion/react";
import { Utensils, Music, Users, Camera, Zap } from "lucide-react";

const services = [
  {
    title: "Artisanal Catering",
    icon: <Utensils className="w-10 h-10" />,
    desc: "BESPOKE SEASONAL MENUS FOR CORPORATE GALLERIES AND PRIVATE EVENTS.",
    color: "bg-brand-neon-purple",
    shadow: "shadow-brutal-white"
  },
  {
    title: "Acoustic Sessions",
    icon: <Music className="w-10 h-10" />,
    desc: "CURATED AMBIENT SOUNDSCAPES AND LIVE MINIMALIST PERFORMANCES.",
    color: "bg-brand-neon-blue",
    shadow: "shadow-brutal-lime"
  },
  {
    title: "Studio Spaces",
    icon: <Users className="w-10 h-10" />,
    desc: "PRIVATE DESIGN-FOCUSED SPACES FOR CREATIVE COLLABORATION.",
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-purple"
  },
  {
    title: "Digital Capture",
    icon: <Camera className="w-10 h-10" />,
    desc: "PROFESSIONAL PHOTOGRAPHY SETTINGS FOR HIGH-END DIGITAL CONTENT.",
    color: "bg-brand-neon-pink",
    shadow: "shadow-brutal-blue"
  }
];

export default function Service() {
  return (
    <div className="pt-40 pb-20 px-6 md:px-10 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-neon-purple/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-32 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 bg-brand-neon-blue text-black brutal-border mb-6 -rotate-2">
            <span className="font-display font-black uppercase text-sm tracking-widest">Utility System // v2.0</span>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-display font-black uppercase tracking-tighter text-white leading-[0.8]">
            THE <br /> <span className="text-brand-neon-purple italic underline">UTILITIES</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className={`p-16 brutal-card ${service.color} group hover:${service.shadow} transition-all duration-500`}
            >
              <div className="text-black mb-10 group-hover:scale-125 transition-transform origin-left duration-500">
                <div className="bg-white brutal-border w-20 h-20 flex items-center justify-center shadow-brutal-black">
                   {service.icon}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                 <h3 className="text-4xl font-display font-black uppercase italic leading-none text-black">{service.title}</h3>
                 <Zap size={24} fill="black" className="opacity-40" />
              </div>
              <p className="text-lg font-black uppercase tracking-tighter text-black/70 leading-tight">
                {service.desc}
              </p>
              
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-black text-white px-8 py-3 brutal-border font-display font-black uppercase text-sm hover:bg-white hover:text-black transition-colors">
                  Initialize Request {"->"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 brutal-border border-black bg-black p-1 text-center">
            <div className="bg-brand-neon-lime p-20 brutal-border border-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                <h2 className="text-5xl md:text-[6vw] font-display font-black uppercase tracking-tighter text-black mb-8 italic leading-none">
                    READY TO <br /> <span className="underline">UPGRADE?</span>
                </h2>
                <p className="text-black font-black uppercase tracking-widest text-lg mb-12">System status: Optimizing for performance.</p>
                <button className="btn-brutal bg-white px-20 py-8 text-2xl hover:bg-brand-neon-purple hover:text-white">
                    CONNECT NOW // 0xFF
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
