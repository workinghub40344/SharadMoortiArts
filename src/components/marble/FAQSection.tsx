"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/site";
import { SectionHeader } from "./CategorySection";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding bg-background">
      <div className="container-luxe max-w-4xl">
        <SectionHeader
          eyebrow="Considered Answers"
          title="Frequently asked"
          subtitle="A few questions our patrons most often bring to us."
        />

        <div className="mt-14 border-t border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return ( 
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-gold-deep transition-colors">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-gold-deep group-hover:text-gold-deep transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={1.5} /> : <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-16 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
