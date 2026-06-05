import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 md:pt-32">
        <ContactHero containerVariants={containerVariants} itemVariants={itemVariants} />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
