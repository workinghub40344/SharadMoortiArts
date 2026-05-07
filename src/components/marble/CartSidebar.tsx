"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/data/site";

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
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[110] shadow-2xl flex flex-col"
          >
            <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-border relative z-10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-display text-sm tracking-[0.3em] uppercase">Your Atelier Cart</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 relative z-10 space-y-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="relative w-24 aspect-square bg-secondary overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-display text-[11px] tracking-widest uppercase mb-1">{item.name}</h3>
                        <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">{item.material}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm text-gold">₹{item.price.toLocaleString()}</span>
                        <button className="text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ShoppingBag className="w-12 h-12 mb-2" strokeWidth={1} />
                  <p className="font-display text-xs tracking-[0.3em] uppercase">Cart is empty</p>
                  <button onClick={onClose} className="text-[10px] tracking-widest text-gold underline underline-offset-4">Browse Collection</button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-border bg-secondary/20 relative z-10 space-y-6">
              <div className="flex items-center justify-between font-display text-[11px] tracking-[0.3em] uppercase">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{cartItems.reduce((acc, i) => acc + i.price, 0).toLocaleString()}</span>
              </div>
              <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase leading-relaxed text-center">
                Shipping and taxes calculated at checkout. <br /> All pieces include complimentary insured crating.
              </p>
              <button className="w-full py-5 bg-foreground text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors flex items-center justify-center gap-3">
                PROCEED TO CHECKOUT
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onClose} className="w-full py-4 border border-border text-[9px] tracking-[0.3em] uppercase hover:bg-white transition-colors">
                CONTINUE BROWSING
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
