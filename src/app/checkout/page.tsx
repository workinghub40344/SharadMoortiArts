"use client";
import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, Lock } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/data/site";

export default function CheckoutPage() {
  const cartItem = PRODUCTS[0]; // Mocking a cart item

  return (
    <div className="min-h-screen bg-aura text-foreground relative overflow-hidden">
      <Navbar />
      
      <main className="py-24">
        <div className="container-luxe">
          <div className="flex flex-col items-center mb-16">
            <span className="font-display text-[10px] tracking-[0.5em] text-gold-deep uppercase font-bold mb-4">Secured Checkout</span>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Atelier <span className="gold-shimmer">Acquisition</span></h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left — Checkout Form */}
            <div className="lg:col-span-7 space-y-12">
              <div className="glass-premium p-10 luxury-border space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xs">1</div>
                  <h2 className="font-display text-lg tracking-[0.2em] uppercase">Shipping Destination</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <CheckoutInput label="First Name" placeholder="ARJUN" />
                  <CheckoutInput label="Last Name" placeholder="SHARMA" />
                  <CheckoutInput label="Email" placeholder="ARJUN@EXAMPLE.COM" type="email" />
                  <CheckoutInput label="Phone" placeholder="+91" />
                  <div className="md:col-span-2">
                    <CheckoutInput label="Address" placeholder="STREET, AREA, APARTMENT" />
                  </div>
                  <CheckoutInput label="City" placeholder="JAIPUR" />
                  <CheckoutInput label="Postal Code" placeholder="302001" />
                </div>
              </div>

              <div className="glass-premium p-10 luxury-border space-y-10 opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xs">2</div>
                  <h2 className="font-display text-lg tracking-[0.2em] uppercase">Payment Method</h2>
                </div>
                <p className="text-xs tracking-widest uppercase font-bold text-foreground/40">Select shipping first...</p>
              </div>
            </div>

            {/* Right — Order Summary */}
            <div className="lg:col-span-5">
              <div className="glass-premium p-10 luxury-border sticky top-32 space-y-10">
                <h2 className="font-display text-lg tracking-[0.2em] uppercase border-b border-gold/10 pb-6">Atelier Summary</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="relative w-20 h-24 bg-secondary luxury-border overflow-hidden">
                      <Image src={cartItem.image} alt={cartItem.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display text-sm uppercase tracking-wider mb-1">{cartItem.name}</h4>
                      <p className="text-[10px] tracking-widest text-foreground/40 uppercase font-bold mb-2">{cartItem.material}</p>
                      <p className="font-serif text-lg">₹{cartItem.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gold/10">
                  <div className="flex justify-between text-[10px] tracking-[0.3em] uppercase font-bold text-foreground/60">
                    <span>Subtotal</span>
                    <span>₹{cartItem.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[10px] tracking-[0.3em] uppercase font-bold text-foreground/60">
                    <span>Atelier Transit</span>
                    <span className="text-gold-deep">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg tracking-widest uppercase font-bold pt-4 border-t border-gold/10">
                    <span>Total</span>
                    <span className="gold-shimmer">₹{cartItem.price.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full py-6 bg-foreground text-white text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-gold-deep transition-all duration-700 shadow-elegant group relative overflow-hidden">
                  <span className="relative z-10">PROCEED TO SECURE PAYMENT</span>
                  <div className="absolute inset-0 bg-gold-deep -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </button>

                <div className="space-y-4">
                  <SummaryFeature icon={ShieldCheck} text="Authenticity Guaranteed" />
                  <SummaryFeature icon={Truck} text="Insured White-Glove Delivery" />
                  <SummaryFeature icon={Lock} text="Secure Encrypted Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CheckoutInput({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-3">
      <label className="text-[9px] tracking-[0.4em] uppercase text-foreground/40 font-bold">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border-b border-gold/20 py-4 focus:outline-none focus:border-gold transition-all text-[11px] uppercase tracking-[0.2em] font-bold"
      />
    </div>
  );
}

function SummaryFeature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase font-bold text-foreground/40">
      <Icon className="w-4 h-4 text-gold/50" strokeWidth={1.5} />
      <span>{text}</span>
    </div>
  );
}
