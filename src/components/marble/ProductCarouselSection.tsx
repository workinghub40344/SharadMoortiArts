"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ArrowRight, Eye } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BRAND } from "@/data/site";
import { SectionHeader } from "./CategorySection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  material: string;
  tag: string;
  image: StaticImageData | string;
}

interface ProductCarouselSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  products: Product[];
}

export default function ProductCarouselSection({ id, eyebrow, title, subtitle, products }: ProductCarouselSectionProps) {
  return (
    <section id={id} className="section-padding bg-background texture-paper border-b border-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -right-24 top-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-luxe relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
          <a href="/collection" className="group inline-flex items-center gap-3 text-gold-deep hover:text-gold transition-colors text-[10px] tracking-[0.4em] uppercase font-bold pb-2 border-b border-gold/20">
            VIEW FULL GALLERY
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {products.map((p, i) => (
              <CarouselItem key={p.id} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
                  className="group relative flex flex-col h-full"
                >
                  {/* Portrait Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6 shadow-soft group-hover:shadow-elegant transition-shadow duration-700">
                    <div className="absolute inset-0 z-10 border-[10px] border-white/40 pointer-events-none group-hover:border-white/20 transition-all duration-700" />
                    
                    <Link href={`/product/${p.id}`} className="block h-full w-full">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                      />
                    </Link>

                    {/* Tag Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md text-[8px] tracking-[0.25em] uppercase text-gold-deep font-bold border border-gold/10">
                        {p.tag}
                      </span>
                    </div>

                    {/* Floating Actions */}
                    <div className="absolute top-6 right-6 z-20 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="w-10 h-10 bg-background/95 backdrop-blur-sm flex items-center justify-center hover:bg-gold-deep hover:text-white transition-colors shadow-soft">
                        <Heart className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                      <button className="w-10 h-10 bg-background/95 backdrop-blur-sm flex items-center justify-center hover:bg-gold-deep hover:text-white transition-colors shadow-soft">
                        <Eye className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Quick Link Overlay */}
                    <div className="absolute inset-0 bg-espresso-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-[1px] w-4 bg-gold/40" />
                      <p className="text-[9px] tracking-[0.3em] uppercase text-gold-deep font-bold">{p.material}</p>
                    </div>

                    <Link href={`/product/${p.id}`} className="block mb-2">
                      <h3 className="font-display text-lg text-foreground hover:text-gold-deep transition-colors tracking-[0.05em] uppercase">
                        {p.name}
                      </h3>
                    </Link>
                    
                    <p className="text-[12px] text-foreground/90 leading-relaxed font-medium mb-6 line-clamp-2 italic font-serif">
                      &quot;{p.desc}&quot;
                    </p>

                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[8px] tracking-[0.2em] text-foreground/70 uppercase mb-0.5">Starting From</span>
                        <span className="font-serif text-xl text-foreground font-semibold">{formatINR(p.price)}</span>
                      </div>
                      
                      <div className="flex gap-1">
                        <a
                          href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Enquiry about ${p.name}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-foreground text-white hover:bg-gold-deep transition-all duration-300 flex items-center justify-center"
                        >
                          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                        <Link 
                          href={`/product/${p.id}`}
                          className="px-6 h-10 bg-secondary text-foreground text-[9px] tracking-[0.3em] uppercase font-bold flex items-center justify-center hover:bg-gold-deep hover:text-white transition-all duration-300"
                        >
                          VIEW
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-between items-center mt-16 border-t border-border pt-8">
             <div className="flex gap-4">
                <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-transparent border-border hover:border-gold hover:bg-transparent text-foreground hover:text-gold rounded-none transition-all duration-500" />
                <CarouselNext className="static translate-y-0 h-14 w-14 bg-transparent border-border hover:border-gold hover:bg-transparent text-foreground hover:text-gold rounded-none transition-all duration-500" />
             </div>
             <p className="text-[9px] tracking-[0.5em] text-muted-foreground uppercase hidden md:block">Hand-Carved Heritage Collection</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
