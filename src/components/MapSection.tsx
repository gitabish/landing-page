import { motion } from "motion/react";

export default function MapSection() {
  return (
    <section className="w-full h-[400px] relative overflow-hidden rounded-[3rem] border border-white/10 group">
      <div className="absolute inset-0 bg-brand-dark/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.261271618215!2d-0.081827423378377!3d51.52674397181774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb789886f37%3A0xc317812111108d!2sShoreditch%20High%20St%2C%20London!5e0!3m2!1sen!2suk!4v1714382500000!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Eve's Cafe Location"
        className="grayscale contrast-125 brightness-75"
      ></iframe>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 left-8 z-20 bg-brand-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs"
      >
        <h4 className="text-brand-cream font-bold uppercase tracking-widest text-xs mb-2">Visit the Studio</h4>
        <p className="text-brand-cream/50 text-[10px] uppercase tracking-widest leading-relaxed">
          124 High Street, Shoreditch<br />
          London, E1 6PQ // 07:00—20:00
        </p>
      </motion.div>
    </section>
  );
}
