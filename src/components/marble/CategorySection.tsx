"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/site";

export default function CategorySection() {
  const MotionLink = motion(Link);
  return (
    <section id="collections" className="section-padding bg-background texture-paper">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="The Pantheon"
          title="SACRED CREATIONS"
          subtitle="Discover our divine collection"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {CATEGORIES.map((c, i) => (
            <MotionLink
              key={c.name} 
              href="/collection"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group text-center"
            >
              <div className="relative aspect-square mb-6">
                {/* Ornate border circle */}
                <div className="absolute inset-0 border-[1px] border-gold/30 rounded-full scale-[1.08] group-hover:scale-[1.12] transition-transform duration-700" />
                <div className="absolute inset-0 border-[1px] border-gold/10 rounded-full scale-[1.15]" />
                
                <div className="relative h-full w-full rounded-full overflow-hidden bg-marble shadow-elegant">
                  <Image
                    src={c.image}
                    alt={`${c.name} marble moorti`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-espresso-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display text-lg tracking-[0.15em] text-foreground group-hover:text-gold-deep transition-colors uppercase">{c.name}</h3>
                <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground">COLLECTION</p>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-5"
      >
        <span className="h-px w-8 bg-gold/50" />
        <span className="font-display text-[11px] tracking-[0.3em] uppercase text-gold">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gold/50" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`mt-5 text-base md:text-lg leading-relaxed font-light ${light ? "text-white/70" : "text-foreground/60"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
