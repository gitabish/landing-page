import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, Sparkles, Flame, Droplets, ChevronLeft, ChevronRight, Zap, Heart, Utensils } from "lucide-react";
import BobaBottle from "../components/BobaBottle";

const menuItems = [
  {
    category: "Signature Boba",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-brand-neon-purple",
    shadow: "shadow-brutal-purple",
    items: [
      { name: "Brown Sugar Pearl", price: "₹120.00", desc: "Warm brown sugar streaks and chewy pearls.", highlight: true },
      { name: "Taro Royal", price: "₹130.00", desc: "Creamy root-based purple magic with cheese foam." },
      { name: "Matcha Explosion", price: "₹140.00", desc: "Ceremonial grade matcha with honey boba." },
      { name: "Oreo Mudslide", price: "₹130.00", desc: "Chocolate cookie crumble and milk tea base." },
      { name: "Purple Haze", price: "₹125.00", desc: "Signature neon purple tea with popping pearls." },
    ]
  },
  {
    category: "Cyber Burgers",
    icon: <Utensils className="w-6 h-6" />,
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-lime",
    items: [
      { name: "Neon Classic", price: "₹250.00", desc: "Double patty, electric cheese, and secret sauce.", highlight: true },
      { name: "The Glitch Burger", price: "₹280.00", desc: "Fried egg, caramelized onions, and spicy mayo." },
      { name: "Boba Burger", price: "₹260.00", desc: "Trust us, it's a savory balsamic pearl topping." },
    ]
  },
  {
    category: "Signature Ramen",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-brand-neon-pink",
    shadow: "shadow-brutal-pink",
    items: [
      { name: "Electric Shoyu", price: "₹280.00", desc: "Soy base with charred pork and bamboo shoots.", highlight: true },
      { name: "Spicy Neon Miso", price: "₹300.00", desc: "Rich chili-miso broth with corn and nori." },
      { name: "Urban Tonkotsu", price: "₹320.00", desc: "18-hour bone broth for the ultimate soul fuel." },
      { name: "Cyber Veggie", price: "₹260.00", desc: "Mushroom dashi with seasonal greens and tofu." },
    ]
  },
  {
    category: "Neon Refreshers",
    icon: <Leaf className="w-6 h-6" />,
    color: "bg-brand-neon-lime",
    shadow: "shadow-brutal-lime",
    items: [
      { name: "Lemon Sparkler", price: "₹100.00", desc: "Lemon citrus with carbonated kick." },
      { name: "Peach Rebel", price: "₹110.00", desc: "Peach flavored tea with lychee jelly." },
      { name: "Strawberry Splash", price: "₹110.00", desc: "Fresh strawberries and green tea base." },
      { name: "Cyan Lychee", price: "₹120.00", desc: "Electric blue lychee mojito minus the booze." },
    ]
  }
];

const highlights = [
  "Popular: Brown Sugar Boba",
  "Popular: Matcha Latte",
  "Popular: Taro Swirl",
  "Natural Purple Tea",
  "Spicy Neon Ramen",
  "Popping Pearls",
  "99% Flavor",
  "Open Until Late",
  "Free High Speed WiFi",
  "Neo Brutalist Vibes Only"
];

const galleryImages = [
    { url: "/images/bobaa.jpg", title: "Pearl Perfection", tag: "Signature" },
    { url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop", title: "Cyber Burger", tag: "Grill" },
    { url: "/images/ramennew.jpg", title: "Electric Ramen", tag: "Broth" },
    { url: "/images/bobaa.jpg", title: "Taro Vibes", tag: "Atmosphere" },
  { url: "https://images.unsplash.com/photo-1563200192-34900742f567?q=80&w=1200&auto=format&fit=crop", title: "Sugar Rush", tag: "Visuals" }
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(0);

  const categories = ["All", "Signature Boba", "Cyber Burgers", "Signature Ramen", "Neon Refreshers"];

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
      
      <BobaBottle 
        className="absolute top-20 left-[10%] w-24 h-32 rotate-[-10deg] hidden lg:block" 
        delay={0.2}
      />

      <BobaBottle 
        className="absolute bottom-40 right-[15%] w-32 h-44 rotate-[15deg] hidden lg:block" 
        delay={1.2}
      />
      
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 bg-brand-neon-lime text-black brutal-border mb-6 rotate-2">
            <span className="font-display font-black uppercase text-sm tracking-widest">The Catalog // 2026</span>
          </div>
          <h1 className="text-5xl md:text-[10vw] font-display font-black uppercase tracking-tighter text-black leading-none italic">
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
              <h2 className="text-6xl md:text-[8vw] font-display font-black uppercase tracking-tighter text-black leading-[0.8]">
                VISUAL <br /> 
                <span className="text-brand-neon-pink italic">VIBRATIONS</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevImage} className="btn-brutal bg-white p-6 hover:bg-brand-neon-blue"><ChevronLeft size={32} strokeWidth={4} /></button>
              <button onClick={nextImage} className="btn-brutal bg-white p-6 hover:bg-brand-neon-purple"><ChevronRight size={32} strokeWidth={4} /></button>
            </div>
          </div>

          <div className="relative brutal-border aspect-video overflow-hidden group shadow-brutal-dark">
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
