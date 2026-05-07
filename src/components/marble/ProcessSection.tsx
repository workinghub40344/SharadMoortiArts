"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROCESS } from "@/data/site";
import { SectionHeader } from "./CategorySection";

export default function ProcessSection() {
  return (
    <section id="craft" className="section-padding bg-background relative overflow-hidden text-foreground">
      {/* Subtle Background Image for Light Theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.jpeg"
          alt="Marble Crafting Process"
          fill
          className="object-cover object-center opacity-10 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      <div className="absolute inset-0 bg-gradient-spotlight pointer-events-none z-0" />
      <div className="absolute inset-0 texture-paper opacity-50 z-0 mix-blend-multiply" />

      <div className="container-luxe relative z-10">
        <SectionHeader
          eyebrow="FROM STONE TO DIVINE"
          title="The journey of every masterpiece"
          subtitle="A sacred timeline of devotion"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-8">
          {PROCESS.slice(0, 5).map((s, i) => (
            <motion.div 
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-8 flex justify-center">
                {/* Connector line */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-full h-[1px] bg-gold/20" />
                )}
                <span className="relative z-10 w-10 h-10 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center font-display text-sm text-gold group-hover:bg-gold group-hover:text-espresso transition-all duration-500 shadow-gold">
                  {i + 1}
                </span>
              </div>
              
              <div className="aspect-video bg-foreground/5 border border-foreground/10 mb-6 overflow-hidden shadow-elegant">
                {/* Placeholder for process image */}
                <div className="w-full h-full bg-secondary/40 flex items-center justify-center text-[10px] tracking-widest text-foreground/20 uppercase">
                  {s.title}
                </div>
              </div>

              <h3 className="font-display text-[10px] tracking-[0.2em] text-foreground mb-2 uppercase">{s.title}</h3>
              <p className="text-[10px] text-foreground/60 leading-relaxed uppercase tracking-wider">{s.desc.split('.')[0]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
