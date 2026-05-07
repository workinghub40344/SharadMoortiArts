"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MATERIALS } from "@/data/site";
import { SectionHeader } from "./CategorySection";

const OPTIONS = [
  "Custom sizes — altar to monumental",
  "Matte, satin or mirror polish",
  "Indoor sanctum or outdoor garden grade",
  "Personal name or mantra engraving",
  "Choice of base — lotus, square, ornate",
  "Pran-pratishtha consultation included",
];

export default function MaterialSection() {
  return (
    <section id="materials" className="section-padding bg-background">
      <div className="container-luxe relative z-10">
        <SectionHeader
          eyebrow="The Stone & The Touch"
          title="Materials, finishes, bespoke"
          subtitle="Choose the marble that speaks to your space. Then make it entirely your own."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Materials list */}
          <div className="space-y-6">
            {MATERIALS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-6 p-6 border border-border hover:border-gold/50 transition-colors bg-card"
              >
                <div className={`w-20 h-20 flex-shrink-0 texture-marble border border-border ${
                  i === 2 ? "bg-zinc-800" : i === 3 ? "bg-stone-300" : ""
                }`} /> 
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.note}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customization options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-secondary text-foreground p-10 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-spotlight" />
            <div className="relative">
              <span className="font-display text-[11px] tracking-[0.3em] text-gold-deep uppercase">Bespoke Options</span>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-8">
                Make it <em className="gold-text not-italic">entirely yours.</em>
              </h3>
              <ul className="space-y-4">
                {OPTIONS.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-foreground/80">
                    <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
