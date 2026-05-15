import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Leaf, Sparkles, Flame, Droplets, ChevronLeft, ChevronRight, Zap } from "lucide-react";

const menuItems = [
  {
    category: "Hot Drinks",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-brand-neon-purple",
    shadow: "shadow-brutal-purple",
    items: [
      { name: "Espresso", price: "₹60.00", desc: "Concentrated Coffee shots" },
      { name: "Cappucino", price: "₹80.00", desc: "Perfect Blend of arabica and robusta beans" },
      { name: "Irish Cappucino", price: "₹100.00", desc: "Flavoured Cappucino" },
      { name: "Vanilla Cappucino", price: "₹100.00", desc: "Flavoured Cappucino" },
      { name: "Cafe Mocha", price: "₹100.00", desc: "Chocolate flavoured cappucino" },
      { name: "Hot chocolate", price: "₹80.00", desc: "Hot chocolate Milk" },
      { name: "Cafe latte", price: "₹100.00", desc: "Coffee with less froth and more milk." },
      { name: "Matcha Latte", price: "₹130.00", desc: "Best cermonial grade Japanese matcha with milk" },
      { name: "Purpleccino", price: "₹120.00", desc: "Root based vegetation flavoured coffee with natural purple color", highlight: true },
    ]
  },
  {
    category: "Ice Teas",
    icon: <Leaf className="w-6 h-6" />,
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-lime",
    items: [
      { name: "Lemon iced tea", price: "₹100.00", desc: "Lemon flavoured ice tea" },
      { name: "Peach iced tea", price: "₹100.00", desc: "Peach flavored ice tea" },
      { name: "Strawberry Iced tea", price: "₹100.00", desc: "Strawberry flavoured ice tea" },
      { name: "Cranberry Iced Tea", price: "₹100.00", desc: "Cranberry flavoured ice tea" },
      { name: "Cucumber Iced tea", price: "₹100.00", desc: "Cucumber flavoured ice tea" },
    ]
  },
  {
    category: "Mojitos",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-brand-neon-blue",
    shadow: "shadow-brutal-blue",
    items: [
      { name: "Classic mint mojito", price: "₹110.00", desc: "Classic Mojito" },
      { name: "Cool blue mojito", price: "₹110.00", desc: "Blue curacao based mojito" },
      { name: "Green apple mojito", price: "₹110.00", desc: "Green apple flavoured mojito" },
      { name: "Raspberry mojito", price: "₹110.00", desc: "Raspberry flavoured mojito" },
    ]
  }
];

const highlights = [
  "Popular: Board Games",
  "Popular: Cappuccino",
  "Popular: Hot Chocolate",
  "Natural Purple Coffee",
  "Nitrogen Infusion",
  "3-Day Fermented Sourdough",
  "99% Caffeine",
  "Open Until Late",
  "Free High Speed WiFi",
  "Neo Brutalist Vibes Only"
];

const galleryImages = [
  { url: "/input_file_0.png", title: "Purpleccino Magic", tag: "Visuals" },
  { url: "/input_file_1.png", title: "Latte Art", tag: "Atmosphere" },
  { url: "/input_file_2.png", title: "Cafe Culture", tag: "Space" },
  { url: "/input_file_3.png", title: "Fresh Brews", tag: "Brewing" }
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(0);

  const categories = ["All", "Hot Drinks", "Ice Teas", "Mojitos"];

  const nextImage = () => setActiveImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = filter === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <div className="pt-40 pb-20 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-brand-neon-purple/5 -skew-x-12 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 bg-brand-neon-lime text-black brutal-border mb-6 rotate-2">
            <span className="font-display font-black uppercase text-sm tracking-widest">The Catalog // 2026</span>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-display font-black uppercase tracking-tighter text-white leading-none italic">
            THE <span className="text-brand-neon-purple mt-4 block md:inline md:mt-0">MENU</span>
          </h1>
        </motion.div>

        {/* Marquee */}
        <div className="mb-32 overflow-hidden py-10 bg-brand-neon-blue border-y-4 border-black -mx-6 md:-mx-10">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Zap size={24} className="text-black" fill="black" />
                    <span className="text-2xl font-display font-black uppercase italic text-black">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn-brutal text-sm ${
                filter === cat 
                  ? "bg-brand-neon-lime text-black shadow-brutal-purple -translate-x-1 -translate-y-1" 
                  : "bg-white text-black hover:bg-brand-neon-blue transition-colors"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((category) => (
              <motion.div 
                key={category.category}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`brutal-card ${category.color} p-10 hover:${category.shadow} group`}
              >
                <div className="flex items-center justify-between mb-10 border-b-4 border-black pb-4">
                  <div className="flex items-center gap-4 text-black">
                    {category.icon}
                    <h3 className="text-3xl font-display font-black uppercase italic">{category.category}</h3>
                  </div>
                  <Zap size={24} fill="black" />
                </div>

                <div className="space-y-10">
                  {category.items.map((item, i) => (
                    <div key={i} className={`group/item cursor-pointer p-4 transition-all brutal-border hover:bg-black hover:text-white ${item.highlight ? 'bg-black text-white -rotate-2 scale-105' : 'bg-white text-black rotate-1'}`}>
                      <div className="flex justify-between items-start mb-2">
                         <h4 className="text-xl font-display font-black uppercase leading-tight">{item.name}</h4>
                         <span className={`px-2 py-1 brutal-border text-xs font-black ${item.highlight ? 'bg-brand-neon-lime text-black' : 'bg-black text-white'}`}>
                           {item.price}
                         </span>
                      </div>
                      <p className="font-bold text-xs opacity-70 uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Artisanal Showcase */}
        <div className="mt-40 border-t-4 border-black pt-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-[8vw] font-display font-black uppercase tracking-tighter text-white leading-[0.8]">
                VISUAL <br /> 
                <span className="text-brand-neon-pink italic">VIBRATIONS</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevImage} className="btn-brutal bg-white p-6 hover:bg-brand-neon-blue"><ChevronLeft size={32} strokeWidth={4} /></button>
              <button onClick={nextImage} className="btn-brutal bg-white p-6 hover:bg-brand-neon-purple"><ChevronRight size={32} strokeWidth={4} /></button>
            </div>
          </div>

          <div className="relative brutal-border aspect-video overflow-hidden group shadow-brutal-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0"
              >
                <img 
                  src={galleryImages[activeImage].url} 
                  alt={galleryImages[activeImage].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-10 left-10 p-8 bg-brand-neon-lime text-black brutal-border max-w-sm -rotate-2">
                  <span className="font-display font-black uppercase text-sm tracking-widest block mb-2 opacity-60">
                    {galleryImages[activeImage].tag}
                  </span>
                  <h3 className="text-4xl font-display font-black uppercase italic leading-none">
                    {galleryImages[activeImage].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
