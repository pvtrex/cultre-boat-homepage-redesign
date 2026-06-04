import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoSection } from "@/components/BentoSection";
import { CategorySection } from "@/components/CategorySection";
import { GallerySection } from "@/components/GallerySection";
import { StudioShowcase } from "@/components/StudioShowcase";
import { ProductGrid } from "@/components/ProductGrid";
import CircularGallery from "@/components/CircularGallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Cultre Boat | Creative Agency & Digital Branding Studio</title>
      <meta
        name="description"
        content="Cultre Boat is a creative agency that helps brands find their voice, tell meaningful stories, and build cultural relevance. Branding, content, and digital marketing."
      />

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <BentoSection />
          <CategorySection />
          <GallerySection />
          <StudioShowcase />
          <ProductGrid />
        </main>
        <section className="relative h-[600px] w-full">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Index;
