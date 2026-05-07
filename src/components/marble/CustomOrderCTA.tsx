"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { BRAND } from "@/data/site";

export default function CustomOrderCTA() {
  return (
    <section id="bespoke" className="section-padding bg-marble texture-paper">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-[11px] tracking-[0.3em] text-gold-deep uppercase">Bespoke Commission</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-5 leading-[1.05] text-balance">
              Some idols are not <em className="gold-text not-italic">bought.</em><br />
              They are <em className="gold-text not-italic">summoned.</em>
            </h2> 
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed font-light max-w-lg">
              A vision from your dream. A heirloom for your child's first home. A
              presence for your ancestral temple. Share what you imagine — our
              master karigar will sketch it back to you within forty-eight hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 bg-foreground text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-deep transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/80 text-foreground text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-white transition-all duration-500"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Call Atelier
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/80 text-foreground text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-white transition-all duration-500"
              >
                <FileText className="w-4 h-4" strokeWidth={1.5} />
                Submit Brief
              </a>
            </div>

            <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              ◆ Limited handcrafted commissions accepted each season
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 texture-marble bg-gradient-to-br from-stone-100 via-amber-50 to-stone-300 shadow-elegant" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-[8rem] leading-none text-espresso/15">ॐ</div>
                <p className="font-display text-[10px] tracking-[0.3em] text-gold-deep uppercase mt-4">Your Vision</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-foreground text-white p-6 max-w-[200px]">
              <p className="font-serif text-2xl leading-tight">48 hr sketch turnaround</p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/60 mt-2">From master karigar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
