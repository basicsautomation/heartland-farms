import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Droplets,
  Eye,
  Leaf,
  MapPin,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Product Data ────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  origin: string;
  tags: string[];
  featured?: boolean;
}

const products: Product[] = [
  {
    id: "fresh-grapes",
    name: "Fresh Grapes",
    tagline: "Vijayapura's Signature Harvest",
    description:
      "Hand-picked from our sun-drenched vineyards in Vijayapura, these grapes are grown with precision viticulture — no unnecessary chemicals, just the natural richness of Karnataka's black soil.",
    image: "/assets/generated/products-grapes-hero.dim_1200x600.jpg",
    origin: "Vijayapura, Karnataka",
    tags: ["Viticulture", "Seasonal", "Premium"],
    featured: true,
  },
  {
    id: "seasonal-crops",
    name: "Seasonal Crops",
    tagline: "Nature's Calendar, Freshly Harvested",
    description:
      "Rotating seasonal vegetables and pulses grown through integrated farming. From tomatoes and peppers to sorghum and sunflower — each crop grown in sync with the season.",
    image: "/assets/generated/products-seasonal-crops.dim_600x500.jpg",
    origin: "Vijayapura, Karnataka",
    tags: ["Seasonal", "Diverse", "Integrated Farming"],
  },
  {
    id: "organic-produce",
    name: "Organic Produce",
    tagline: "Traceable, Thoughtful, Chemical-Conscious",
    description:
      "Herbs, pulses, and dry produce grown with minimal inputs and maximum care. Every batch is traceable back to the field it was grown in — because transparency is part of our harvest.",
    image: "/assets/generated/products-organic-produce.dim_600x500.jpg",
    origin: "Vijayapura, Karnataka",
    tags: ["Chemical-Conscious", "Traceable", "Organic"],
  },
];

// ─── Why Buy Features ─────────────────────────────────────────────────────────

const features = [
  {
    icon: ShieldCheck,
    title: "Chemical-Conscious Farming",
    description:
      "We minimise synthetic inputs and follow responsible IPM practices — so every bite is as clean as the soil it came from.",
  },
  {
    icon: Sprout,
    title: "Farm-Fresh, Always",
    description:
      "Harvested at the right moment and dispatched quickly. No cold-storage shortcuts — just the freshness you deserve.",
  },
  {
    icon: Leaf,
    title: "Sustainably Grown",
    description:
      "Drip irrigation, composting, and soil health practices ensure our land stays productive for generations to come.",
  },
  {
    icon: Eye,
    title: "Fully Traceable",
    description:
      "Know exactly which farm block, which season, and which hands touched your produce before it reached yours.",
  },
  {
    icon: Droplets,
    title: "Water-Efficient Practices",
    description:
      "Our drip-fed fields use up to 40% less water than conventional farms — an ethical choice in every drop.",
  },
  {
    icon: Truck,
    title: "Direct from Farm",
    description:
      "No middlemen, no markups — when ordering opens, you'll buy directly from the family that grew it.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function OriginBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-1 rounded-full">
      <MapPin size={11} />
      {label}
    </span>
  );
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
      <Bell size={12} />
      Notify Me · Coming Soon
    </span>
  );
}

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="col-span-1 md:col-span-2 lg:col-span-3"
      data-ocid="products.featured_card"
    >
      <Card className="overflow-hidden border-border shadow-lg bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-smooth hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-secondary text-secondary-foreground font-semibold text-xs px-3 py-1 shadow">
                ⭐ Featured
              </Badge>
            </div>
          </div>

          {/* Content */}
          <CardContent className="flex flex-col justify-center p-8 md:p-10 gap-5">
            <div className="space-y-1">
              <p className="font-display text-sm font-semibold text-secondary uppercase tracking-widest">
                {product.tagline}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {product.name}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <OriginBadge label={product.origin} />
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <ComingSoonBadge />
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      data-ocid={`products.card.${index + 1}`}
    >
      <Card className="overflow-hidden h-full flex flex-col border-border shadow-md bg-card hover:shadow-xl transition-smooth group">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        <CardContent className="flex flex-col flex-1 p-6 gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest font-display">
              {product.tagline}
            </p>
            <h3 className="font-display text-xl font-bold text-foreground">
              {product.name}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <OriginBadge label={product.origin} />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-border">
            <ComingSoonBadge />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth"
      data-ocid={`products.feature.${index + 1}`}
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground text-base mb-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [featuredProduct, ...otherProducts] = products;

  return (
    <div data-ocid="products.page">
      {/* ── Hero ── */}
      <section
        className="relative bg-primary overflow-hidden py-20 md:py-28"
        data-ocid="products.hero.section"
      >
        {/* Subtle dot-grid texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm font-semibold text-primary-foreground/70 uppercase tracking-[0.2em] mb-4"
          >
            Heartland Farms · Vijayapura
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Farm Fresh Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Premium quality produce grown with intention in the fertile lands of
            Vijayapura, North Karnataka — where ancient soil meets modern
            farming science.
          </motion.p>
        </div>
      </section>

      {/* ── Coming Soon Banner ── */}
      <section
        className="bg-secondary py-5"
        data-ocid="products.coming_soon.section"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary-foreground/20 flex items-center justify-center shrink-0">
              <Truck size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-secondary-foreground text-base">
                🚀 Online Ordering Coming Soon
              </p>
              <p className="text-secondary-foreground/80 text-sm">
                We're building farm-to-doorstep delivery for Vijayapura and
                beyond. Be first in line.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <Button
              type="button"
              variant="outline"
              className="shrink-0 border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold"
              data-ocid="products.coming_soon.notify_button"
            >
              Get Early Access
              <ArrowRight size={16} className="ml-1.5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ── Products Grid ── */}
      <section
        className="bg-background py-20"
        data-ocid="products.grid.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest font-display mb-2">
              Our Products
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Grown with Care, Delivered with Pride
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Featured card spans full width */}
            {featuredProduct && (
              <FeaturedProductCard product={featuredProduct} />
            )}

            {/* Other products */}
            {otherProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Buy from Heartland Farms ── */}
      <section
        className="bg-muted/40 py-20"
        data-ocid="products.features.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest font-display mb-2">
              Our Promise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Buy from Heartland Farms?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Every product we grow is backed by a commitment to clean farming,
              minimal waste, and maximum integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="bg-background py-20 border-t border-border"
        data-ocid="products.cta.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Leaf size={26} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be Part of the Harvest
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Connect with us to get early access when online ordering goes live —
            or to place a direct enquiry for bulk or local purchases.
          </p>
          <Link to="/contact">
            <Button
              type="button"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 rounded-full shadow-md transition-smooth"
              data-ocid="products.cta.connect_button"
            >
              Connect to Get Early Access
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
