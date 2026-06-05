import { motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-card hover:bg-card/85 transition-colors p-8 md:p-12 rounded-3xl ring-1 ring-border flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Our Mission
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              To Build Brands With Soul
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't believe in generic campaigns or disposable templates. Our mission is to capture the cultural imagination by building strategic, aesthetically stunning narratives that deliver tangible business value.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card hover:bg-card/85 transition-colors p-8 md:p-12 rounded-3xl ring-1 ring-border flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Our Vision
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Define the Digital Frontier
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a web that is as visual, interactive, and storytelling-rich as the best film reels. By pioneering creative code and immersive layout technologies, we aim to lead the digital branding space for high-end growth enterprises.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
