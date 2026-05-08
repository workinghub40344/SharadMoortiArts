"use client";
import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { CATEGORIES, MATERIALS } from "@/data/site";
import { SectionHeader } from "@/components/marble/CategorySection";
import FilterDrawer from "@/components/marble/FilterDrawer";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function CollectionPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FilterDrawer isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
      
      <main>
        <section className="py-24 bg-aura relative overflow-hidden">
          <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
          <div className="container-luxe relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xs tracking-[0.4em] text-gold uppercase font-bold"
            >
              Catalogue
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 font-serif text-5xl md:text-7xl leading-tight uppercase"
            >
              Master <em className="gold-shimmer not-italic">Collections</em>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-sm tracking-[0.3em] uppercase text-foreground/80 font-medium"
            >
              Explore the complete atelier of Makrana marble art
            </motion.p>
          </div>
        </section>
 
        {/* Filters and Search Bar Mockup */}
        <div className="border-y border-border glass-premium sticky top-[80px] md:top-[96px] z-30">
          <div className="container-luxe flex items-center justify-between h-14 overflow-x-auto no-scrollbar gap-8">
            <div className="flex gap-8 whitespace-nowrap">
              {["ALL", "GANESHA", "LAKSHMI", "SHIVA", "HANUMAN", "BUDDHA", "FOUNTAINS", "TEMPLES"].map((f) => (
                <button key={f} className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-300 hover:text-gold ${f === "ALL" ? "text-gold border-b border-gold h-14" : "text-foreground/70"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6">
               <button 
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase text-foreground/80 hover:text-gold-deep transition-colors"
               >
                 <SlidersHorizontal className="w-4 h-4" />
                 Filter
               </button>
               <div className="hidden lg:block h-6 w-px bg-border/50" />
               <span className="hidden lg:block text-[10px] tracking-widest text-foreground/60 uppercase font-bold">Sort: Newest First</span>
            </div>
          </div>
        </div>

        <section className="section-padding container-luxe">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {CATEGORIES.map((c, i) => (
              <motion.a 
                key={c.name} 
                href={`/collection/${c.name.toLowerCase().replace(" ", "-")}`} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary shadow-soft group-hover:shadow-elegant transition-all duration-700">
                  <Image 
                    src={c.image} 
                    alt={c.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[9px] tracking-[0.4em] text-white/80 uppercase mb-2 font-bold">{c.count} Pieces</p>
                    <h3 className="font-display text-xl tracking-[0.15em] text-white uppercase group-hover:text-gold transition-colors">{c.name}</h3>
                  </div>
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none m-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Material Selection Shortcut */}
        <section className="pb-24 container-luxe">
          <div className="bg-secondary/40 p-10 md:p-16 relative overflow-hidden">
             <div className="absolute inset-0 texture-paper opacity-30" />
             <div className="relative z-10">
               <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">Shop by Material</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {MATERIALS.map((m) => (
                   <a key={m.name} href="#" className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 rounded-full border border-gold/20 mb-6 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                        <span className="font-serif text-xl">{m.name[0]}</span>
                     </div>
                     <h3 className="font-display text-[11px] tracking-widest uppercase mb-2 group-hover:text-gold">{m.name}</h3>
                     <p className="text-[9px] tracking-widest text-muted-foreground uppercase leading-relaxed">{m.note.split('.')[0]}</p>
                   </a>
                 ))}
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
