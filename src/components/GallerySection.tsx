import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Our Creative World
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Behind the Scenes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore our studio, process, and the moments that shape the stories we build.
          </p>
        </motion.div>
      </div>

      {/* Gallery Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
      >
        <DomeGallery
          fit={0.75}
          minRadius={500}
          maxVerticalRotationDeg={5}
          segments={30}
          dragDampening={2}
          grayscale={false}
          overlayBlurColor="hsl(0 0% 98%)"
          imageBorderRadius="1rem"
          openedImageBorderRadius="1.5rem"
          openedImageWidth="450px"
          openedImageHeight="450px"
        />
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
