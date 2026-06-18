import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Control Panel Design",
  "PLC Programming",
  "SCADA Development",
  "HMI Development",
  "Electrical Installation",
  "Site Commissioning",
];

const industryLinks = [
  "Rice Mills",
  "Flour Mills",
  "Dal Mills",
  "Feed Mills",
  "Food Processing",
  "Packaging Industries",
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    ocid: "footer.linkedin_link",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    ocid: "footer.facebook_link",
  },
  { icon: Twitter, label: "Twitter", href: "#", ocid: "footer.twitter_link" },
  { icon: Youtube, label: "YouTube", href: "#", ocid: "footer.youtube_link" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" data-ocid="footer">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded bg-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-sm tracking-tight">
                TEJA
              </span>
              <span className="font-display font-bold text-accent text-sm tracking-widest -mt-0.5">
                CONTROLS
              </span>
            </div>
          </div>
          <p className="text-sm text-white/65 font-body leading-relaxed mb-5">
            Leading provider of Electrical Control Panel Design, Manufacturing,
            PLC Programming and SCADA solutions for Food Processing Industries
            across India.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href, ocid }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Teja Controls on ${label}`}
                data-ocid={ocid}
                className="w-9 h-9 rounded bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-accent mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid={`footer.nav_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className="text-sm font-body text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <span className="text-xs font-display font-bold text-accent uppercase tracking-widest mt-4 block">
                Services
              </span>
            </li>
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="/#services"
                  data-ocid={`footer.service_link.${s.toLowerCase().replace(/\s+/g, "_")}`}
                  className="text-sm font-body text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-accent mb-4">
            Industries
          </h3>
          <ul className="space-y-2.5">
            {industryLinks.map((ind) => (
              <li key={ind}>
                <a
                  href="/#industries"
                  data-ocid={`footer.industry_link.${ind.toLowerCase().replace(/\s+/g, "_")}`}
                  className="text-sm font-body text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {ind}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-accent mb-4">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <p className="text-xs text-white/50 font-body mb-0.5">Phone</p>
                <a
                  href="tel:+919902003486"
                  data-ocid="footer.phone_link"
                  className="text-sm font-body text-white/80 hover:text-accent transition-colors duration-200"
                >
                  +91 9902003486
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <p className="text-xs text-white/50 font-body mb-0.5">Email</p>
                <a
                  href="mailto:Revana@tajascontrols.com"
                  data-ocid="footer.email_link"
                  className="text-sm font-body text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Revana@tajascontrols.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <div>
                <p className="text-xs text-white/50 font-body mb-0.5">
                  Location
                </p>
                <span className="text-sm font-body text-white/80 leading-snug">
                  #5, Subramanya Swamy Temple Road,
                  <br />
                  Lakshmipura Post, Dasanapura Hobli,
                  <br />
                  Kachohalli Industrial Area Road,
                  <br />
                  Bengaluru North – 560091
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/50 font-body">
          © {year} Teja Controls. All rights reserved.
        </p>
        <p className="text-xs text-white/30 font-body">
          Engineering Reliable Automation
        </p>
      </div>
    </footer>
  );
}
