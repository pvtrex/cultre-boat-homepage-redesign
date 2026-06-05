import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { name: "Brand Strategy", href: "/#services" },
    { name: "Content Creation", href: "/#services" },
    { name: "Social Media", href: "/#services" },
    { name: "Visual Design", href: "/#services" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Blog", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies", href: "#" },
  ],
  Social: [
    { name: "Instagram", href: "https://instagram.com", external: true },
    { name: "Twitter", href: "https://twitter.com", external: true },
    { name: "LinkedIn", href: "https://linkedin.com", external: true },
    { name: "Behance", href: "https://behance.net", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-20" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-display text-2xl font-bold text-primary-foreground"
              aria-label="Cultre Boat - Home"
            >
              Cultre Boat
            </Link>
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
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    )}
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
            <Link
              to="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
