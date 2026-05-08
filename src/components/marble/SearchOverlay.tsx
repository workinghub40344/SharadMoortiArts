"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/site";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.material.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col glass-premium"
        >
          <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
          
          {/* Header */}
          <div className="container-luxe py-8 flex items-center justify-between border-b border-gold/10">
            <div className="flex flex-col">
              <span className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">Atelier Search</span>
              <span className="font-display text-lg tracking-[0.2em] text-foreground uppercase">Sharad Moorti Arts</span>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            <div className="container-luxe py-16 lg:py-24 max-w-4xl">
              {/* Input Area */}
              <div className="relative mb-20 group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-gold/50 group-focus-within:text-gold transition-colors" />
                <input 
                  autoFocus
                  type="text"
                  placeholder="SEARCH FOR DIVINITY..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold outline-none py-6 pl-16 font-display text-2xl md:text-4xl lg:text-5xl tracking-widest placeholder:text-foreground/20 transition-all uppercase"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                {/* Popular Categories */}
                <div className="space-y-10">
                  <h3 className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold flex items-center gap-3">
                    <Sparkles className="w-3 h-3" />
                    Trending Now
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {["White Marble Ganesha", "Ram Darbar", "Temple Fountains", "Lakshmi Moorti", "Makrana Artisans"].map((tag) => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-6 py-3 border border-gold/10 text-[10px] tracking-[0.3em] uppercase font-bold hover:border-gold hover:text-gold-deep transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Results */}
                <div className="space-y-10">
                  <h3 className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">
                    {query ? `Suggestions for "${query}"` : "Suggested Masterpieces"}
                  </h3>
                  
                  <div className="space-y-8">
                    {filteredProducts.map((p) => (
                      <a key={p.id} href={`/product/${p.id}`} className="flex items-center gap-6 group">
                        <div className="relative w-20 h-24 bg-secondary overflow-hidden luxury-border">
                          <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-[9px] tracking-[0.3em] text-gold-deep uppercase font-bold mb-1">{p.material}</p>
                          <h4 className="font-display text-sm tracking-[0.1em] uppercase group-hover:text-gold transition-colors">{p.name}</h4>
                          <div className="mt-2 flex items-center gap-2 text-[9px] tracking-widest text-foreground/40 font-bold uppercase">
                            View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    ))}
                    {query && filteredProducts.length === 0 && (
                      <p className="font-serif text-xl italic text-foreground/40">No pieces found matching your search...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="container-luxe py-8 border-t border-gold/10 text-center">
            <p className="text-[9px] tracking-[0.5em] text-foreground/40 uppercase font-bold">Crafting Heritage Since 1987 · Makrana, Rajasthan</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
