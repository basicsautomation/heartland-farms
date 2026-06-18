import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  CheckCircle,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Factory,
  FlaskConical,
  Headphones,
  Layers,
  MessageSquare,
  Monitor,
  PenTool,
  Plug,
  Power,
  Settings,
  Shield,
  SlidersHorizontal,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ──────────────────────────────────────────────────────────────
// FEATURED SOLUTIONS
// ──────────────────────────────────────────────────────────────
const solutions = [
  {
    id: "rice",
    label: "Rice Mill Automation",
    color: "orange",
    features: [
      "Cleaning Section — Pre-cleaning, de-stoning & grain separation",
      "Milling Section — Rubber-roll shelling & whitening control",
      "Grading Section — Size sorting, color-sorting integration",
      "Packaging Section — Auto weighing & bag-sealing control",
    ],
  },
  {
    id: "flour",
    label: "Flour Mill Automation",
    color: "blue",
    features: [
      "Process Control — Real-time monitoring of grinding circuits",
      "Motor Control — Soft-start, VFD speed regulation & protection",
      "Recipe Management — Digital recipe storage & batch tracking",
    ],
  },
  {
    id: "dal",
    label: "Dal Mill Automation",
    color: "teal",
    features: [
      "Production Monitoring — Live throughput & yield dashboards",
      "Energy Management — kWh logging, demand optimisation",
      "Process Optimisation — PLC-based adaptive control loops",
    ],
  },
];

export function FeaturedSolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="featured-solutions"
      className="py-20 bg-primary"
      data-ocid="featured_solutions.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-semibold uppercase tracking-widest text-xs">
            Industry Expertise
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Featured Automation Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proven end-to-end automation for India's most demanding milling
            operations — engineered for maximum uptime and zero-loss throughput.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {solutions.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              data-ocid={`featured_solutions.tab.${i + 1}`}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-smooth border ${
                active === i
                  ? "bg-accent text-foreground border-accent shadow-lg"
                  : "bg-primary-foreground/5 text-muted-foreground border-border hover:border-accent/60 hover:text-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-card/60 border border-border rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto"
          data-ocid="featured_solutions.panel"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-accent" />
            {solutions[active].label}
          </h3>
          <ul className="space-y-4">
            {solutions[active].features.map((feat, idx) => (
              <motion.li
                key={feat}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-relaxed">
                  {feat}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// PRODUCT RANGE
// ──────────────────────────────────────────────────────────────
const products = [
  {
    id: "plc",
    name: "PLC Panels",
    desc: "Siemens & Allen-Bradley PLC-based control panels for precise process automation.",
    Icon: Cpu,
  },
  {
    id: "mcc",
    name: "MCC Panels",
    desc: "Motor Control Centres with intelligent protection, metering & remote monitoring.",
    Icon: Layers,
  },
  {
    id: "pcc",
    name: "PCC Panels",
    desc: "Power Control Centres for main LT incoming, bus-coupler & feeder management.",
    Icon: Zap,
  },
  {
    id: "vfd",
    name: "VFD Panels",
    desc: "Variable Frequency Drive panels for energy-efficient motor speed control.",
    Icon: Activity,
  },
  {
    id: "apfc",
    name: "APFC Panels",
    desc: "Automatic Power Factor Correction panels to reduce kVAR penalties.",
    Icon: SlidersHorizontal,
  },
  {
    id: "automation",
    name: "Automation Panels",
    desc: "Custom panel builds integrating PLC, HMI & communication modules.",
    Icon: Settings,
  },
  {
    id: "desks",
    name: "Control Desks",
    desc: "Ergonomic operator desks with push-buttons, selectors & digital displays.",
    Icon: Monitor,
  },
  {
    id: "scada",
    name: "SCADA Systems",
    desc: "PC/server-based SCADA for real-time plant-wide visibility and data logging.",
    Icon: Activity,
  },
];

export function ProductRangeSection() {
  return (
    <section
      id="product-range"
      className="py-20 bg-background"
      data-ocid="product_range.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-semibold uppercase tracking-widest text-xs">
            Product Portfolio
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our Product Range
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Eight specialised panel categories — every unit designed, wired, and
            tested in our in-house workshop before leaving the factory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map(({ id, name, desc, Icon }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              data-ocid={`product_range.card.${i + 1}`}
              className="group relative bg-primary border border-border rounded-xl p-6 flex flex-col gap-4 transition-smooth hover:border-accent/60 hover:shadow-[0_0_24px_rgba(255,122,0,0.18)] cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1.5">
                  {name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-xl bg-accent/0 group-hover:bg-accent/60 transition-smooth" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// WHY CHOOSE TEJA CONTROLS
// ──────────────────────────────────────────────────────────────
const reasons = [
  {
    id: "design",
    title: "In-house Design Team",
    desc: "Dedicated electrical engineers handle every schematic, BOM and layout drawing under one roof — no outsourced design.",
    Icon: PenTool,
  },
  {
    id: "quality",
    title: "Quality Components",
    desc: "Only Siemens, Schneider, ABB and L&T-certified components are used — backed by genuine warranty.",
    Icon: Shield,
  },
  {
    id: "engineers",
    title: "Experienced Engineers",
    desc: "Core team of 15+ certified engineers with combined industry experience exceeding 150 years.",
    Icon: Users,
  },
  {
    id: "fast",
    title: "Fast Commissioning",
    desc: "Structured project management and factory pre-testing compress site commissioning timelines by up to 40 %.",
    Icon: Clock,
  },
  {
    id: "support",
    title: "After Sales Support",
    desc: "24 × 7 helpline, annual maintenance contracts, and priority spare-parts dispatch Pan-India.",
    Icon: Headphones,
  },
  {
    id: "custom",
    title: "Customised Solutions",
    desc: "Every panel is engineered to client specs — no catalogue-copy approach, no compromises.",
    Icon: SlidersHorizontal,
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-20 bg-muted/30"
      data-ocid="why_choose.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-semibold uppercase tracking-widest text-xs">
            Our Advantage
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose Teja Controls
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Six pillars that make us the trusted automation partner for over 500
            projects across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ id, title, desc, Icon }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              data-ocid={`why_choose.card.${i + 1}`}
              className="bg-card border border-border rounded-xl p-6 flex gap-5 items-start transition-smooth hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// CLIENT TESTIMONIALS
// ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Rice Industries Pvt Ltd",
    industry: "Rice Processing",
    rating: 5,
    quote:
      "Teja Controls delivered a world-class PLC-based automation system for our rice mill. The pre-commissioning testing meant zero surprises on go-live day. Our throughput increased by 28 % in the first quarter.",
  },
  {
    name: "Suresh Patel",
    company: "Golden Flour Mills",
    industry: "Flour Milling",
    rating: 5,
    quote:
      "The VFD panels and MCC they installed reduced our energy bill by 22 % within two months. The support team is responsive around the clock — exactly what an operational plant needs from its automation partner.",
  },
  {
    name: "Anand Reddy",
    company: "Sri Dal Processing",
    industry: "Dal Milling",
    rating: 5,
    quote:
      "We had complex grading and polishing requirements that no other vendor could handle. Teja Controls engineered a custom panel solution and completed commissioning two weeks ahead of schedule. Exceptional work.",
  },
  {
    name: "Vijay Singh",
    company: "FeedTech Industries",
    industry: "Animal Feed Processing",
    rating: 5,
    quote:
      "The SCADA system Teja Controls built gives us real-time visibility across all three production lines simultaneously. Downtime has dropped to near zero. We trust them completely for all upcoming expansion phases.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = useCallback(
    (action: () => void) => {
      if (timerRef.current) clearInterval(timerRef.current);
      action();
      timerRef.current = setInterval(next, 5000);
    },
    [next],
  );

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-20 bg-primary"
      data-ocid="testimonials.section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-semibold uppercase tracking-widest text-xs">
            Client Stories
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-card/60 border border-border rounded-2xl p-8 sm:p-10"
            data-ocid="testimonials.card"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].slice(0, t.rating).map((n) => (
                <Star key={n} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground/90 text-lg sm:text-xl leading-relaxed italic mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold font-display text-base">
                  {t.name[0]}
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {t.company} &bull; {t.industry}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => resetTimer(prev)}
              data-ocid="testimonials.prev_button"
              className="border-border text-muted-foreground hover:border-accent hover:text-accent transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => resetTimer(() => setCurrent(i))}
                  data-ocid={`testimonials.dot.${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-smooth ${
                    i === current
                      ? "bg-accent scale-125"
                      : "bg-border hover:bg-accent/40"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => resetTimer(next)}
              data-ocid="testimonials.next_button"
              className="border-border text-muted-foreground hover:border-accent hover:text-accent transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// PROCESS FLOW
// ──────────────────────────────────────────────────────────────
const steps = [
  {
    id: "consultation",
    title: "Consultation",
    desc: "Site visit, load analysis and scope definition with your engineering team.",
    Icon: MessageSquare,
    num: 1,
  },
  {
    id: "design",
    title: "Engineering Design",
    desc: "Detailed schematics, panel GA drawings, BOM and approval documentation.",
    Icon: PenTool,
    num: 2,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    desc: "In-house fabrication, wiring, cable ferruling and component assembly.",
    Icon: Factory,
    num: 3,
  },
  {
    id: "testing",
    title: "Factory Testing",
    desc: "Full FAT — power-on checks, I/O verification, interlocks and load testing.",
    Icon: FlaskConical,
    num: 4,
  },
  {
    id: "installation",
    title: "Installation",
    desc: "On-site erection, cabling, earthing and panel integration by our field team.",
    Icon: Wrench,
    num: 5,
  },
  {
    id: "commissioning",
    title: "Commissioning",
    desc: "PLC/SCADA go-live, operator training and performance validation trials.",
    Icon: Power,
    num: 6,
  },
  {
    id: "support",
    title: "Support",
    desc: "AMC, remote diagnostics, spare-parts and 24 × 7 technical helpdesk.",
    Icon: Headphones,
    num: 7,
  },
];

export function ProcessFlowSection() {
  return (
    <section
      id="process-flow"
      className="py-20 bg-muted/20"
      data-ocid="process_flow.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/40 font-semibold uppercase tracking-widest text-xs">
            How We Work
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A structured seven-stage delivery model that eliminates surprises
            and keeps your project on time and on budget.
          </p>
        </motion.div>

        {/* Desktop — horizontal scroll */}
        <div className="hidden md:block overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-max">
            {steps.map(({ id, title, desc, Icon, num }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                data-ocid={`process_flow.step.${num}`}
                className="flex flex-col items-center text-center w-40"
              >
                {/* Circle + connector */}
                <div className="flex items-center w-full">
                  {i > 0 && <div className="flex-1 h-0.5 bg-primary/60" />}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2 bg-primary ${
                      i === 0 || i === steps.length - 1
                        ? "border-accent"
                        : "border-accent/70"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-primary/60" />
                  )}
                </div>

                {/* Number badge */}
                <div className="mt-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">
                    {num}
                  </span>
                </div>

                {/* Text */}
                <h4 className="font-display font-bold text-foreground text-sm mt-2 leading-tight px-1">
                  {title}
                </h4>
                <p className="text-muted-foreground text-xs mt-1 px-1 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical stack */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map(({ id, title, desc, Icon, num }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              data-ocid={`process_flow.step_mobile.${num}`}
              className="flex gap-5 relative"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-primary/60" />
              )}

              {/* Circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary border-2 border-accent/70 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>

              {/* Text */}
              <div className="pb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-foreground">
                    {num}
                  </span>
                  <h4 className="font-display font-bold text-foreground text-sm">
                    {title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
