"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import { PRODUCTS, BRAND } from "@/data/site";
import { SectionHeader } from "./CategorySection";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export default function BestsellerSection() {
  return (
    <section className="section-padding bg-background texture-paper">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="REVERED"
          title="BEST SELLERS"
          subtitle="Most loved by our customers"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
          {PRODUCTS.map((p, i) => {
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group hover-lift bg-card border border-border"
              >
                <div className="relative aspect-[4/5] overflow-hidden image-zoom">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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

                <div className="p-6">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-2">{p.material}</p>
                  <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>

                  <div className="flex items-baseline justify-between mt-5">
                    <span className="font-serif text-xl text-foreground tabular-nums">{formatINR(p.price)}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Onwards</span>
                  </div>

                  <div className="gold-divider my-5" />

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 border border-foreground/20 text-foreground text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-white hover:border-gold transition-all duration-500">
                      Details
                    </button>
                    <a
                      href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Enquiry about ${p.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-gold text-espresso-deep hover:bg-gold-soft transition-colors flex items-center justify-center"
                      aria-label="WhatsApp enquiry"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
