"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useEffect } from "react";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const FILTERS = [
  {
    name: "Category",
    options: ["All Moortis", "Ganesha", "Lakshmi", "Ram Darbar", "Shiva", "Buddha", "Hanuman"]
  },
  {
    name: "Material",
    options: ["White Makrana", "Statuary Marble", "Black Marble", "Italian Marble", "Pink Sandstone"]
  },
  {
    name: "Size",
    options: ["Small (Under 12\")", "Medium (1-2 ft)", "Large (2-4 ft)", "Life Size (5ft+)", "Custom Size"]
  },
  {
    name: "Price Range",
    options: ["Under ₹50,000", "₹50k - ₹2 Lac", "₹2 Lac - ₹5 Lac", "₹5 Lac+", "Investment Pieces"]
  }
];

export default function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex justify-end"
        >
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md bg-background h-full shadow-2xl flex flex-col"
          >
            <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />
            
            {/* Header */}
            <div className="p-8 flex items-center justify-between border-b border-gold/10 relative z-10">
              <div className="flex flex-col">
                <span className="font-display text-[9px] tracking-[0.4em] text-gold-deep uppercase font-bold">Refine Gallery</span>
                <span className="font-display text-xl tracking-[0.1em] text-foreground uppercase">Atelier Filters</span>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8 space-y-12 relative z-10">
              {FILTERS.map((section) => (
                <div key={section.name} className="space-y-6">
                  <h3 className="font-display text-[10px] tracking-[0.3em] text-gold-deep uppercase font-bold border-b border-gold/10 pb-3">
                    {section.name}
                  </h3>
                  <div className="space-y-4">
                    {section.options.map((opt, i) => (
                      <button 
                        key={opt}
                        className="flex items-center justify-between w-full group text-left"
                      >
                        <span className="text-xs tracking-widest uppercase text-foreground/70 group-hover:text-gold-deep transition-colors">
                          {opt}
                        </span>
                        <div className={`w-4 h-4 border border-gold/20 rounded-sm flex items-center justify-center transition-all ${i === 0 && section.name === "Category" ? "bg-gold border-gold" : "group-hover:border-gold"}`}>
                          {i === 0 && section.name === "Category" && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-gold/10 relative z-10 space-y-4">
              <button className="w-full py-5 bg-foreground text-white text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-gold-deep transition-all duration-500 shadow-elegant">
                Apply Filters
              </button>
              <button 
                onClick={onClose}
                className="w-full py-5 text-[9px] tracking-[0.4em] uppercase font-bold text-foreground/40 hover:text-foreground transition-colors"
              >
                Clear All
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
