import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Grape, Leaf, PlayCircle, Quote, Sun } from "lucide-react";

// ─── Feature Cards Data ───────────────────────────────────────────────────────
const features = [
  {
    icon: Leaf,
    title: "Integrated Farming",
    description:
      "Combining traditional wisdom with modern agri-science for resilient, diversified crop systems that thrive year-round.",
    image: "/assets/generated/integrated-farming.dim_800x600.jpg",
    href: "/practices",
    ocid: "home.feature_card.1",
  },
  {
    icon: Grape,
    title: "Vijayapura Grapes",
    description:
      "The jewel of North Karnataka — our premium grape cultivation celebrates the region's unique terroir and climate.",
    image: "/assets/generated/grapes-closeup.dim_800x600.jpg",
    href: "/products",
    ocid: "home.feature_card.2",
  },
  {
    icon: Sun,
    title: "Sustainable Practices",
    description:
      "Zero-chemical philosophy, composting, drip irrigation, and soil health as the foundation of every harvest.",
    image: "/assets/generated/sustainable-practices.dim_800x600.jpg",
    href: "/practices",
    ocid: "home.feature_card.3",
  },
];

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  { value: "12+", label: "Crop Varieties" },
  { value: "40", label: "Acres Cultivated" },
  { value: "100%", label: "Chemical-Free" },
  { value: "5★", label: "Quality Standard" },
];

export default function Home() {
  const scrollToVideo = () => {
    document
      .getElementById("our-story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-vineyard.dim_1600x900.jpg"
            alt="Heartland Farms vineyard at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 py-24">
          <Badge
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-xs uppercase tracking-widest px-4 py-1.5"
          >
            Vijayapura · North Karnataka
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
            From Corporate Life
            <br />
            <span className="italic">to Sustainable Farming</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
            A journey of purpose, passion, and agriculture — where modern
            innovation meets the ancient art of farming.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              asChild
              size="lg"
              data-ocid="home.explore_cta"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg transition-smooth"
            >
              <Link to="/practices">
                Explore Our Farm
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={scrollToVideo}
              data-ocid="home.story_cta"
              className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 font-semibold px-8 py-6 text-base rounded-full transition-smooth"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Our Story
            </Button>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
            <div className="w-[1px] h-12 bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.stats_section"
        className="bg-primary text-primary-foreground"
      >
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl font-bold">
                {stat.value}
              </span>
              <span className="font-body text-sm text-primary-foreground/70 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tagline Strip ─────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.tagline_section"
        className="bg-muted/40 border-y border-border"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground italic leading-tight">
            "Where Nature Meets Innovation"
          </p>
          <p className="mt-4 font-body text-base text-muted-foreground max-w-xl mx-auto">
            Heartland Farms · Est. Vijayapura, Karnataka
          </p>
        </div>
      </section>

      {/* ── Feature Cards ─────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.features_section"
        className="bg-background py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 bg-primary/5 text-xs uppercase tracking-widest mb-4"
            >
              What We Do
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Rooted in Purpose,
              <br />
              <span className="text-primary">Growing with Intent</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  data-ocid={feature.ocid}
                  className="group card-elevated rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground rounded-full p-2.5 shadow">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>
                    <Link
                      to={feature.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-smooth"
                    >
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Brand Message ─────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.brand_message_section"
        className="bg-muted/30 py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug italic">
            "Farming is not just tradition — it's a smart, modern, and
            profitable way of life."
          </blockquote>
          <p className="mt-6 font-body text-base text-muted-foreground">
            — Gurupad MS, Founder, Heartland Farms
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              asChild
              size="default"
              data-ocid="home.about_cta"
              className="rounded-full px-7"
            >
              <Link to="/about">Our Story</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="default"
              data-ocid="home.contact_cta"
              className="rounded-full px-7"
            >
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── YouTube Video ─────────────────────────────────────────────────────── */}
      <section
        id="our-story"
        data-ocid="home.video_section"
        className="bg-background py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 bg-primary/5 text-xs uppercase tracking-widest mb-4"
            >
              Our Story
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              A Glimpse into Heartland Farms
            </h2>
            <p className="mt-3 font-body text-base text-muted-foreground max-w-xl mx-auto">
              Watch how a former Siemens engineer turned a plot of North
              Karnataka land into a thriving, sustainable farm.
            </p>
          </div>

          {/* Video Card */}
          <div className="card-elevated rounded-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/772WVHHehm4"
              title="Heartland Farms — Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <p className="mt-6 text-center font-body text-sm text-muted-foreground">
            Heartland Farms · Vijayapura, North Karnataka, India
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.final_cta_section"
        className="bg-primary text-primary-foreground py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Experience
            <br />
            the Heartland?
          </h2>
          <p className="font-body text-base text-primary-foreground/80 max-w-md">
            Reach out to learn more about our farm, our practices, or to source
            directly from us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              data-ocid="home.final_explore_cta"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 rounded-full shadow-lg transition-smooth"
            >
              <Link to="/practices">Explore Our Farm</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="home.final_connect_cta"
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-full transition-smooth"
            >
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
