import Navbar from "@/components/marble/Navbar";
import HeroSection from "@/components/marble/HeroSection";
import TrustStrip from "@/components/marble/TrustStrip";
import CategorySection from "@/components/marble/CategorySection";
import FeatureSection from "@/components/marble/FeatureSection";
import BestsellerSection from "@/components/marble/BestsellerSection";
import ProductCarouselSection from "@/components/marble/ProductCarouselSection";
import ProcessSection from "@/components/marble/ProcessSection";
import MaterialSection from "@/components/marble/MaterialSection";
import CustomOrderCTA from "@/components/marble/CustomOrderCTA";
import TestimonialsSection from "@/components/marble/TestimonialsSection";
import FAQSection from "@/components/marble/FAQSection";
import Footer from "@/components/marble/Footer";
import { MOORTI_PRODUCTS, TEMPLE_PRODUCTS, FOUNTAIN_PRODUCTS, PRODUCTS } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <CategorySection />
        <ProductCarouselSection 
          id="bestsellers" 
          eyebrow="REVERED" 
          title="BEST SELLERS" 
          subtitle="Most loved by our customers"
          products={PRODUCTS} 
        />

        <ProductCarouselSection 
          id="moorti" 
          eyebrow="Divine Forms" 
          title="Moorti Collection" 
          products={MOORTI_PRODUCTS} 
        />
        
        <ProductCarouselSection 
          id="temples" 
          eyebrow="Sacred Spaces" 
          title="Temple Collection" 
          products={TEMPLE_PRODUCTS} 
        />
        
        <ProductCarouselSection 
          id="fountains" 
          eyebrow="Flowing Grace" 
          title="Fountain Collection" 
          products={FOUNTAIN_PRODUCTS} 
        />

        <ProcessSection />
        <MaterialSection />
        
        <FeatureSection />
        
        <CustomOrderCTA />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
