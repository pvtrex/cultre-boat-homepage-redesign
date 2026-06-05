import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Expertise() {
  const disciplines = [
    { name: "Brand Positioning & Strategy", level: "Core Architecture" },
    { name: "Visual Identity & Art Direction", level: "Aesthetic Design" },
    { name: "Creative WebGL & Frontend Dev", level: "High-Performance Code" },
    { name: "Content Production & Storytelling", level: "Digital Assets" },
    { name: "Social Presence & Campaigns", level: "Market Growth" },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
            Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-none">
            Our Core
            <br />
            Disciplines.
          </h2>
          <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
            We don't offer generic templates. We build bespoke digital programs tailored to your exact industry challenges.
          </p>
        </div>

        <div className="lg:col-span-7 divide-y divide-border border-t border-b border-border">
          {disciplines.map((disc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 10 }}
              className="py-6 flex items-center justify-between group cursor-pointer transition-transform duration-300"
            >
              <div className="space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {disc.name}
                </h3>
                <p className="text-xs text-muted-foreground">{disc.level}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
