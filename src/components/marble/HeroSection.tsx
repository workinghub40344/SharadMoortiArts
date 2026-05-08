"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, Sparkles, MoveRight } from "lucide-react";
import Image from "next/image";
import { HERO, BRAND } from "@/data/site";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse move for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative overflow-hidden bg-aura text-foreground min-h-[90vh] flex items-center">
      {/* Dynamic Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, hsl(var(--gold) / 0.15) 0%, transparent 40%)`
          )
        }}
      />
      
      {/* Background Mandala with Parallax */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="/images/mandala-bg.png"
          alt="Divine Mandala Pattern"
          fill
          priority
          className="object-cover object-right-top opacity-[0.15] mix-blend-multiply scale-110"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <div className="container-luxe relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-24 pb-20">
        {/* Left — Editorial Copy */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-10"
          > 
            <span className="h-[1px] w-12 bg-gold/50" />
            <span className="font-display text-[10px] md:text-[11px] tracking-[0.4em] text-gold-deep uppercase font-bold">
              EST. 1987 · MAKRANA ATELIER
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-[-0.02em] text-foreground uppercase"
            >
              DIVINE ART <br />
              <span className="flex items-center gap-4">
                <span className="text-gold italic font-serif lowercase tracking-normal text-3xl md:text-5xl lg:text-6xl normal-case pr-1 font-light">of</span>
                <span className="gold-shimmer">MARBLE</span>
              </span>
            </motion.h1>
            
            {/* Subtle floating ornament */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-12 w-32 h-32 border border-gold/10 rounded-full opacity-20 pointer-events-none"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-lg text-base md:text-xl text-foreground/90 leading-relaxed font-medium"
          >
            Preserving the sacred heritage of hand-carved stone. <br className="hidden md:block" />
            Every chisel stroke, a silent prayer in Makrana marble.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a
              href="#collections"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-foreground text-white text-[11px] tracking-[0.3em] uppercase font-bold overflow-hidden"
            >
              <span className="relative z-10">EXPLORE COLLECTION</span>
              <MoveRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gold-deep -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </a>
            
            <a
              href="#bespoke"
              className="group inline-flex items-center gap-4 px-12 py-5 text-foreground text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-500 luxury-border"
            >
              BESPOKE ORDERS
            </a>
          </motion.div>
        </div>

        {/* Right — Interactive cues */}
        <div className="hidden xl:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-10 text-[10px] tracking-[0.3em] uppercase text-foreground/30">
          {["FULL VIEW", "DETAILS", "PROCESS", "HERITAGE"].map((item, idx) => (
            <motion.div 
              key={item} 
              whileHover={{ x: -10, color: "hsl(var(--gold-deep))" }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <span className="w-10 h-[1px] bg-foreground/10 group-hover:bg-gold-deep transition-colors" />
              <span className="font-medium">{item}</span>
              <span className="font-display opacity-40 group-hover:opacity-100">0{idx + 1}</span>
            </motion.div>
          ))}
        </div>

        {/* Right — Product Visual with Depth */}
        <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md"
          >
            {/* Ethereal Background Aura */}
            <div className="absolute -inset-10 bg-radial-gold opacity-10 blur-[100px] rounded-full animate-pulse-slow" />
            
            <div className="relative w-full h-full p-2 bg-background shadow-elegant overflow-hidden">
              <div className="absolute inset-0 texture-marble opacity-[0.03] pointer-events-none" />
              
              <Image
                src={HERO.image}
                alt="Divine Marble Sculpture"
                fill
                priority
                className="relative w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges with refined look */}
            {HERO.badges.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 + i * 0.2 }}
                className={`absolute hidden md:flex items-center gap-3 px-5 py-2.5 bg-white/95 text-foreground backdrop-blur-md shadow-elegant border border-gold/10 text-[8px] tracking-[0.2em] uppercase font-bold
                  ${i === 0 ? "top-8 -left-12" : ""}
                  ${i === 1 ? "top-1/2 -right-8" : ""}
                  ${i === 2 ? "bottom-8 -left-8" : ""}
                `}
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(var(--gold),0.5)]" />
                {b}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-foreground/40 font-bold">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
