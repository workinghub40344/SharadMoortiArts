"use client";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "@/data/site";

export default function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-elegant">
      <div className="grid grid-cols-2 gap-px bg-border">
        <a
          href={`tel:${BRAND.phone}`}
          className="bg-background flex items-center justify-center gap-2 py-4 text-xs tracking-[0.22em] uppercase text-foreground"
        >
          <Phone className="w-4 h-4" strokeWidth={1.5} />
          Call
        </a>
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-deep text-white flex items-center justify-center gap-2 py-4 text-xs tracking-[0.22em] uppercase font-medium"
        > 
          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
