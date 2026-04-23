import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  BookOpen,
  Bug,
  Droplets,
  FlaskConical,
  Globe,
  Grape,
  Leaf,
  Recycle,
  Sprout,
  Star,
  Sun,
  TreeDeciduous,
  Wheat,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";

const farmingPillars = [
  {
    icon: BookOpen,
    title: "Traditional Wisdom",
    description:
      "Drawing on centuries-old agricultural knowledge passed down through generations in North Karnataka — companion planting, lunar calendars, and natural soil amendments.",
  },
  {
    icon: FlaskConical,
    title: "Modern Techniques",
    description:
      "Precision agriculture, drip irrigation, and data-driven crop monitoring combine efficiency with care, ensuring optimal yield without environmental compromise.",
  },
  {
    icon: Globe,
    title: "Sustainable Systems",
    description:
      "Every practice is designed to regenerate the land. Closed-loop nutrient cycles, on-farm composting, and habitat corridors work together as a living ecosystem.",
  },
];

const sustainablePractices = [
  {
    icon: Bug,
    title: "Minimal Chemical Inputs",
    description:
      "We rely on natural pest control, neem-based solutions, and beneficial insects. Chemical pesticides are a last resort — nature's systems do the work.",
  },
  {
    icon: Leaf,
    title: "Soil Health First",
    description:
      "Compost, green manure cover crops, and microbial inoculants keep the soil food web thriving. Healthy soil is the foundation of nutritious, flavourful produce.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description:
      "Drip irrigation delivers water precisely to the root zone. Rainwater harvesting and soil moisture monitoring cut consumption by up to 40% versus flood irrigation.",
  },
  {
    icon: Wind,
    title: "Biodiversity",
    description:
      "Mixed cropping, flowering borders, and native tree corridors support pollinators, birds, and soil organisms — a biodiverse farm is a resilient farm.",
  },
  {
    icon: Sun,
    title: "Solar-Assisted Operations",
    description:
      "Solar panels power pump motors and cold storage, reducing our carbon footprint and insulating farm operations from energy price volatility.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Cycles",
    description:
      "Crop residues become compost, pruned vine wood fuels our biochar program, and packaging materials are recycled or reused on the farm.",
  },
];

const crops = [
  {
    icon: Grape,
    name: "Vijayapura Grapes",
    varieties: "Sharad Seedless, Thompson Seedless, Red Globe",
    season: "Jan - Mar harvest",
    highlight: true,
    description:
      "Our flagship crop. Grown on 12 acres of trellised vineyard, these grapes benefit from Vijayapura's unique semi-arid climate and basalt-rich soils.",
  },
  {
    icon: Apple,
    name: "Pomegranate",
    varieties: "Bhagwa, Ruby",
    season: "Aug - Dec harvest",
    highlight: false,
    description:
      "Hardy, drought-tolerant, and rich in antioxidants. Our pomegranates are a perfect match for Karnataka's dry Deccan plateau conditions.",
  },
  {
    icon: Wheat,
    name: "Wheat & Pulses",
    varieties: "Rabi wheat, Chickpea, Tur dal",
    season: "Nov - Feb season",
    highlight: false,
    description:
      "Rotational crops that fix nitrogen and restore soil structure, providing food security and economic diversification across seasons.",
  },
  {
    icon: Sprout,
    name: "Seasonal Vegetables",
    varieties: "Onion, Tomato, Brinjal, Leafy greens",
    season: "Year-round",
    highlight: false,
    description:
      "Freshness from the farm gate to the kitchen. Grown under integrated pest management for produce that's safe, seasonal, and locally sourced.",
  },
  {
    icon: TreeDeciduous,
    name: "Agroforestry",
    varieties: "Teak, Neem, Mango, Indian Gooseberry",
    season: "Perennial",
    highlight: false,
    description:
      "Boundary trees and intercropped orchards add ecological layers, sequester carbon, and provide additional income streams beyond annual crops.",
  },
];

const grapeStats = [
  { label: "Acres Under Vine", value: "12+" },
  { label: "Varieties Grown", value: "3" },
  { label: "Years of Cultivation", value: "8+" },
  { label: "Harvest Season", value: "Jan-Mar" },
];

const grapeHighlights = [
  {
    key: "climate",
    text: "Vijayapura's semi-arid climate, with 700-800 mm annual rainfall and over 300 sunny days, creates ideal sugar accumulation for table grapes.",
  },
  {
    key: "vines",
    text: "Our Sharad Seedless vines are trained on the Y-shaped bower system, maximising bunch exposure and berry quality.",
  },
  {
    key: "harvest",
    text: "Harvest is timed to the precise Brix level ensuring every bunch leaves the farm at peak sweetness and shelf life.",
  },
  {
    key: "postharvest",
    text: "Post-harvest, grapes are pre-cooled and packed in ventilated CFB boxes for domestic markets and cold-chain export.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0 } };

export default function PracticesPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end justify-center pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/practices-hero.dim_1920x800.jpg')",
        }}
        data-ocid="practices.hero"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-secondary/80 text-secondary-foreground border-0 uppercase tracking-widest text-xs px-4 py-1">
              Our Approach
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              How We Farm
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              Rooted in tradition, guided by science, and driven by a deep
              respect for the land and those who eat from it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Integrated Farming Model */}
      <section
        className="py-24 bg-background"
        data-ocid="practices.integrated_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-premium-subtitle mb-3">The Ecosystem Approach</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Integrated Farming Model
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              At Heartland Farms, we believe farming works best when it mirrors
              nature - a web of interconnected systems where every element
              supports the whole.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {farmingPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-xl transition-smooth"
                data-ocid={`practices.pillar.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-smooth">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 rounded-2xl bg-primary/5 border border-primary/15 p-8 sm:p-10 text-center"
          >
            <p className="font-display text-xl sm:text-2xl text-foreground/90 leading-relaxed italic max-w-3xl mx-auto">
              "Farming is not just tradition - it's a smart, modern, and
              profitable way of life. We prove it every season."
            </p>
            <p className="mt-4 text-muted-foreground text-sm font-semibold tracking-wide">
              - Gurupad MS, Founder, Heartland Farms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Sustainable & Eco-Friendly */}
      <section
        className="py-24 bg-muted/30"
        data-ocid="practices.sustainable_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-premium-subtitle mb-3">Caring for the Future</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Sustainable and Eco-Friendly
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Every decision we make is measured against one question: does this
              leave the land healthier than we found it?
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainablePractices.map((practice, i) => (
              <motion.div
                key={practice.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex gap-4 bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-smooth"
                data-ocid={`practices.sustainable.item.${i + 1}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <practice.icon
                      className="text-secondary"
                      style={{ width: 18, height: 18 }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Crop Diversity */}
      <section
        className="py-24 bg-background"
        data-ocid="practices.crops_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-premium-subtitle mb-3">
              Diversity and Resilience
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Crop Diversity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              A diverse farm is a resilient farm. From our signature vineyards
              to seasonal vegetables, every crop plays a role in the larger
              ecosystem.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop, i) => (
              <motion.div
                key={crop.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 border transition-smooth ${
                  crop.highlight
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border shadow-sm hover:shadow-md"
                }`}
                data-ocid={`practices.crop.item.${i + 1}`}
              >
                {crop.highlight && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3" /> Signature
                  </span>
                )}
                <div
                  className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 ${
                    crop.highlight
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  }`}
                >
                  <crop.icon
                    className={`w-5 h-5 ${crop.highlight ? "text-primary-foreground" : "text-primary"}`}
                  />
                </div>
                <h3
                  className={`font-display text-xl font-semibold mb-1.5 ${
                    crop.highlight
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {crop.name}
                </h3>
                <p
                  className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                    crop.highlight
                      ? "text-primary-foreground/70"
                      : "text-secondary"
                  }`}
                >
                  {crop.varieties}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    crop.highlight
                      ? "text-primary-foreground/85"
                      : "text-muted-foreground"
                  }`}
                >
                  {crop.description}
                </p>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    crop.highlight
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {crop.season}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Vineyard and Grapes Highlight */}
      <section
        className="py-24 bg-primary"
        data-ocid="practices.grapes_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <Badge className="mb-5 bg-primary-foreground/20 text-primary-foreground border-0 uppercase tracking-widest text-xs">
                The Crown Jewel
              </Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
                Vijayapura Grapes - A Legacy in Every Bunch
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Vijayapura (formerly Bijapur) has been Karnataka's grape belt
                for over five decades. Our vineyard sits at 600 m elevation on
                volcanic black cotton soils that impart a subtle mineral
                character unique to this region.
              </p>
              <ul className="space-y-4 mb-10">
                {grapeHighlights.map((point, i) => (
                  <motion.li
                    key={point.key}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex gap-3 text-primary-foreground/85 text-sm leading-relaxed"
                    data-ocid={`practices.grape.point.${i + 1}`}
                  >
                    <Leaf className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/60" />
                    {point.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeRight}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {grapeStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-primary-foreground/10 rounded-2xl p-6 text-center border border-primary-foreground/15"
                    data-ocid={`practices.grape.stat.${i + 1}`}
                  >
                    <p className="font-display text-3xl font-bold text-primary-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-primary-foreground/65 text-xs font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-secondary rounded-2xl p-7 border border-secondary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                    <Grape className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-secondary-foreground mb-2">
                      GI-Potential Region
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                      Vijayapura grapes are cultivated in one of India's driest
                      viticulture zones, producing fruit with natural sugar
                      content of 18-22 Brix - rivalling renowned international
                      table-grape growing regions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-muted/30 border-t border-border"
        data-ocid="practices.cta_section"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-premium-subtitle mb-3">Taste the Difference</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-5 tracking-tight">
              From Our Fields to Your Table
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              The care and expertise you have seen here goes into every product
              we grow. Explore the fruits of Heartland Farms.
            </p>
            <Link to="/products" data-ocid="practices.see_products_link">
              <Button
                type="button"
                size="lg"
                className="gap-2 font-semibold text-base px-8 py-6 rounded-xl transition-smooth"
              >
                See Our Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
