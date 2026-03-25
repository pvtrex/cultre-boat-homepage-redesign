import { motion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceVisual from "@/assets/service-visual.jpg";

const services = [
  { 
    link: '#services', 
    text: 'Brand Strategy', 
    image: serviceStrategy 
  },
  { 
    link: '#services', 
    text: 'Social Media', 
    image: serviceSocial 
  },
  { 
    link: '#services', 
    text: 'Content Creation', 
    image: serviceContent 
  },
  { 
    link: '#services', 
    text: 'Visual Design', 
    image: serviceVisual 
  },
];

export function CategorySection() {
  return (
    <section
      id="services"
      className="relative bg-background overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Services That Drive Growth
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From strategy to execution, we help brands find their voice and connect with audiences that matter.
          </p>
        </motion.div>
      </div>

      {/* Flowing Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[500px] md:h-[600px]"
      >
        <FlowingMenu
          items={services}
          speed={15}
          textColor="hsl(0 0% 98%)"
          bgColor="hsl(220 20% 10%)"
          marqueeBgColor="hsl(220 90% 56%)"
          marqueeTextColor="hsl(0 0% 100%)"
          borderColor="hsl(220 15% 20%)"
        />
      </motion.div>
    </section>
  );
}
