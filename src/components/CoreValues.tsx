import { motion } from "framer-motion";
import { Compass, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function CoreValues() {
  const coreValues = [
    {
      icon: <Compass className="h-6 w-6 text-accent" />,
      title: "Culture-First Strategy",
      desc: "We align brand strategies with genuine cultural currents. We speak directly to human motives, not algorithms.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      title: "Radical Visual Craft",
      desc: "Every typography layout, color palette, and interactive hover state is fine-tuned to establish prestige.",
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Interactive Innovation",
      desc: "We blend high-performance WebGL, canvas physics, and creative coding to build websites that feel alive.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Purpose-Built Design",
      desc: "Design is vanity without business purpose. Every aesthetic choice maps back to conversions and brand trust.",
    },
  ];

  return (
    <section className="bg-muted/30 py-20 md:py-28 ring-t ring-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="h-px w-12 bg-accent inline-block mb-3" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Core Philosophy
          </h2>
          <p className="text-muted-foreground">
            Four principles that direct our agency strategy, creative decisions, and partnership workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl ring-1 ring-border hover:shadow-lg transition-all"
            >
              <div className="mb-4">{val.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
