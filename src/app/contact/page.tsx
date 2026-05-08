"use client";
import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { BRAND } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-aura text-foreground relative overflow-hidden">
      <Navbar />
      
      <main>
        {/* Contact Hero */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
          <div className="container-luxe relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-[11px] tracking-[0.5em] text-gold-deep uppercase font-bold"
            >
              Inquiries & Commissions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] uppercase tracking-tight"
            >
              Connect with the <br/> <span className="gold-shimmer">Atelier</span>
            </motion.h1>
          </div>
        </section>

        <section className="section-padding container-luxe relative">
          <div className="absolute -left-20 top-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/50" />
                  <h2 className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">Direct Communication</h2>
                </div>
                <div className="space-y-10">
                  <ContactItem 
                    icon={Phone} 
                    label="Call Our Studio" 
                    value={BRAND.phone} 
                    href={`tel:${BRAND.phone}`}
                  />
                  <ContactItem 
                    icon={MessageCircle} 
                    label="WhatsApp Assistance" 
                    value={BRAND.whatsappDisplay} 
                    href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
                  />
                  <ContactItem 
                    icon={Mail} 
                    label="Email Our Curator" 
                    value={BRAND.email} 
                    href={`mailto:${BRAND.email}`}
                  />
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/50" />
                  <h2 className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">Atelier Location</h2>
                </div>
                <ContactItem 
                  icon={MapPin} 
                  label="Studio Address" 
                  value={BRAND.address} 
                />
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/50" />
                  <h2 className="font-display text-[10px] tracking-[0.4em] text-gold-deep uppercase font-bold">Visiting Hours</h2>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-gold border border-gold/10 luxury-border">
                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-foreground/40 uppercase mb-1 font-bold">Mon - Sat</p>
                    <p className="text-sm tracking-[0.1em] uppercase font-bold">10:00 AM — 07:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 glass-premium p-10 md:p-16 shadow-elegant luxury-border relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <MessageCircle className="w-20 h-20" strokeWidth={1} />
              </div>
              
              <h3 className="font-display text-3xl uppercase mb-12 tracking-wide">Submit a <span className="gold-shimmer">Brief</span></h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput label="FULL NAME" placeholder="e.g. ARJUN SHARMA" />
                  <FormInput label="EMAIL ADDRESS" placeholder="ARJUN@EXAMPLE.COM" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput label="PHONE NUMBER" placeholder="+91 XXX XXX XXXX" />
                  <FormInput label="COLLECTION INTEREST" placeholder="E.G. GANESHA, TEMPLE" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-foreground/40 font-bold">YOUR VISION / BRIEF</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border-b border-gold/20 p-6 focus:outline-none focus:border-gold transition-all text-[11px] uppercase tracking-[0.2em] font-bold"
                    placeholder="DESCRIBE THE MOORTI OR ARCHITECTURAL REQUIREMENT..."
                  />
                </div>
                <button className="w-full py-6 bg-foreground text-white text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-gold-deep transition-all duration-700 shadow-elegant relative overflow-hidden group">
                  <span className="relative z-10">SEND INQUIRY</span>
                  <div className="absolute inset-0 bg-gold-deep -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[500px] bg-secondary relative overflow-hidden border-t border-gold/10">
          <div className="absolute inset-0 bg-stone-100 flex items-center justify-center grayscale opacity-60">
             <Image src="/images/2.jpeg" alt="map bg" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-10">
            <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg mb-6 luxury-border">
              <MapPin className="w-8 h-8 text-gold" />
            </div>
            <h4 className="font-display text-xs tracking-[0.5em] text-gold-deep uppercase font-bold mb-4">Visit the Atelier</h4>
            <p className="font-serif text-2xl italic text-foreground max-w-lg mb-8">
              &quot;Experience the divine heritage in person at our Jaipur studio.&quot;
            </p>
            <button className="px-10 py-4 glass-premium text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-foreground hover:text-white transition-all duration-500 luxury-border">
              Get Directions
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500 luxury-border">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[10px] tracking-widest text-foreground/40 uppercase mb-1 font-bold">{label}</p>
        <p className="text-sm tracking-[0.1em] uppercase font-bold transition-colors group-hover:text-gold-deep">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function FormInput({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] tracking-[0.4em] uppercase text-foreground/40 font-bold">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border-b border-gold/20 p-6 focus:outline-none focus:border-gold transition-all text-[11px] uppercase tracking-[0.2em] font-bold"
      />
    </div>
  );
}
