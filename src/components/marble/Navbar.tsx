"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, ChevronDown, ShoppingBag, ChevronRight } from "lucide-react";
import { BRAND, NAV_LINKS, TRUST_STRIP, COLLECTION_DROPDOWN, HERO } from "@/data/site";
import Image from "next/image";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return (
    <>
      <div className="bg-secondary text-foreground/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase py-2 text-center font-display border-b border-foreground/5 h-[37px]">
        {/* Placeholder to avoid layout shift */}
      </div>
      <header className="sticky top-0 z-50 bg-transparent h-20 md:h-24">
        <nav className="container-luxe flex items-center justify-between h-full">
          <div className="font-display text-sm tracking-[0.4em] text-gold-deep">SHARAD MOORTI ARTS</div>
        </nav>
      </header>
    </>
  );

  return (
    <>
      {/* Top strip */}
      <div className="bg-secondary text-foreground/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase py-2 text-center font-display border-b border-foreground/5">
        <span className="inline-flex items-center gap-2">
          {TRUST_STRIP.map((item, idx) => (
            <span key={item} className="flex items-center gap-2">
              {idx > 0 && <span className="text-gold/40 mx-2 md:mx-4">|</span>}
              <span className={idx > 1 ? "hidden sm:inline" : ""}>{item}</span>
            </span>
          ))}
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elegant"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-luxe relative flex items-center h-20 md:h-24">
          {/* Brand - Pushed to Left */}
          <div className="flex-1 flex justify-start">
            <a href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="font-display text-sm tracking-[0.4em] text-gold-deep -mb-1">SHARAD</span>
                <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-foreground">MOORTI ARTS</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav - Centered */}
          <ul className="hidden lg:flex items-center gap-8 px-4">
            {NAV_LINKS.map((l) => (
              <li 
                key={l.label} 
                className="group py-8"
                onMouseEnter={() => l.hasDropdown && setHoveredLink(l.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={l.href}
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase font-medium text-foreground/80 hover:text-gold-deep transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {l.label}
                  {l.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredLink === l.label ? "rotate-180" : ""}`} />}
                </a>

                {/* Dropdown Menu (Mega Menu Style) */}
                <AnimatePresence>
                  {l.hasDropdown && hoveredLink === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 w-[1100px] max-w-[95vw] bg-background border border-border shadow-2xl z-[100]"
                    >
                      <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
                      
                      <div className="relative z-10 flex h-full">
                        {/* Links Sections - 4 Columns */}
                        <div className="flex-[3] p-10 grid grid-cols-4 gap-8 border-r border-border/50">
                          {COLLECTION_DROPDOWN.map((column) => (
                            <div key={column.title}>
                              <h3 className="font-display text-[9px] tracking-[0.3em] text-gold-deep uppercase mb-6 border-b border-gold/10 pb-3 font-bold">
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.links.map((link) => (
                                  <li key={link.label}>
                                    <a 
                                      href={link.href}
                                      className="block text-[10px] tracking-widest text-foreground/70 hover:text-gold-deep transition-all duration-300 uppercase hover:translate-x-1"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Featured Section */}
                        <div className="flex-[1.2] bg-secondary/20 p-10 flex flex-col justify-between">
                          <div className="space-y-4">
                            <h3 className="font-display text-[9px] tracking-[0.3em] text-gold-deep uppercase font-bold">Masterpiece of the Month</h3>
                            <div className="relative aspect-square overflow-hidden border border-gold/10 shadow-elegant">
                              <Image 
                                src={BRAND.name === "Sharad Moorti Arts" ? HERO.image : "/images/placeholder.jpg"} 
                                alt="Featured Piece" 
                                fill 
                                className="object-cover"
                              />
                            </div>
                            <p className="font-serif text-lg text-foreground italic">Siddhi Vinayak Ganesha</p>
                          </div>
                          
                          <a href="/collection" className="text-[9px] tracking-[0.4em] text-gold-deep font-bold uppercase border-b border-gold/30 hover:border-gold transition-colors mt-6 inline-block">
                            VIEW COLLECTION →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Actions - Pushed to Right */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <button aria-label="Search" className="p-2 text-foreground/70 hover:text-gold-deep transition-colors">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            
            <button 
              onClick={() => setCartOpen(true)}
              aria-label="Cart" 
              className="p-2 text-foreground/70 hover:text-gold-deep transition-colors relative"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[8px] flex items-center justify-center rounded-full">1</span>
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden p-2 text-foreground"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background p-10 flex flex-col shadow-2xl"
            >
              <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-16 relative z-10">
                <div className="flex flex-col">
                  <span className="font-display text-sm tracking-[0.3em] text-gold-deep -mb-1">SHARAD</span>
                  <span className="font-display text-xl tracking-[0.15em] text-foreground">MOORTI ARTS</span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 hover:bg-secondary rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="relative z-10 flex flex-col gap-8">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-3xl text-foreground hover:text-gold transition-colors flex items-center justify-between group"
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto relative z-10 space-y-8">
                <div className="gold-divider" />
                <div className="space-y-4">
                   <p className="text-[10px] tracking-[0.3em] text-gold uppercase">Quick Contact</p>
                   <a href={`tel:${BRAND.phone}`} className="block text-lg tracking-widest uppercase">{BRAND.phone}</a>
                   <a href={`mailto:${BRAND.email}`} className="block text-[11px] tracking-widest text-muted-foreground uppercase underline underline-offset-4 decoration-gold/30">{BRAND.email}</a>
                </div>
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
                  className="block text-center py-5 bg-foreground text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors shadow-elegant"
                >
                  WhatsApp Atelier
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
