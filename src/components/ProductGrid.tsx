import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import agencyStrategy from "@/assets/imgdownloader-3e7cd4ff.webp";
import agencyContent from "@/assets/imgdownloader-b467bbd0.webp";
import agencyDesign from "@/assets/imgdownloader-f770b4a8.webp";
import agencySocial from "@/assets/imgdownloader-20636367.webp";

// Services data
const services = [
  {
    id: "1",
    name: "Brand Strategy",
    price: 0,
    image: agencyStrategy,
    category: "Foundation",
    isNew: true,
    description: "Define your brand's voice, positioning, and story to stand out in a crowded market.",
  },
  {
    id: "2",
    name: "Social Media Marketing",
    price: 0,
    image: agencySocial,
    category: "Growth",
    isNew: false,
    description: "Build engaged communities and drive meaningful conversations across platforms.",
  },
  {
    id: "3",
    name: "Content Creation",
    price: 0,
    image: agencyContent,
    category: "Production",
    isNew: true,
    description: "From video to photography, we create content that tells your story beautifully.",
  },
  {
    id: "4",
    name: "Visual Design",
    price: 0,
    image: agencyDesign,
    category: "Identity",
    isNew: false,
    description: "Craft visual identities that capture attention and communicate your essence.",
  },
];

export function ProductGrid() {
  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-secondary"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
              How We Help
            </p>
            <h2
              id="products-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Our Services
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base md:text-right">
            Every brand has a story. We help you find it, shape it, and share it with the world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ProductCard key={service.id} {...service} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center text-foreground font-semibold text-sm uppercase tracking-wide group"
          >
            <span className="relative">
              Start a Conversation
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transition-transform origin-left group-hover:scale-x-100 scale-x-50" />
            </span>
            <svg
              className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
