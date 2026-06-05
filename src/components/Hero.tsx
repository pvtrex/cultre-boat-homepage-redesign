import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/imgdownloader-4cd3c9cc.webp";
import thumb1 from "@/assets/imgdownloader-52dceea8.webp";
import thumb2 from "@/assets/imgdownloader-0b2ed353.webp";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen bg-background overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 pt-8 lg:pt-16"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Creative Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight"
            >
              WE BUILD
              <br />
              STORIES THAT
              <br />
              <span className="text-gradient">BRANDS LIVE BY</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed"
            >
              A creative studio that helps brands find their voice, 
              tell meaningful stories, and build cultural relevance in the digital age.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button
                onClick={scrollToAbout}
                className="group rounded-full px-8 py-6 text-base font-semibold"
              >
                Start Your Story
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-base font-semibold border-2"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt="Creative team collaborating on brand strategy in modern agency office"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Work Thumbnails */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-4 top-1/4 flex flex-col gap-3"
            >
              {[thumb1, thumb2].map((img, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 rounded-full bg-card border-2 border-border overflow-hidden shadow-lg"
                  aria-label={`View project ${i + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-card rounded-2xl p-5 shadow-xl max-w-[240px]"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Our Philosophy
              </p>
              <p className="font-display text-lg font-semibold text-foreground leading-tight">
                Everybody loves a good story. We love to build them.
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-3 px-0 text-foreground hover:text-accent"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
