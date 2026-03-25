import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: ["Brand Strategy", "Content Creation", "Social Media", "Visual Design"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Legal: ["Privacy", "Terms", "Cookies"],
  Social: ["Instagram", "Twitter", "LinkedIn", "Behance"],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-20" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="font-display text-2xl font-bold text-primary-foreground"
              aria-label="Cultre Boat - Home"
            >
              Cultre Boat
            </a>
            <p className="text-primary-foreground/60 mt-4 text-sm max-w-xs">
              A creative studio building culture-first brands that tell stories worth sharing.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-primary-foreground/40 uppercase tracking-wide mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-flex items-center group"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Cultre Boat. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
