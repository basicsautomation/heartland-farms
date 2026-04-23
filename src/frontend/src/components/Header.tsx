import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practices", href: "/practices" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      data-ocid="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-subtle border-b border-border"
          : "bg-card/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          data-ocid="header.logo_link"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-subtle">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-foreground text-base tracking-tight group-hover:text-primary transition-colors duration-200">
              Heartland Farms
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-body">
              Vijayapura, Karnataka
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="header.nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`header.nav_link.${link.label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-body font-medium text-foreground/75 hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
              activeProps={{
                className: "text-primary bg-primary/8 font-semibold",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              size="sm"
              className="ml-2 font-body"
              data-ocid="header.cta_button"
            >
              Connect With Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-ocid="header.mobile_menu_toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 flex flex-col"
          data-ocid="header.mobile_menu"
        >
          <nav className="flex flex-col gap-1 p-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                data-ocid={`header.mobile_nav_link.${link.label.toLowerCase()}`}
                className="px-4 py-4 text-lg font-body font-medium text-foreground border-b border-border/50 hover:text-primary transition-colors duration-200"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu}>
              <Button
                className="mt-6 w-full font-body"
                size="lg"
                data-ocid="header.mobile_cta_button"
              >
                Connect With Us
              </Button>
            </Link>
          </nav>
          <div className="mt-auto p-6 text-center">
            <p className="text-sm text-muted-foreground font-body italic">
              "Where Nature Meets Innovation"
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
