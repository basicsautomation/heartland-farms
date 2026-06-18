import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  ChevronDown,
  Cog,
  Cpu,
  Factory,
  Globe,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  Monitor,
  Shield,
  Star,
  Timer,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GallerySection } from "./GallerySection";
import {
  FeaturedSolutionsSection,
  ProcessFlowSection,
  ProductRangeSection,
  TestimonialsSection,
  WhyChooseSection,
} from "./SolutionsPage";

// --- Types ---
interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isSpecial?: boolean;
}
interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
interface IndustryCard {
  title: string;
  description: string;
  image: string;
  ocid: string;
}
interface HighlightBadge {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

// --- Data ---
const stats: StatItem[] = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 0, suffix: "", label: "Support", isSpecial: true },
];

const services: ServiceCard[] = [
  {
    icon: LayoutDashboard,
    title: "Control Panel Design",
    description:
      "Custom-engineered electrical control panels designed to exact specifications. We deliver MCC, PCC, PLC and VFD panels for industrial applications.",
  },
  {
    icon: Cpu,
    title: "PLC Programming",
    description:
      "Expert PLC programming for Siemens, Allen-Bradley and Mitsubishi platforms. Reliable ladder logic and structured text for precise process control.",
  },
  {
    icon: Monitor,
    title: "SCADA Development",
    description:
      "Full-featured SCADA systems with real-time monitoring, data logging and alarms. Centralized control visibility across your entire plant.",
  },
  {
    icon: Activity,
    title: "HMI Development",
    description:
      "Intuitive HMI interfaces for easy plant operation. Touch-panel and PC-based solutions tailored to your process and operator workflows.",
  },
  {
    icon: Zap,
    title: "Electrical Installation",
    description:
      "Professional electrical installation by certified engineers. From cable trays to power distribution — compliant, safe and efficient.",
  },
  {
    icon: Cog,
    title: "Site Commissioning",
    description:
      "End-to-end commissioning services ensuring your automation system runs flawlessly from day one. Fast, systematic, and thoroughly tested.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Support",
    description:
      "Rapid response technical support and on-site troubleshooting. Minimise downtime with our experienced team of automation specialists.",
  },
  {
    icon: Shield,
    title: "Annual Maintenance Contracts",
    description:
      "Comprehensive AMC packages keeping your systems in peak condition. Scheduled preventive maintenance and priority emergency response.",
  },
];

const industries: IndustryCard[] = [
  {
    title: "Rice Mills",
    description:
      "Complete automation of cleaning, milling, grading and packaging sections. Increase throughput and reduce manual intervention.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    ocid: "home.industry_card.1",
  },
  {
    title: "Flour Mills",
    description:
      "Process control, motor control and recipe management solutions for efficient wheat and grain flour production.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    ocid: "home.industry_card.2",
  },
  {
    title: "Dal Mills",
    description:
      "Production monitoring, energy management and process optimisation for pulse processing and dal manufacturing plants.",
    image:
      "https://images.unsplash.com/photo-1585778118583-f6f30c3c5e3e?w=600&q=80",
    ocid: "home.industry_card.3",
  },
  {
    title: "Feed Mills",
    description:
      "Automated batching, mixing and pelletising control systems for animal feed production with precision dosing.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    ocid: "home.industry_card.4",
  },
  {
    title: "Food Processing Plants",
    description:
      "Hygienic automation solutions for food processing — from raw material intake to finished product packaging.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    ocid: "home.industry_card.5",
  },
  {
    title: "Packaging Industries",
    description:
      "Automated packaging line control, conveyor management and quality inspection systems for high-speed production.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    ocid: "home.industry_card.6",
  },
];

const highlights: HighlightBadge[] = [
  { icon: Timer, label: "15+ Years" },
  { icon: Factory, label: "500+ Projects" },
  { icon: Globe, label: "Pan India" },
  { icon: Award, label: "ISO Certified" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Users, label: "Expert Team" },
];

const whyItems = [
  {
    icon: Cpu,
    title: "In-house Design Team",
    desc: "Dedicated engineers designing every panel and program in-house — no outsourcing, full accountability.",
  },
  {
    icon: Shield,
    title: "Quality Components",
    desc: "Only branded, industrial-grade components from Siemens, ABB, Schneider and L&T.",
  },
  {
    icon: Users,
    title: "Experienced Engineers",
    desc: "15+ years of hands-on experience across rice, flour, dal and feed mill automation.",
  },
  {
    icon: Timer,
    title: "Fast Commissioning",
    desc: "Systematic factory testing and rapid site commissioning minimises production downtime.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    desc: "Responsive AMC and emergency support keeping your plant running 24/7.",
  },
  {
    icon: HelpCircle,
    title: "Customised Solutions",
    desc: "No two plants are identical. Every solution is engineered specifically for your process.",
  },
];

// --- Animated Counter ---
function AnimatedCounter({
  target,
  suffix,
  isSpecial,
}: { target: number; suffix: string; isSpecial?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (isSpecial) {
            setCount(target);
            return;
          }
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 2000 / steps);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isSpecial]);
  if (isSpecial)
    return (
      <span
        ref={ref}
        className="font-display text-4xl md:text-5xl font-bold text-accent"
      >
        Pan India
      </span>
    );
  return (
    <span
      ref={ref}
      className="font-display text-4xl md:text-5xl font-bold text-accent"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const scrollToStats = () =>
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section
        id="hero"
        data-ocid="home.hero_section"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565098772267-60af42b81ef2?w=1920&q=80"
            alt="Industrial control panel manufacturing workshop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24 animate-smooth-fade">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-accent/60 text-accent bg-accent/10 text-xs uppercase tracking-widest px-4 py-1.5 mb-6 inline-flex"
            >
              Industrial Automation Experts
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Complete Automation
              <br />
              <span className="text-accent">Solutions</span> for Rice,
              <br />
              Flour &amp; Dal Mills
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              Design, Manufacturing, PLC Programming, Installation and
              Commissioning of Industrial Control Panels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                size="lg"
                onClick={scrollToContact}
                data-ocid="home.hero_quote_cta"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-sm shadow-industrial-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Quote
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                data-ocid="home.hero_projects_cta"
                className="border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToStats}
          data-ocid="home.hero_scroll_indicator"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </section>

      {/* STATS */}
      <section
        id="stats"
        data-ocid="home.stats_section"
        className="bg-primary border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isSpecial={stat.isSpecial}
                />
                <div className="w-8 h-0.5 bg-accent mx-auto" />
                <span className="font-body text-sm text-white/60 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-ocid="home.about_section"
        className="bg-background py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-sm overflow-hidden shadow-industrial-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80"
                alt="Electrical engineers working on automation systems"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 bg-primary/90 backdrop-blur-sm rounded-sm px-4 py-3 w-fit">
                  <Star className="h-4 w-4 text-accent" />
                  <span className="font-body text-sm text-white font-semibold">
                    Trusted by 100+ clients across India
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <Badge
                  variant="outline"
                  className="border-accent/50 text-accent bg-accent/5 text-xs uppercase tracking-widest mb-4 inline-flex"
                >
                  About Us
                </Badge>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Engineering <span className="text-accent">Reliable</span>
                  <br />
                  Automation
                </h2>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Teja Controls specializes in the design and manufacturing of
                Electrical Control Panels, MCC Panels, PCC Panels, PLC Panels,
                VFD Panels, SCADA Systems and complete plant automation
                solutions. With over 15 years of field experience, we deliver
                reliable, efficient and cost-effective automation to mills and
                food processing industries across India.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                From initial consultation and engineering design through
                manufacturing, factory testing, site installation and
                commissioning — we handle every stage of your automation project
                under one roof.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.label}
                      className="flex items-center gap-2.5 bg-primary/10 border border-accent/20 rounded-sm px-3 py-2.5 hover:border-accent/50 transition-colors"
                    >
                      <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="font-body text-xs font-semibold text-foreground">
                        {h.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  type="button"
                  size="default"
                  onClick={scrollToContact}
                  data-ocid="home.about_quote_cta"
                  className="bg-accent hover:bg-accent/90 text-white rounded-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={scrollToProjects}
                  data-ocid="home.about_services_cta"
                  className="border-border hover:border-accent/50 rounded-sm font-semibold transition-colors"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services-section"
        data-ocid="home.services_section"
        className="bg-muted/20 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-accent/50 text-accent bg-accent/5 text-xs uppercase tracking-widest mb-4 inline-flex"
            >
              What We Do
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground max-w-xl mx-auto">
              End-to-end automation services from design and engineering through
              commissioning and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-ocid={`home.service_card.${i + 1}`}
                  className="group bg-card border border-border rounded-sm p-6 flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-industrial-lg hover:border-accent/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-base font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries-section"
        data-ocid="home.industries_section"
        className="bg-background py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-accent/50 text-accent bg-accent/5 text-xs uppercase tracking-widest mb-4 inline-flex"
            >
              Sectors We Serve
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Industries We Serve
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground max-w-xl mx-auto">
              Specialist automation expertise across the full spectrum of
              agro-processing and food manufacturing industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                data-ocid={industry.ocid}
                className="group relative rounded-sm overflow-hidden shadow-industrial cursor-default h-72"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/10 group-hover:from-primary/85 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="w-fit inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-4 py-2 rounded-sm transition-all duration-300 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section data-ocid="home.cta_strip_section" className="bg-accent py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Plant?
          </h2>
          <p className="font-body text-base text-white/80 max-w-xl mx-auto mb-8">
            Talk to our engineers today. Get a customised automation solution
            designed specifically for your production requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              type="button"
              size="lg"
              onClick={scrollToContact}
              data-ocid="home.cta_strip_quote_button"
              className="bg-white text-accent hover:bg-white/90 font-bold px-8 rounded-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Request a Quote
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              data-ocid="home.cta_strip_whatsapp_button"
              onClick={() =>
                window.open("https://wa.me/919902003486", "_blank")
              }
              className="border-white/60 text-white bg-transparent hover:bg-white/10 font-semibold px-8 rounded-sm transition-all duration-300"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section data-ocid="home.why_choose_section" className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-accent/60 text-accent bg-accent/10 text-xs uppercase tracking-widest mb-4 inline-flex"
            >
              Why Teja Controls
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose Us?
            </h2>
            <p className="mt-4 font-body text-base text-white/60 max-w-xl mx-auto">
              We combine engineering expertise, quality components and fast
              execution to deliver automation that works — first time, every
              time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`home.why_card.${i + 1}`}
                  className="flex gap-4 p-6 rounded-sm bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <FeaturedSolutionsSection />

      {/* GALLERY */}
      <GallerySection />

      {/* WHY CHOOSE (from SolutionsPage) */}
      <WhyChooseSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* PROCESS FLOW */}
      <ProcessFlowSection />

      {/* PRODUCT RANGE */}
      <ProductRangeSection />

      {/* CTA BANNER */}
      <section
        data-ocid="home.cta_banner_section"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, #0d2a50 50%, #b35500 100%)",
        }}
      >
        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-accent/60 text-accent bg-accent/10 text-xs uppercase tracking-widest mb-6 inline-flex"
          >
            Take the Next Step
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Automate
            <br />
            <span className="text-accent">Your Plant?</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-10">
            Talk to our engineers today and get a free consultation tailored to
            your production needs — no obligation, no generic proposals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              type="button"
              size="lg"
              onClick={() => {
                window.location.assign("/contact");
              }}
              data-ocid="home.cta_banner_consult_button"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 text-base rounded-sm shadow-industrial-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://wa.me/919902003486", "_blank")
              }
              data-ocid="home.cta_banner_whatsapp_button"
              className="border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold px-10 py-6 text-base rounded-sm transition-all duration-300"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <div id="contact-section" />
    </main>
  );
}
