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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Breadcrumbs */}
        <div className="container-luxe py-6 flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
          <a href="/" className="hover:text-gold transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/collection" className="hover:text-gold transition-colors">Collection</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Gallery - Simple for now */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
               <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] tracking-widest uppercase font-medium">
                {product.material}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="relative aspect-square bg-secondary opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-border overflow-hidden">
                    <Image src={product.image} alt="detail" fill className="object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-10 py-6">
            <div className="space-y-4">
              <span className="font-display text-xs tracking-[0.4em] text-gold uppercase">{product.tag || "Heritage Collection"}</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight uppercase">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="font-serif text-2xl text-gold-deep">₹{product.price.toLocaleString()}</p>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase border-l border-border pl-4">Inclusive of all taxes</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {product.desc}. Hand-carved from a single block of {product.material} marble. Every stroke reflects centuries of Makrana heritage.
            </p>

            <div className="space-y-4 pt-4">
               <button className="w-full py-5 bg-foreground text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-all duration-500 shadow-elegant">
                 ADD TO ATELIER COLLECTION
               </button>
               <a 
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=I am interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 border border-foreground flex items-center justify-center gap-3 text-foreground text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-foreground hover:text-white transition-all duration-500"
               >
                 <MessageCircle className="w-4 h-4" />
                 Enquire via WhatsApp
               </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-border">
              <Feature icon={Shield} title="Insured Shipping" desc="Safe delivery across India" />
              <Feature icon={Truck} title="7 Day Transit" desc="From atelier to home pooja" />
              <Feature icon={Sparkles} title="Ritual Pure" desc="Scriptural iconography" />
              <Feature icon={MessageCircle} title="Live Tracking" desc="Real-time stone work updates" />
            </div>

            {/* Accordion mockup */}
            <div className="space-y-4 pt-10">
               <div className="border-b border-border pb-4 flex justify-between items-center cursor-pointer group">
                 <span className="text-[11px] tracking-[0.3em] uppercase font-medium group-hover:text-gold transition-colors">THE ARTISAN'S NOTES</span>
                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
               <div className="border-b border-border pb-4 flex justify-between items-center cursor-pointer group">
                 <span className="text-[11px] tracking-[0.3em] uppercase font-medium group-hover:text-gold transition-colors">CARE & MAINTENANCE</span>
                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </div>
        </section>

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
