import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactFormSection() {
  const [inquiryType, setInquiryType] = useState("Project Discussion");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const categories = ["Project Discussion", "General Inquiry", "Partnerships", "Consultation"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Inquiry sent successfully! We will connect with you in under 24 hours.");
    setFormData({
      name: "",
      email: "",
      org: "",
      message: "",
    });
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-7 bg-card border border-border p-8 md:p-12 rounded-3xl space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Select Inquiry Type
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setInquiryType(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all ${
                    inquiryType === cat
                      ? "bg-accent border-accent text-accent-foreground"
                      : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-accent">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org" className="text-sm font-medium text-foreground">
                Organization / Company
              </Label>
              <Input
                id="org"
                name="org"
                type="text"
                placeholder="Acme Corp"
                value={formData.org}
                onChange={handleInputChange}
                className="bg-background/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Project Details / Inquiry <span className="text-accent">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your objectives, timeline, or query..."
                value={formData.message}
                onChange={handleInputChange}
                className="bg-background/50 border-border resize-none"
              />
            </div>

            <Button type="submit" className="w-full rounded-full py-6 text-base font-semibold group">
              Submit Inquiry
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </form>
        </motion.div>

        {/* Info and Trust Blocks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-5 space-y-12"
        >
          {/* Contact Info Block */}
          <div className="bg-muted/20 border border-border p-8 rounded-3xl space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Our Headquarters</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Waterfront Studios, Pier 4
                    <br />
                    San Francisco, CA 94111
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Email Us</h3>
                  <a
                    href="mailto:hello@cultreboat.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-0.5 block"
                  >
                    hello@cultreboat.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Call Us</h3>
                  <a
                    href="tel:+14155552628"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-0.5 block"
                  >
                    +1 (415) 555-BOAT
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-border flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
                aria-label="Visit our Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
                aria-label="Visit our LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-card border border-border p-8 rounded-3xl space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Our Engagement Guarantee
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-sm text-foreground">24-Hour Responses</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We value your time. All project discussions and inquiries receive an initial technical response within one business day.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-sm text-foreground">Structured Collaboration</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every project kicks off with an immersive discovery session, establishing clear strategy pillars before moving to design sprints.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
