"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import { SectionHeader } from "./CategorySection";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background texture-paper">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="REVIEWS"
          title="WHAT OUR CUSTOMERS SAY"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-gold/10 p-8 text-center group hover:border-gold/30 transition-colors"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-3 h-3 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-[11px] text-foreground/70 leading-relaxed uppercase tracking-wider mb-8 italic">
                "{t.text.split('.')[0]}."
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-marble mb-3 border border-gold/20" />
                <div className="font-display text-[10px] tracking-[0.2em] text-foreground">{t.name.toUpperCase()}</div>
                <div className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">{t.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
