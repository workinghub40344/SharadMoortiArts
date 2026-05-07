"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { HERO, BRAND } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-foreground">
      {/* Spotlight glow */}
      <div className="absolute inset-0 bg-gradient-spotlight pointer-events-none z-0" />
      <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none z-0 mix-blend-multiply" />
      
      {/* Mandala Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/mandala-bg.png"
          alt="Divine Mandala Pattern"
          fill
          priority
          className="object-cover object-right-top opacity-20 mix-blend-multiply transition-opacity duration-1000"
        />
        {/* Soft overlay to blend it with ivory theme */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container-luxe relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 pb-20 lg:pt-24 lg:pb-28 min-h-[88vh]">
        {/* Left — editorial copy */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          > 
            <span className="h-px w-10 bg-gold/60" />
            <span className="font-display text-[11px] tracking-[0.3em] text-gold-soft">
              ATELIER · MAKRANA · EST. 1987
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-[0.02em] text-foreground uppercase"
          >
            DIVINE ART <br />
            <span className="text-gold italic font-serif lowercase tracking-normal">of</span> MARBLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-md text-base md:text-lg text-foreground/80 leading-relaxed font-light"
          >
            Handcrafted with devotion, <br />
            inspired by tradition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#collections"
              className="group inline-flex items-center gap-3 px-10 py-3.5 border border-foreground/40 text-foreground text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-foreground hover:text-white transition-all duration-500"
            >
              EXPLORE COLLECTION
            </a>
          </motion.div>
        </div>

        {/* Right — side cues like in image */}
        <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 text-[10px] tracking-[0.25em] uppercase text-foreground/40">
          {["FULL VIEW", "ROTATE", "FACE DETAILS", "CARVING DETAILS"].map((item, idx) => (
            <div key={item} className="flex items-center gap-4 group cursor-pointer hover:text-gold transition-colors">
              <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-[8px] group-hover:border-gold">0{idx + 1}</span>
              {item}
            </div>
          ))}
        </div>

        {/* Right — product visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-[4/5] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <Image
              src={HERO.image}
              alt="Hand-carved white Makrana marble Ganesha idol under a warm spotlight"
              fill
              priority
              className="relative w-full h-full object-cover shadow-elegant"
            />

            {/* Floating badges */}
            {HERO.badges.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
                className={`absolute hidden md:flex items-center gap-2 px-4 py-2.5 bg-white/95 text-foreground backdrop-blur-md shadow-soft text-[10px] tracking-[0.2em] uppercase font-medium animate-float
                  ${i === 0 ? "top-12 -left-6" : ""}
                  ${i === 1 ? "top-1/2 -right-8" : ""}
                  ${i === 2 ? "bottom-16 -left-10" : ""}
                `}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <span className="w-1 h-1 bg-gold rounded-full" />
                {b}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
