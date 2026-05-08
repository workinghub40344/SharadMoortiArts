"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/data/site";
import Link from "next/link";

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Mock cart items for demonstration
  const cartItems = [PRODUCTS[0]];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[300] backdrop-blur-sm"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[310] shadow-2xl flex flex-col"
          >
            <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-gold/10 relative z-10">
              <div className="flex flex-col">
                <span className="font-display text-[9px] tracking-[0.4em] text-gold-deep uppercase font-bold">Acquisition</span>
                <span className="font-display text-xl tracking-[0.1em] text-foreground uppercase">Your Atelier Cart</span>
              </div>
              <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 relative z-10 space-y-10">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-8 group">
                    <div className="relative w-24 aspect-[4/5] bg-secondary overflow-hidden luxury-border flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-2">
                      <div>
                        <h3 className="font-display text-sm tracking-wider uppercase mb-1 group-hover:text-gold transition-colors">{item.name}</h3>
                        <p className="text-[10px] tracking-[0.2em] text-foreground/40 uppercase font-bold">{item.material}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-serif text-lg">₹{item.price.toLocaleString()}</span>
                        <button className="text-foreground/20 hover:text-gold-deep transition-colors">
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                  <ShoppingBag className="w-16 h-16 mb-2 text-gold/30" strokeWidth={1} />
                  <p className="font-display text-xs tracking-[0.4em] uppercase font-bold">Your Atelier is Empty</p>
                  <button 
                    onClick={onClose} 
                    className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold border-b border-gold pb-1"
                  >
                    Explore Collection
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-10 border-t border-gold/10 bg-aura relative z-10 space-y-8">
              <div className="flex items-center justify-between font-display text-[10px] tracking-[0.4em] uppercase font-bold">
                <span className="text-foreground/40">Atelier Subtotal</span>
                <span className="text-lg tracking-widest gold-shimmer">₹{cartItems.reduce((acc, i) => acc + i.price, 0).toLocaleString()}</span>
              </div>
              <p className="text-[9px] tracking-[0.3em] text-foreground/30 uppercase font-bold leading-relaxed text-center italic">
                Crating and insured transit calculated at next step. <br /> Each piece is meticulously packed for global travel.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/checkout"
                  onClick={onClose}
                  className="w-full py-6 bg-foreground text-white text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-gold-deep transition-all duration-700 flex items-center justify-center gap-4 shadow-elegant relative overflow-hidden group"
                >
                  <span className="relative z-10">PROCEED TO ACQUISITION</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-gold-deep -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </Link>
                <button 
                  onClick={onClose} 
                  className="w-full py-5 text-[10px] tracking-[0.5em] uppercase font-bold text-foreground/40 hover:text-foreground transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
