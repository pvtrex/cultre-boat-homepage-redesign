import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import StaggeredMenu from "@/components/StaggeredMenu";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/#gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const resolvedColors = useMemo(() => {
    const style = getComputedStyle(document.documentElement);
    const resolve = (varName: string) => {
      const val = style.getPropertyValue(varName).trim();
      return val ? `hsl(${val})` : "#000000";
    };
    return {
      accent: resolve("--accent"),
      primary: resolve("--primary"),
      foreground: resolve("--foreground"),
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-3xl md:text-2xl font-bold tracking-tight text-foreground "
          >
            Cultre Boat
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button className="rounded-full ml-2" size="sm">
                Let's Talk
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* ✅ MOBILE MENU ONLY */}
      {isMobile && (
        <StaggeredMenu
          position="right"
          items={navLinks.map((link) => ({
            label: link.name,
            ariaLabel: `Navigate to ${link.name}`,
            link: link.href,
          }))}
          colors={[resolvedColors.accent, resolvedColors.primary]}
          menuButtonColor={resolvedColors.foreground}
          openMenuButtonColor={resolvedColors.foreground}
          accentColor={resolvedColors.accent}
          isFixed={true}
          displaySocials={false}
          displayItemNumbering={false}
          closeOnClickAway={true}
          isHeaderScrolled={isScrolled}
        />
      )}
    </header>
  );
}
