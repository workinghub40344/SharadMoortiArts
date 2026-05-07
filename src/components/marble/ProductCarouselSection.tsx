"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";
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
    <section id={id} className="section-padding bg-background texture-paper border-b border-border">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
          <a href="#collections" className="group inline-flex items-center gap-2 text-gold hover:text-gold-soft transition-colors text-[11px] tracking-[0.2em] uppercase font-medium pb-2">
            View All {title}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
            {products.map((p, i) => (
              <CarouselItem key={p.id} className="pl-4 md:pl-6 lg:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                  className="group hover-lift bg-card border border-border h-full flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden image-zoom">
                    <Link href={`/product/${p.id}`}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </Link>
                    {/* Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur text-[9px] tracking-[0.22em] uppercase text-espresso font-medium z-10">
                      {p.tag}
                    </span>
                    {/* Wishlist */}
                    <button
                      aria-label="Add to wishlist"
                      className="absolute top-4 right-4 w-9 h-9 bg-ivory/90 backdrop-blur flex items-center justify-center hover:bg-ivory transition-colors z-10"
                    >
                      <Heart className="w-4 h-4 text-espresso" strokeWidth={1.5} />
                    </button>
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-2">{p.material}</p>
                    <Link href={`/product/${p.id}`} className="block">
                      <h3 className="font-serif text-xl text-foreground hover:text-gold transition-colors">{p.name}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1.5 flex-grow">{p.desc}</p>

                    <div className="flex items-baseline justify-between mt-5">
                      <span className="font-serif text-lg text-foreground tabular-nums">{formatINR(p.price)}</span>
                      <span className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground">Onwards</span>
                    </div>

                    <div className="gold-divider my-5" />

                    <div className="flex gap-2">
                      <Link 
                        href={`/product/${p.id}`}
                        className="flex-1 px-3 py-2.5 border border-foreground/20 text-foreground text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 text-center"
                      >
                        Details
                      </Link>
                      <a
                        href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Enquiry about ${p.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-foreground text-white hover:bg-gold transition-colors flex items-center justify-center"
                        aria-label="WhatsApp enquiry"
                      >
                        <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-3 mt-8">
            <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 h-10 w-10 bg-transparent border-gold/40 text-gold hover:bg-gold hover:text-espresso-deep rounded-none" />
            <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 h-10 w-10 bg-transparent border-gold/40 text-gold hover:bg-gold hover:text-espresso-deep rounded-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
