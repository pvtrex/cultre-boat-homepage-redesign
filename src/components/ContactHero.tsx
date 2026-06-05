import { motion, Variants } from "framer-motion";

interface ContactHeroProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function ContactHero({ containerVariants, itemVariants }: ContactHeroProps) {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl space-y-6"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground"
        >
          LET'S SET
          <br />
          <span className="text-gradient">SAIL TOGETHER.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Ready to define your brand's space in culture? Connect with our team to discuss strategy, visual identity, WebGL development, or general inquiries.
        </motion.p>
      </motion.div>
    </section>
  );
}
