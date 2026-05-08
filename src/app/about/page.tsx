"use client";
import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/marble/CategorySection";
import { BRAND, MATERIALS } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-aura text-foreground relative overflow-hidden">
      <Navbar />
      
      <main>
        {/* About Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-espresso/60 z-10" />
          <Image
            src="/images/1.jpeg"
            alt="Artisans at work"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="relative z-20 text-center text-white px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] uppercase leading-none">
                OUR <br/> <span className="gold-shimmer">LEGACY</span>
              </h1>
              <p className="mt-8 text-sm md:text-xl tracking-[0.5em] uppercase font-bold opacity-90">Three Generations of Devotion</p>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
             <div className="h-20 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
             <span className="text-[9px] tracking-[0.4em] uppercase text-gold/80 font-bold">SCROLL TO DISCOVER</span>
          </div>
        </section>

        {/* The Story */}
        <section className="section-padding container-luxe relative">
          <div className="absolute -left-20 top-40 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-gold/50" />
                <span className="font-display text-xs tracking-[0.4em] text-gold-deep uppercase font-bold">EST. 1987</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight uppercase">
                Crafting <em className="gold-shimmer not-italic">Sacred</em> Presence in Makrana
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-medium italic font-serif">
                <p>
                  Founded in the heart of Rajasthan's white marble district, {BRAND.name} began as a small atelier of master carvers dedicated to the preservation of ancient temple iconography. 
                </p>
                <p>
                  Today, we continue that legacy, blending scriptural accuracy with modern artistic expression. Each moorti is not just a statue, but a culmination of weeks of rhythmic chiseling and deep meditative focus.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] shadow-2xl luxury-border overflow-hidden group"
            >
              <Image
                src="/images/3.jpeg"
                alt="Marble sculpture detail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* Philosophy / Materials */}
        <section className="section-padding bg-aura relative overflow-hidden border-y border-gold/10">
          <div className="absolute inset-0 texture-paper opacity-20" />
          <div className="container-luxe relative z-10">
            <SectionHeader
              eyebrow="MATERIAL PHILOSOPHY"
              title="THE SOUL OF THE STONE"
              subtitle="We only carve what is worthy of the divine"
            />
            
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MATERIALS.map((m, i) => (
                <motion.div 
                  key={m.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-premium p-10 luxury-border group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="font-display text-4xl text-gold/20 mb-8 group-hover:text-gold-deep transition-colors">0{i + 1}</div>
                  <h3 className="font-display text-xs tracking-[0.3em] text-foreground mb-6 uppercase font-bold">{m.name}</h3>
                  <p className="text-[11px] leading-relaxed text-foreground/60 uppercase tracking-widest font-bold">{m.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Karigars */}
        <section className="section-padding container-luxe relative overflow-hidden">
          <div className="absolute -right-20 bottom-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl uppercase mb-8"
            >
              The Master <span className="gold-shimmer">Karigars</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/80 font-medium text-lg md:text-2xl italic font-serif leading-relaxed"
            >
              &quot;Our studio is home to some of the most revered artisans in the Makrana tradition. Many have inherited their craft from fathers and grandfathers who carved the very temples they now take inspiration from.&quot;
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden luxury-border shadow-xl"
              >
                <Image
                  src={`/images/${i}.jpeg`}
                  alt={`Artisan ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-[10px] tracking-[0.4em] text-gold uppercase mb-2 font-bold">Master Carver</p>
                  <p className="font-display text-2xl text-white tracking-widest uppercase">Legacy Artist 0{i}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
