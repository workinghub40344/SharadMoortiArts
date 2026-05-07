import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import Image from "next/image";
import { CATEGORIES, MATERIALS } from "@/data/site";
import { SectionHeader } from "@/components/marble/CategorySection";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="py-24 bg-secondary/30 relative">
          <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
          <div className="container-luxe relative z-10 text-center">
            <span className="font-display text-xs tracking-[0.4em] text-gold uppercase">Catalogue</span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-tight">Master <em className="gold-text not-italic">Collections</em></h1>
            <p className="mt-6 text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">Explore the complete atelier of Makrana marble art</p>
          </div>
        </section>

        {/* Filters and Search Bar Mockup */}
        <div className="border-y border-border bg-background sticky top-[80px] md:top-[96px] z-30">
          <div className="container-luxe flex items-center justify-between h-14 overflow-x-auto no-scrollbar gap-8">
            <div className="flex gap-8 whitespace-nowrap">
              {["ALL", "GANESHA", "LAKSHMI", "SHIVA", "HANUMAN", "BUDDHA", "FOUNTAINS", "TEMPLES"].map((f) => (
                <button key={f} className={`text-[10px] tracking-[0.3em] font-medium uppercase transition-colors hover:text-gold ${f === "ALL" ? "text-gold border-b border-gold h-14" : "text-muted-foreground"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-6">
               <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Sort: Newest First</span>
            </div>
          </div>
        </div>

        <section className="section-padding container-luxe">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {CATEGORIES.map((c) => (
              <a key={c.name} href={`/collection/${c.name.toLowerCase().replace(" ", "-")}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <Image 
                    src={c.image} 
                    alt={c.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] tracking-[0.4em] text-white opacity-80 uppercase mb-2">{c.count} Pieces</p>
                    <h3 className="font-display text-lg tracking-[0.2em] text-white uppercase group-hover:text-gold transition-colors">{c.name}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Material Selection Shortcut */}
        <section className="pb-24 container-luxe">
          <div className="bg-secondary/40 p-10 md:p-16 relative overflow-hidden">
             <div className="absolute inset-0 texture-paper opacity-30" />
             <div className="relative z-10">
               <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">Shop by Material</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {MATERIALS.map((m) => (
                   <a key={m.name} href="#" className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 rounded-full border border-gold/20 mb-6 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                        <span className="font-serif text-xl">{m.name[0]}</span>
                     </div>
                     <h3 className="font-display text-[11px] tracking-widest uppercase mb-2 group-hover:text-gold">{m.name}</h3>
                     <p className="text-[9px] tracking-widest text-muted-foreground uppercase leading-relaxed">{m.note.split('.')[0]}</p>
                   </a>
                 ))}
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
