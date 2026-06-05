import { motion, Variants } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import AboutHero from "@/components/AboutHero";
import CompanyStory from "@/components/CompanyStory";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Expertise from "@/components/Expertise";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 md:pt-32">
        <AboutHero containerVariants={containerVariants} itemVariants={itemVariants} />
        <CompanyStory />
        <MissionVision />
        <CoreValues />
        <Expertise />

        {/* Closing CTA */}
        <section className="container mx-auto px-4 md:px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-foreground text-primary-foreground p-12 md:p-20 rounded-3xl text-center space-y-6 ring-1 ring-white/10"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">
              Let's build something
              <br />
              culture can hear.
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              We partner with selected companies who value premium design, creative storytelling, and cutting-edge web technologies.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="rounded-full px-8 py-6 text-base font-semibold group">
                  Start a Project
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
