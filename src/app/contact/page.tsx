import Navbar from "@/components/marble/Navbar";
import Footer from "@/components/marble/Footer";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { BRAND } from "@/data/site";
import { SectionHeader } from "@/components/marble/CategorySection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Contact Hero */}
        <section className="py-24 bg-secondary/30 relative">
          <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
          <div className="container-luxe relative z-10 text-center">
            <span className="font-display text-xs tracking-[0.4em] text-gold uppercase">Inquiries & Commissions</span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-tight">Connect with the <em className="gold-text not-italic">Atelier</em></h1>
          </div>
        </section>

        <section className="section-padding container-luxe">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-[10px] tracking-[0.4em] text-gold uppercase">Direct Communication</h2>
                <div className="space-y-6">
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

              <div className="space-y-4">
                <h2 className="font-display text-[10px] tracking-[0.4em] text-gold uppercase">Atelier Location</h2>
                <ContactItem 
                  icon={MapPin} 
                  label="Studio Address" 
                  value={BRAND.address} 
                />
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-[10px] tracking-[0.4em] text-gold uppercase">Visiting Hours</h2>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold border border-gold/10">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Mon - Sat</p>
                    <p className="text-sm tracking-wide uppercase">10:00 AM — 07:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-elegant border border-border">
              <h3 className="font-serif text-3xl mb-8">Submit a Brief</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="FULL NAME" placeholder="Your name" />
                  <FormInput label="EMAIL ADDRESS" placeholder="email@example.com" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="PHONE NUMBER" placeholder="+91" />
                  <FormInput label="COLLECTION INTEREST" placeholder="e.g. Ganesha, Temple" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">YOUR VISION / BRIEF</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-secondary/20 border-b border-border p-4 focus:outline-none focus:border-gold transition-colors text-sm uppercase tracking-wider"
                    placeholder="Describe the moorti or architectural requirement..."
                  />
                </div>
                <button className="w-full py-5 bg-foreground text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors shadow-elegant">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-10 h-10 mx-auto mb-4 opacity-20" strokeWidth={1} />
              <p className="font-display text-[10px] tracking-[0.3em] uppercase">Jaipur Art District — Map Integrated</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
        <Icon className="w-4 h-4" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-1">{label}</p>
        <p className="text-sm tracking-wide uppercase transition-colors group-hover:text-gold">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function FormInput({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-secondary/20 border-b border-border p-4 focus:outline-none focus:border-gold transition-colors text-sm uppercase tracking-wider"
      />
    </div>
  );
}
