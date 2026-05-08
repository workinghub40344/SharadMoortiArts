import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import Image from "next/image";
import { PRODUCTS, MOORTI_PRODUCTS, TEMPLE_PRODUCTS, FOUNTAIN_PRODUCTS, BRAND } from "@/data/site";
import { MessageCircle, Shield, Truck, Sparkles, ChevronRight } from "lucide-react";
import ProductCarouselSection from "@/components/marble/ProductCarouselSection";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Combine all products to find the one we need
  const allProducts = [...PRODUCTS, ...MOORTI_PRODUCTS, ...TEMPLE_PRODUCTS, ...FOUNTAIN_PRODUCTS];
  const product = allProducts.find(p => p.id === parseInt(id)) || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-aura text-foreground relative overflow-hidden">
      <Navbar />
      
      <main>
        {/* Breadcrumbs */}
        <div className="container-luxe py-8 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/60 font-bold">
          <a href="/" className="hover:text-gold transition-colors">Home</a>
          <span className="h-px w-4 bg-gold/30" />
          <a href="/collection" className="hover:text-gold transition-colors">Collection</a>
          <span className="h-px w-4 bg-gold/30" />
          <span className="text-gold-deep">{product.name}</span>
        </div>
 
        <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden shadow-elegant luxury-border">
               <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute top-8 left-8 px-6 py-3 glass-premium text-[10px] tracking-[0.4em] uppercase font-bold text-gold-deep">
                {product.material}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="relative aspect-square bg-secondary opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer luxury-border overflow-hidden group">
                    <Image src={product.image} alt="detail" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
               ))}
            </div>
          </div>
 
          {/* Details */}
          <div className="lg:col-span-5 space-y-12 py-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-8 bg-gold/50" />
                <span className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">{product.tag || "Heritage Collection"}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] uppercase tracking-tight">
                {product.name.split(' ').map((word, idx) => (
                  <span key={word} className={idx === 1 ? "gold-shimmer" : ""}>{word} </span>
                ))}
              </h1>
              <div className="flex items-center gap-6 pt-2">
                <p className="font-serif text-3xl text-foreground">₹{product.price.toLocaleString()}</p>
                <div className="h-8 w-px bg-border" />
                <span className="text-[9px] tracking-[0.3em] text-foreground/60 uppercase font-bold leading-relaxed">Price Includes <br/>Atelier Certification</span>
              </div>
            </div>
 
            <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed italic font-serif">
              &quot;{product.desc}. Hand-carved from a single block of {product.material} marble. Every stroke reflects centuries of Makrana heritage.&quot;
            </p>
 
            <div className="space-y-6 pt-6">
               <button className="w-full py-6 bg-foreground text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-gold-deep transition-all duration-700 shadow-elegant relative overflow-hidden group">
                 <span className="relative z-10">ADD TO ATELIER COLLECTION</span>
                 <div className="absolute inset-0 bg-gold-deep -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
               </button>
               <a 
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=I am interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 glass-premium flex items-center justify-center gap-4 text-foreground text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-foreground hover:text-white transition-all duration-700"
               >
                 <MessageCircle className="w-5 h-5" />
                 Enquire via WhatsApp
               </a>
            </div>
 
            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-gold/10">
              <Feature icon={Shield} title="Insured Shipping" desc="Safe delivery across India" />
              <Feature icon={Truck} title="7 Day Transit" desc="From atelier to home pooja" />
              <Feature icon={Sparkles} title="Ritual Pure" desc="Scriptural iconography" />
              <Feature icon={MessageCircle} title="Live Tracking" desc="Real-time stone work updates" />
            </div>
 
            {/* Accordions */}
            <div className="space-y-2 pt-10">
               {["THE ARTISAN'S NOTES", "CARE & MAINTENANCE", "SHIPPING & DELIVERY"].map((title) => (
                 <div key={title} className="border-b border-gold/10 py-6 flex justify-between items-center cursor-pointer group transition-all">
                   <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-foreground/70 group-hover:text-gold-deep group-hover:translate-x-2 transition-all">{title}</span>
                   <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                 </div>
               ))}
            </div>
          </div>
        </section>
 
        <div className="gold-divider opacity-20" />

        <ProductCarouselSection 
          id="related-products"
          eyebrow="Recommendations"
          title="Related Masterpieces" 
          subtitle="Pieces that share the same spiritual lineage"
          products={PRODUCTS.filter(p => p.id !== product.id)} 
        />
      </main>

      <Footer />
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-gold"><Icon className="w-4 h-4" strokeWidth={1.5} /></div>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-1">{title}</p>
        <p className="text-[9px] tracking-widest text-muted-foreground uppercase">{desc}</p>
      </div>
    </div>
  );
}
