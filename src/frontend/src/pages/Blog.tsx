import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useGetBlogPosts } from "../hooks/useQueries";
import type { BlogPost } from "../types";

// ── Fallback posts (shown when backend is unavailable) ─────────────────────
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1n,
    slug: "why-i-left-corporate-life-for-the-farm",
    title: "Why I Left Corporate Life for the Farm",
    excerpt:
      "After 15 years at Siemens, I traded boardrooms for farmland. Here's the honest account of what drove that decision — and why I've never looked back.",
    content: "",
    date: BigInt(new Date("2024-03-15").getTime()),
    author: "Gurupad MS",
  },
  {
    id: 2n,
    slug: "farming-as-a-business-what-i-wish-i-knew",
    title: "Farming as a Business — What I Wish I Knew",
    excerpt:
      "Soil doesn't care about spreadsheets. But smart farming absolutely does. Lessons from year one of running Heartland Farms like a startup.",
    content: "",
    date: BigInt(new Date("2024-05-02").getTime()),
    author: "Gurupad MS",
  },
  {
    id: 3n,
    slug: "the-art-of-vijayapura-grape-cultivation",
    title: "The Art of Vijayapura Grape Cultivation",
    excerpt:
      "North Karnataka's semi-arid climate is brutal and beautiful in equal measure. Discover how we coax exceptional grapes from the black cotton soil of Vijayapura.",
    content: "",
    date: BigInt(new Date("2024-07-20").getTime()),
    author: "Gurupad MS",
  },
  {
    id: 4n,
    slug: "sustainable-agriculture-principles-and-practice",
    title: "Sustainable Agriculture: Principles and Practice",
    excerpt:
      "Sustainability isn't a buzzword on our farm — it's the operating system. From drip irrigation to composting, here's how we farm with the future in mind.",
    content: "",
    date: BigInt(new Date("2024-09-10").getTime()),
    author: "Gurupad MS",
  },
];

const CATEGORY_MAP: Record<string, string> = {
  "why-i-left-corporate-life-for-the-farm": "Founder's Story",
  "farming-as-a-business-what-i-wish-i-knew": "Business",
  "the-art-of-vijayapura-grape-cultivation": "Viticulture",
  "sustainable-agriculture-principles-and-practice": "Sustainability",
};

function getCategory(slug: string): string {
  return CATEGORY_MAP[slug] ?? "Knowledge";
}

function estimateReadTime(content: string, excerpt: string): number {
  const words = (content || excerpt).trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 200));
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
  const readTime = estimateReadTime(post.content, post.excerpt);
  const category = getCategory(post.slug);

  return (
    <article
      data-ocid={`blog.item.${index + 1}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-smooth flex flex-col"
    >
      {/* Decorative top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary/70 to-primary/30" />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Category + read time */}
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="secondary"
            className="text-xs font-body font-medium bg-secondary/10 text-secondary border border-secondary/20"
          >
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
            <Clock className="w-3 h-3" />
            {readTime} min read
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-body font-medium text-foreground">
              {post.author}
            </span>
            <span className="text-xs text-muted-foreground font-body">
              {formatDate(post.date)}
            </span>
          </div>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            data-ocid={`blog.read_more.${index + 1}`}
            className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors duration-200 group/link"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── Loading skeleton ────────────────────────────────────────────────────────
function BlogCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="h-1.5 w-full bg-muted" />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-7 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex justify-between pt-2 border-t border-border">
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-5 w-20" />
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
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 opacity-80" />
            <span className="text-sm font-body font-medium opacity-80">
              Knowledge from the Field
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Stories from the Soil
          </h1>
          <p className="text-lg sm:text-xl font-body opacity-80 max-w-2xl mx-auto leading-relaxed">
            Honest reflections on farming, entrepreneurship, and sustainable
            living — from an engineer who chose the earth over the office.
          </p>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="h-2 bg-gradient-to-r from-secondary via-primary/40 to-secondary/30" />

      {/* Blog grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {["skel-1", "skel-2", "skel-3", "skel-4"].map((id) => (
                <BlogCardSkeleton key={id} />
              ))}
            </div>
          ) : (
            <div
              data-ocid="blog.list"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {posts.map((post, i) => (
                <BlogCard key={String(post.id)} post={post} index={i} />
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center bg-muted/40 rounded-2xl p-10 border border-border">
            <p className="font-display text-2xl font-semibold text-foreground mb-2">
              Want to see it in person?
            </p>
            <p className="text-muted-foreground font-body mb-6">
              Reading about farming is just the beginning. Come walk our fields.
            </p>
            <Link
              to="/contact"
              data-ocid="blog.cta_button"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-smooth"
            >
              Connect With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
