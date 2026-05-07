"use client";
import { motion } from "framer-motion";
import { Hammer, Gem, Ruler, Truck, Flame, MessageCircle } from "lucide-react";
import { FEATURES } from "@/data/site";
import { SectionHeader } from "./CategorySection";

const ICONS = [Hammer, Gem, Ruler, Truck, Flame, MessageCircle];

export default function FeatureSection() {
  return (
    <section className="section-padding bg-gradient-marble texture-marble">
      <div className="container-luxe relative z-10">
        <SectionHeader
          eyebrow="The Atelier Promise"
          title="Why discerning devotees choose us"
          subtitle="Six pillars that define every piece that leaves our workshop."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i];
            return ( 
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500"
              >
                <Icon className="w-7 h-7 text-gold-deep mb-6" strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="gold-divider mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
