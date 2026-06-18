import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#gallery" },
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

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        closeMenu();
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      closeMenu();
    }
  };

  return (
    <header
      data-ocid="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-industrial border-b border-white/10"
          : "bg-primary",
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
          <div className="w-9 h-9 rounded bg-accent flex items-center justify-center shadow-industrial">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-accent transition-colors duration-200">
              TEJA
            </span>
            <span className="font-display font-bold text-accent text-base tracking-widest -mt-1">
              CONTROLS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          data-ocid="header.nav"
        >
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                data-ocid={`header.nav_link.${link.label.toLowerCase()}`}
                className="px-3 py-2 text-sm font-body font-medium text-white/80 hover:text-accent transition-colors duration-200 rounded cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`header.nav_link.${link.label.toLowerCase()}`}
                className="px-3 py-2 text-sm font-body font-medium text-white/80 hover:text-accent transition-colors duration-200 rounded"
                activeProps={{ className: "text-accent font-semibold" }}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link to="/contact">
            <Button
              size="sm"
              className="ml-3 bg-accent hover:bg-accent/90 text-white font-display font-bold tracking-wide border-0"
              data-ocid="header.cta_button"
            >
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors duration-200"
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
          className="lg:hidden fixed inset-0 top-16 bg-primary z-40 flex flex-col"
          data-ocid="header.mobile_menu"
        >
          <nav className="flex flex-col p-6 pt-4">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  data-ocid={`header.mobile_nav_link.${link.label.toLowerCase()}`}
                  className="px-4 py-4 text-lg font-body font-medium text-white border-b border-white/10 hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  data-ocid={`header.mobile_nav_link.${link.label.toLowerCase()}`}
                  className="px-4 py-4 text-lg font-body font-medium text-white border-b border-white/10 hover:text-accent transition-colors duration-200"
                  activeProps={{ className: "text-accent font-semibold" }}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link to="/contact" onClick={closeMenu}>
              <Button
                className="mt-6 w-full bg-accent hover:bg-accent/90 text-white font-display font-bold tracking-wide"
                size="lg"
                data-ocid="header.mobile_cta_button"
              >
                Get Quote
              </Button>
            </Link>
          </nav>
          <div className="mt-auto p-6 border-t border-white/10">
            <p className="text-sm text-white/40 font-body">
              Engineering Reliable Automation Since 2009
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
