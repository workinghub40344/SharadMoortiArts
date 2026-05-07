"use client";
import { Instagram, Facebook, Youtube, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS, CATEGORIES } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground/70 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 texture-paper opacity-20" />
      <div className="container-luxe relative">
        {/* Decorative motif */}
        <div className="text-center mb-16">
          <div className="font-serif text-5xl text-gold/30">◆</div>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-[0.4em] text-gold -mb-1">SHARAD</span>
              <span className="font-display text-2xl tracking-[0.2em] text-foreground">MOORTI ARTS</span>
            </div>
            <p className="mt-6 text-xs leading-relaxed font-light text-foreground/50 uppercase tracking-widest">
              Preserving traditions, <br /> crafting ahvintye.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, MessageCircle, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="text-foreground/60 hover:text-gold transition-colors">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <FooterCol title="QUICK LINKS" items={NAV_LINKS} />

          {/* HELP & SUPPORT */}
          <FooterCol title="HELP & SUPPORT" items={[
            { label: "Shipping & Delivery", href: "#" },
            { label: "Returns & Refunds", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "FAQs", href: "#" },
          ]} />

          {/* CONTACT US */}
          <div>
            <div className="font-display text-[10px] tracking-[0.3em] text-gold uppercase mb-6">CONTACT US</div>
            <ul className="space-y-4 text-[11px] tracking-wide text-foreground/70">
              <li className="flex gap-3">
                <span>+91 94627 68604</span>
              </li>
              <li>
                <a href="mailto:info@sharadmoortiarts.com" className="hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30">
                  info@sharadmoortiarts.com
                </a>
              </li>
              <li className="flex gap-3">
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex gap-3 text-gold/80">
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.22em] uppercase text-foreground/50">
          <span>© {new Date().getFullYear()} {BRAND.name} Atelier — All rights reserved</span>
          <span>Crafted with reverence in Makrana, Rajasthan</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-display text-[10px] tracking-[0.3em] text-gold uppercase mb-6">{title}</div>
      <ul className="space-y-3 text-[11px] tracking-wide">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="hover:text-gold transition-colors text-foreground/60">{i.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
