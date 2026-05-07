import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/marble/CategorySection";
import { BRAND, MATERIALS } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* About Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-espresso/40 z-10" />
          <Image
            src="/images/1.jpeg"
            alt="Artisans at work"
            fill
            className="object-cover"
          />
          <div className="relative z-20 text-center text-white px-5">
            <h1 className="font-display text-5xl md:text-7xl tracking-[0.2em] uppercase">OUR LEGACY</h1>
            <p className="mt-6 text-sm md:text-lg tracking-[0.3em] uppercase font-light opacity-80">Three Generations of Devotion</p>
          </div>
        </section>

        {/* The Story */}
        <section className="section-padding container-luxe">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="font-display text-xs tracking-[0.4em] text-gold uppercase">EST. 1987</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Crafting <em className="gold-text not-italic">Sacred</em> Presence in Makrana Marble
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Founded in the heart of Rajasthan's white marble district, {BRAND.name} began as a small atelier of master carvers dedicated to the preservation of ancient temple iconography. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Today, we continue that legacy, blending scriptural accuracy with modern artistic expression. Each moorti is not just a statue, but a culmination of weeks of rhythmic chiseling and deep meditative focus.
              </p>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-4 border border-gold/30 z-10" />
              <Image
                src="/images/3.jpeg"
                alt="Marble sculpture detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Philosophy / Materials */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 texture-paper opacity-20" />
          <div className="container-luxe relative z-10">
            <SectionHeader
              eyebrow="MATERIAL PHILOSOPHY"
              title="The Soul of the Stone"
              subtitle="We only carve what is worthy of the divine"
            />
            
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {MATERIALS.map((m) => (
                <div key={m.name} className="bg-background p-8 border border-border hover-lift">
                  <div className="font-serif text-4xl text-gold/20 mb-6">0{MATERIALS.indexOf(m) + 1}</div>
                  <h3 className="font-display text-sm tracking-[0.2em] text-foreground mb-4 uppercase">{m.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground uppercase tracking-widest">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Karigars */}
        <section className="section-padding container-luxe">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Master Karigars</h2>
            <p className="text-muted-foreground font-light text-lg">
              Our studio is home to some of the most revered artisans in the Makrana tradition. Many have inherited their craft from fathers and grandfathers who carved the very temples they now take inspiration from.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/${i}.jpeg`}
                  alt={`Artisan ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-display text-xs tracking-widest text-gold uppercase mb-1">Master Carver</p>
                  <p className="font-serif text-2xl text-white">Legacy Artist 0{i}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
