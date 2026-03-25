import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  index?: number;
  description?: string;
}

export function ProductCard({ name, image, category, isNew, index = 0, description }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-card mb-4">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <img
          src={image}
          alt={`${name} - ${category}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
            Popular
          </span>
        )}

        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1 }}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button
            size="icon"
            className="rounded-full h-12 w-12 bg-background text-foreground hover:bg-background/90 shadow-lg"
            aria-label={`Learn more about ${name}`}
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>

      {/* Service Info */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {category}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          <a href="#" className="focus:outline-none focus:underline">
            {name}
          </a>
        </h3>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </motion.article>
  );
}
