import { motion, Variants } from "framer-motion";
import heroImg from "@/assets/hero-creative.jpg";

interface AboutHeroProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function AboutHero({ containerVariants, itemVariants }: AboutHeroProps) {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Our Identity
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground"
          >
            WE CRAFT
            <br />
            NARRATIVES THAT
            <br />
            <span className="text-gradient">MOVE CULTURE</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Cultre Boat is an independent creative agency and digital branding studio.
            We help ambitious brands define their position, find their voice, and build high-performance interactive experiences in a crowded digital landscape.
          </motion.p>
        </div>

        {/* Right image/thumbnail column */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden bg-card ring-1 ring-border"
        >
          <img
            src={heroImg}
            alt="Cultre Boat creative team working on digital strategy"
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
