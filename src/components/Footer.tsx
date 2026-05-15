import { Instagram, Twitter, Facebook, ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import MapSection from "./MapSection";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-32 pb-12 px-6 md:px-10 border-t-4 border-black relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-brand-neon-purple/10 blur-[120px] -z-10 rotate-12"></div>
      
      <div className="container mx-auto">
        <div className="mb-32 brutal-border">
          <MapSection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-5xl font-display font-black tracking-tighter mb-8 text-brand-neon-lime italic">BOBA QUEEN.</h2>
            <p className="font-bold text-black/50 leading-tight max-w-xs">
              THE ULTIMATE BOBA REBELLION. ELECTRIC FLAVORS FOR THE DIGITAL GENERATION.
            </p>
          </div>
          
          <div className="brutal-card bg-brand-neon-purple p-8 -rotate-2">
            <h4 className="font-display font-black uppercase text-xl mb-6 text-black flex items-center gap-2">
              <Mail size={20} strokeWidth={3} /> Listen Up
            </h4>
            <ul className="space-y-3 font-black text-black uppercase text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Spotify</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div className="brutal-card bg-brand-neon-blue p-8 rotate-1">
            <h4 className="font-display font-black uppercase text-xl mb-6 text-black flex items-center gap-2">
              <MapPin size={20} strokeWidth={3} /> HQ
            </h4>
            <ul className="space-y-3 font-black text-black uppercase text-sm">
              <li>124 High Street<br/>Shoreditch, London</li>
              <li className="flex items-center gap-2 mt-4"><Clock size={16} strokeWidth={3} /> 07:00—23:00</li>
            </ul>
          </div>

          <div className="brutal-card bg-white p-8 -rotate-1">
            <h4 className="font-display font-black uppercase text-xl mb-6 text-black">Transmit</h4>
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="w-full bg-transparent border-b-4 border-black pb-4 text-xs font-black tracking-widest text-black focus:outline-none placeholder:text-black/30"
                />
                <button className="absolute right-0 bottom-4 text-black hover:scale-125 transition-transform">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t-4 border-black">
          <div className="flex gap-10">
            <Instagram size={28} strokeWidth={3} className="text-black hover:text-brand-neon-pink cursor-pointer transition-all hover:scale-125" />
            <Twitter size={28} strokeWidth={3} className="text-black hover:text-brand-neon-blue cursor-pointer transition-all hover:scale-125" />
            <Facebook size={28} strokeWidth={3} className="text-black hover:text-brand-neon-purple cursor-pointer transition-all hover:scale-125" />
          </div>
          
          <p className="font-display font-black uppercase tracking-widest text-black/30 text-xs">
            © 2026 Cafe Boba Queen. Built for the bold.
          </p>
          
          <div className="flex gap-8 font-black uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-brand-neon-lime">Privacy</a>
            <a href="#" className="hover:text-brand-neon-purple">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
