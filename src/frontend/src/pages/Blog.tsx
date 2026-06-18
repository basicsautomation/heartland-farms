import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useGetBlogPosts } from "../hooks/useQueries";
import type { BlogPost } from "../types";

// ── Fallback posts (shown when backend is unavailable) ─────────────────────
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1n,
    slug: "plc-programming-for-rice-mills",
    title: "PLC Programming for Rice Mills: A Complete Guide",
    excerpt:
      "Modern rice mills demand precision automation. Learn how PLC-based control systems optimise cleaning, milling, and grading sections to reduce waste and boost throughput.",
    content: "",
    date: BigInt(new Date("2024-02-12").getTime()),
    author: "Teja Controls Engineering Team",
    category: "PLC Automation",
    readTime: "7 min read",
  },
  {
    id: 2n,
    slug: "scada-benefits-for-food-processing",
    title: "SCADA Benefits for Food Processing Industries",
    excerpt:
      "Real-time monitoring, remote access, and data analytics: how SCADA systems are transforming food processing plants across India from reactive to predictive operations.",
    content: "",
    date: BigInt(new Date("2024-04-18").getTime()),
    author: "Teja Controls Engineering Team",
    category: "SCADA",
    readTime: "8 min read",
  },
  {
    id: 3n,
    slug: "automation-roi-for-flour-mills",
    title: "Calculating Automation ROI for Flour Mills",
    excerpt:
      "Investing in automation is a business decision. We break down the hard numbers — energy savings, labour reduction, yield improvement, and payback periods for flour mill automation.",
    content: "",
    date: BigInt(new Date("2024-06-05").getTime()),
    author: "Teja Controls Engineering Team",
    category: "Business Case",
    readTime: "6 min read",
  },
  {
    id: 4n,
    slug: "control-panel-design-best-practices",
    title: "Control Panel Design: Best Practices for Industrial Reliability",
    excerpt:
      "A poorly designed control panel is a liability. Our senior engineers share the design principles — component selection, cable management, thermal design — that ensure 99.9% uptime.",
    content: "",
    date: BigInt(new Date("2024-08-22").getTime()),
    author: "Teja Controls Engineering Team",
    category: "Panel Design",
    readTime: "9 min read",
  },
];

const SLUG_IMAGE_MAP: Record<string, string> = {
  "plc-programming-for-rice-mills":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "scada-benefits-for-food-processing":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "automation-roi-for-flour-mills":
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  "control-panel-design-best-practices":
    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
};

function getPostImage(slug: string): string {
  return (
    SLUG_IMAGE_MAP[slug] ??
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  );
}

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp);
  // Handle both nanoseconds (IC) and milliseconds
  const date = ms > 1e15 ? new Date(ms / 1_000_000) : new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Blog Card ───────────────────────────────────────────────────────────────
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const imgUrl = getPostImage(post.slug);

  return (
    <motion.article
      data-ocid={`blog.item.${index + 1}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-smooth flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-secondary/90 text-white border-0 text-xs font-body">
          {post.category}
        </Badge>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-secondary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs font-body font-medium text-foreground truncate max-w-[140px]">
            {post.author}
          </span>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            data-ocid={`blog.read_more.${index + 1}`}
            className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-secondary hover:text-secondary/80 transition-colors duration-200 group/link shrink-0"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ── Loading skeleton ────────────────────────────────────────────────────────
function BlogCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex justify-between pt-2 border-t border-border">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const { data: backendPosts, isLoading } = useGetBlogPosts();
  const posts =
    backendPosts && backendPosts.length > 0 ? backendPosts : FALLBACK_POSTS;

  return (
    <div data-ocid="blog.page" className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.17_30)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span className="text-sm font-body font-semibold text-secondary">
              Automation Insights
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Automation Insights
          </h1>
          <p className="text-lg sm:text-xl font-body text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Expert knowledge on PLC programming, SCADA systems, and industrial
            automation — from our engineering team in the field.
          </p>
        </div>
      </section>

      {/* Orange accent bar */}
      <div className="h-1.5 bg-secondary" />

      {/* Blog grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border" />
            <span className="text-sm font-body text-muted-foreground uppercase tracking-widest">
              Latest Articles
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {isLoading ? (
            <div
              data-ocid="blog.loading_state"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {["skel-1", "skel-2", "skel-3", "skel-4"].map((id) => (
                <BlogCardSkeleton key={id} />
              ))}
            </div>
          ) : (
            <div
              data-ocid="blog.list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {posts.map((post, i) => (
                <BlogCard key={String(post.id)} post={post} index={i} />
              ))}
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-muted/40 rounded-2xl p-10 border border-border"
          >
            <p className="font-display text-2xl font-semibold text-foreground mb-2">
              Ready to automate your plant?
            </p>
            <p className="text-muted-foreground font-body mb-6">
              Our engineers have designed and commissioned 500+ projects across
              India. Let's discuss your requirements.
            </p>
            <Link
              to="/contact"
              data-ocid="blog.cta_button"
              className="inline-flex items-center gap-2 bg-secondary text-white font-body font-semibold px-8 py-3 rounded-xl hover:bg-secondary/90 transition-smooth"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
