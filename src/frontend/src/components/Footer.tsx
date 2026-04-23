import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, Phone, Youtube } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Practices", href: "/practices" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-primary-foreground/15 border border-primary-foreground/30 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-primary-foreground leading-tight">
                Heartland Farms
              </p>
              <p className="text-xs text-primary-foreground/60 tracking-widest uppercase">
                Vijayapura, Karnataka
              </p>
            </div>
          </div>
          <p className="font-display italic text-primary-foreground/80 text-base mb-5">
            "Where Nature Meets Innovation"
          </p>
          <p className="text-sm text-primary-foreground/65 font-body leading-relaxed max-w-xs">
            From a Siemens engineer to a passionate farmer — we cultivate
            premium produce with integrated, sustainable practices rooted in the
            rich soils of Vijayapura.
          </p>
          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://youtu.be/772WVHHehm4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Heartland Farms on YouTube"
              data-ocid="footer.youtube_link"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid={`footer.nav_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className="text-sm font-body text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/60 mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <a
                href="tel:+919980055940"
                data-ocid="footer.phone_link"
                className="text-sm font-body text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200"
              >
                +91 99800 55940
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <span className="text-sm font-body text-primary-foreground/75">
                Vijayapura, North Karnataka, India
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <a
                href="/contact"
                data-ocid="footer.contact_link"
                className="text-sm font-body text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200"
              >
                Send a Message
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-primary-foreground/50 font-body">
          © {year} Heartland Farms. All rights reserved.
        </p>
        <p className="text-xs text-primary-foreground/40 font-body flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-end">
          <span>Website designed by Basics Automation</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <a
            href="mailto:basics.automation@gmail.com"
            className="underline underline-offset-2 hover:text-primary-foreground/60 transition-colors"
          >
            basics.automation@gmail.com
          </a>
          <span className="hidden sm:inline opacity-50">|</span>
          <a
            href="tel:+918050371081"
            className="underline underline-offset-2 hover:text-primary-foreground/60 transition-colors"
          >
            +91 80503 71081
          </a>
        </p>
      </div>
    </footer>
  );
}
