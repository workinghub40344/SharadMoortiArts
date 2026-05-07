"use client";
import { TRUST_STRIP } from "@/data/site";

export default function TrustStrip() {
  return (
    <div className="bg-secondary text-foreground/70 border-y border-foreground/10">
      <div className="container-luxe flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[11px] tracking-[0.22em] uppercase font-display">
        {TRUST_STRIP.map((t, i) => (
          <span key={t} className="flex items-center gap-3">
            {i > 0 && <span className="text-gold/40">◆</span>}
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
 