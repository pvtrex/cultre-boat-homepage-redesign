import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoSection } from "@/components/BentoSection";
import { CategorySection } from "@/components/CategorySection";
import { GallerySection } from "@/components/GallerySection";
import { StudioShowcase } from "@/components/StudioShowcase";
import { ProductGrid } from "@/components/ProductGrid";
import CircularGallery from "@/components/CircularGallery";
import { Footer } from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Cultre Boat | Creative Agency & Digital Branding Studio</title>
      <meta
        name="description"
        content="Cultre Boat is a creative agency that helps brands find their voice, tell meaningful stories, and build cultural relevance. Branding, content, and digital marketing."
      />

      <ClickSpark
        sparkColor="#3b82f6"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
        className="min-h-screen w-full"
      >
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
      </ClickSpark>
    </>
  );
};

export default Index;
