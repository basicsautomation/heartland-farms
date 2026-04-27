import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { FlaskConical, Globe, Heart, Leaf, Sprout, Zap } from "lucide-react";
import { motion } from "motion/react";

// ─── Timeline data ────────────────────────────────────────────────────────────
const milestones = [
  {
    year: "2010",
    title: "Engineering Career Begins",
    description:
      "Gurupad MS graduates with an engineering degree and joins the corporate world — driven, ambitious, and ready to climb.",
    side: "left",
  },
  {
    year: "2015",
    title: "Senior Role at Siemens",
    description:
      "Five years in, a senior position at Siemens in Bengaluru. Comfortable salary, international projects, and a growing unease — something felt missing.",
    side: "right",
  },
  {
    year: "2018",
    title: "The Courageous Decision",
    description:
      "A trip back to Vijayapura changed everything. Standing in his ancestral fields, Gurupad made the decision that would define his life: leave it all behind and farm.",
    side: "left",
  },
  {
    year: "2019",
    title: "First Harvest",
    description:
      "Not without struggle. Unfamiliar soil, unpredictable rains, and skeptical neighbours. Yet the first harvest arrived — imperfect, hard-won, and deeply satisfying.",
    side: "right",
  },
  {
    year: "2022",
    title: "Heartland Farms Established",
    description:
      "With integrated, science-backed farming producing consistent yields, Heartland Farms was formally born — a brand as rooted in the land as the crops it grows.",
    side: "left",
  },
];

// ─── Values data ──────────────────────────────────────────────────────────────
const values = [
  {
    icon: FlaskConical,
    title: "Innovation Meets Tradition",
    description:
      "We blend time-honoured agricultural wisdom with modern science — precision irrigation, soil analytics, and integrated pest management — to honour the past while cultivating the future.",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description:
      "Every decision on our farm is made with the next generation in mind. Zero chemical runoff, water conservation, and biodiversity are non-negotiables — not marketing promises.",
  },
  {
    icon: Heart,
    title: "From Soil to Soul",
    description:
      "Farming is personal. Every crop we grow carries our story, our care, and our belief that the relationship between farmer and land is one of the most profound on earth.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[56vh] flex items-center justify-center overflow-hidden bg-primary"
        data-ocid="about.hero.section"
      >
        {/* Decorative diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 32px)",
            color: "oklch(0.98 0 0)",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,oklch(0.55_0.1_90/0.3),transparent)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 font-body text-xs uppercase tracking-widest px-4 py-1">
              Our Story
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            From <span className="italic opacity-90">Boardrooms</span> to
            Bountiful Fields
          </motion.h1>

          <motion.p
            className="font-body text-primary-foreground/75 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            A story about courage, roots, and the quiet revolution of choosing
            the land over the corporate ladder — told honestly, without the
            gloss.
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* ── Founder Narrative ──────────────────────────────────────────── */}
      <section
        className="bg-background py-24 px-6"
        data-ocid="about.founder.section"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <Badge
              variant="outline"
              className="self-start text-xs uppercase tracking-widest font-body text-muted-foreground border-border"
            >
              The Founder's Journey
            </Badge>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-snug">
              "I had everything the world said I should want. And I was empty."
            </h2>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-muted-foreground text-base leading-relaxed flex flex-col gap-5"
          >
            <p>
              Gurupad MS spent years inside glass-and-steel offices, engineering
              solutions for one of the world's most respected industrial
              companies. The pay was good, the title respectable, the future
              secure. Yet every visit back to Vijayapura stirred something that
              no promotion could quiet.
            </p>
            <p>
              In 2018, he did something most called reckless: he resigned from
              Siemens and drove back to North Karnataka with soil on his mind
              and no safety net. The first year was brutal. The learning curve
              was steep, the failures public, and the neighbours politely
              unconvinced.
            </p>
            <p>
              But he brought something that traditional farming rarely had: an
              engineer's discipline. He studied soil science obsessively,
              experimented with drip irrigation, and built composting systems
              from scratch. By 2019, the first proper harvest arrived. By 2022,
              Heartland Farms was a name people in Vijayapura began to respect.
            </p>
            <p className="text-foreground font-medium italic border-l-4 border-primary/30 pl-4">
              "I don't miss the salary. I miss nothing. This land — this work —
              is the most meaningful thing I have ever done."
            </p>
          </motion.div>

          {/* Inline stat pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap gap-4 pt-2"
          >
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 shadow-sm">
              <Sprout className="text-primary" size={22} />
              <div>
                <p className="font-display text-xl font-bold text-foreground leading-none">
                  5+
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Years Farming
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 shadow-sm">
              <Leaf className="text-secondary" size={22} />
              <div>
                <p className="font-display text-xl font-bold text-foreground leading-none">
                  100%
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Sustainable Practices
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ──────────────────────────────────────────── */}
      <section
        className="bg-muted/40 py-24 px-6 overflow-hidden relative"
        data-ocid="about.mission.section"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.38 0.11 140) 0px, oklch(0.38 0.11 140) 1px, transparent 1px, transparent 24px)",
          }}
          aria-hidden="true"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary/40" />
            <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
              Our Mission
            </span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            "Farming is not just tradition —{" "}
            <em className="text-primary not-italic">
              it is a smart, modern, and profitable way of life.
            </em>
            "
          </blockquote>
          <p className="mt-8 font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We believe the future of agriculture belongs to people willing to
            marry ancient knowledge with contemporary science — and we are
            living proof that it works.
          </p>
        </motion.div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <section
        className="bg-background py-24 px-6"
        data-ocid="about.timeline.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-4 text-xs uppercase tracking-widest font-body text-muted-foreground border-border"
            >
              The Journey
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Milestones That Shaped Us
            </h2>
          </motion.div>

          <div className="relative">
            {/* Centre line — desktop */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border"
              aria-hidden="true"
            />
            {/* Left rail — mobile */}
            <div
              className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border"
              aria-hidden="true"
            />

            <div className="flex flex-col">
              {milestones.map((m, i) => {
                const isLeft = m.side === "left";
                return (
                  <motion.div
                    key={m.year}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative pb-12 md:pb-16 pl-10 md:pl-0 flex ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-ocid={`about.timeline.item.${i + 1}`}
                  >
                    {/* Content card */}
                    <div
                      className={`md:w-1/2 ${
                        isLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                      }`}
                    >
                      <div className="card-elevated rounded-xl p-6 inline-block text-left w-full">
                        <span className="font-display text-3xl font-bold text-primary">
                          {m.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                          {m.title}
                        </h3>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot — desktop centre */}
                    <div
                      className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md z-10"
                      aria-hidden="true"
                    />
                    {/* Dot — mobile left rail */}
                    <div
                      className="md:hidden absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md"
                      aria-hidden="true"
                    />

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 py-24 px-6"
        data-ocid="about.values.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-4 text-xs uppercase tracking-widest font-body text-muted-foreground border-border"
            >
              What We Stand For
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
              These are not brand taglines. They are the principles that guide
              every seed we plant and every decision we make at Heartland Farms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card-elevated rounded-2xl p-8 flex flex-col items-start gap-5"
                  data-ocid={`about.values.item.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────── */}
      <section
        className="bg-primary py-20 px-6 text-center relative overflow-hidden"
        data-ocid="about.cta.section"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,oklch(0.48_0.12_33/0.15),transparent)]"
          aria-hidden="true"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <Zap
            size={36}
            className="text-primary-foreground mx-auto mb-6 opacity-70"
          />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to know the farm?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8 leading-relaxed">
            Explore our farming practices, browse our produce, or simply get in
            touch. We love to talk about the land.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/practices"
              className="inline-flex items-center gap-2 bg-card text-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover:bg-card/90 hover:shadow-lg"
              data-ocid="about.cta.practices_link"
            >
              <Sprout size={18} />
              Our Practices
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover:opacity-90 hover:shadow-lg"
              data-ocid="about.cta.contact_link"
            >
              <Heart size={18} />
              Connect With Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
