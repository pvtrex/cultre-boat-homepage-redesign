import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const MusicStudio3D = lazy(() => import("./MusicStudio3D"));

export function StudioShowcase() {
  return (
    <section
      className="relative w-full bg-foreground text-primary-foreground overflow-hidden"
      aria-labelledby="studio-showcase-heading"
    >
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary-foreground/70">
                The Studio
              </span>
            </div>
            <h2
              id="studio-showcase-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight"
            >
              Where sound,
              <br />
              story & design
              <br />
              <span className="text-gradient">come together.</span>
            </h2>
            <p className="text-primary-foreground/75 text-base md:text-lg max-w-md leading-relaxed">
              Step inside our creative room — a space where brand voices are
              tuned, narratives mixed, and visual identities mastered into
              something culture can hear.
            </p>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-background/5 to-background/0 ring-1 ring-primary-foreground/10"
          >
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/40 text-sm tracking-widest uppercase">
                  Loading studio…
                </div>
              }
            >
              <MusicStudio3D />
            </Suspense>
            <div className="pointer-events-none absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40">
              Drag · Rotate
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
