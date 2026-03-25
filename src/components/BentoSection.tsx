import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import agencyStrategy from "@/assets/agency-strategy.jpg";
import agencyContent from "@/assets/agency-content.jpg";
import agencyDesign from "@/assets/agency-design.jpg";
import TextImageReveal from './TextImageReveal';
//mera hai bhai
export function BentoSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="bento-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2
            id="bento-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg">
            A creative studio that transforms brands into stories worth telling—and audiences into communities that care.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 bento-card group"
          >
            <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
              <img
                src={agencyStrategy}
                alt="Brand strategy session with creative professionals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-primary-foreground/80 uppercase tracking-wide mb-2">
                  Strategy First
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  We dig deep before we create.
                </h3>
                <Button 
                  variant="secondary" 
                  className="rounded-full"
                  aria-label="Learn more about our strategy approach"
                >
                  Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Vertical Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card group"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={agencyContent}
                alt="Content creator filming professional video"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  Content That Connects
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Stories that resonate, not just reach
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card bg-accent p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <p className="text-accent-foreground/80 text-sm uppercase tracking-wide mb-4">
                Why It Matters
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground leading-tight">
                In a world of noise, culture cuts through.
              </h3>
            </div>
            <Button 
              variant="secondary" 
              className="rounded-full self-start mt-6"
            >
              See Our Impact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 bento-card group"
          >
            <div className="relative aspect-[16/9] md:aspect-[3/1] overflow-hidden">
              <img
                src={agencyDesign}
                alt="Designer working on brand identity mockups"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
              <div className="absolute bottom-6 left-6 top-6 flex flex-col justify-end max-w-md">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Build Your Brand Identity
                </h3>
                <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
                  From strategy to execution, we craft identities that stand out and stand for something.
                </p>
                <Button 
                  variant="secondary" 
                  className="rounded-full self-start"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        <TextImageReveal />
  
    </section>
   
  );
}
