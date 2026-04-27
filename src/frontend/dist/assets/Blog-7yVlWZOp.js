import { j as jsxRuntimeExports, L as Link, S as Skeleton } from "./index-B_yqDsmv.js";
import { B as Badge } from "./badge-B1kUhnsd.js";
import { a as useGetBlogPosts } from "./useQueries-DWmkqVXT.js";
import { B as BookOpen } from "./book-open-oDj_8vSc.js";
import { A as ArrowRight } from "./arrow-right-Dsnoy1i3.js";
import { C as Clock } from "./clock-CZvi4cxt.js";
import "./backend-CN5Y_TMj.js";
const FALLBACK_POSTS = [
  {
    id: 1n,
    slug: "why-i-left-corporate-life-for-the-farm",
    title: "Why I Left Corporate Life for the Farm",
    excerpt: "After 15 years at Siemens, I traded boardrooms for farmland. Here's the honest account of what drove that decision — and why I've never looked back.",
    content: "",
    date: BigInt((/* @__PURE__ */ new Date("2024-03-15")).getTime()),
    author: "Gurupad MS"
  },
  {
    id: 2n,
    slug: "farming-as-a-business-what-i-wish-i-knew",
    title: "Farming as a Business — What I Wish I Knew",
    excerpt: "Soil doesn't care about spreadsheets. But smart farming absolutely does. Lessons from year one of running Heartland Farms like a startup.",
    content: "",
    date: BigInt((/* @__PURE__ */ new Date("2024-05-02")).getTime()),
    author: "Gurupad MS"
  },
  {
    id: 3n,
    slug: "the-art-of-vijayapura-grape-cultivation",
    title: "The Art of Vijayapura Grape Cultivation",
    excerpt: "North Karnataka's semi-arid climate is brutal and beautiful in equal measure. Discover how we coax exceptional grapes from the black cotton soil of Vijayapura.",
    content: "",
    date: BigInt((/* @__PURE__ */ new Date("2024-07-20")).getTime()),
    author: "Gurupad MS"
  },
  {
    id: 4n,
    slug: "sustainable-agriculture-principles-and-practice",
    title: "Sustainable Agriculture: Principles and Practice",
    excerpt: "Sustainability isn't a buzzword on our farm — it's the operating system. From drip irrigation to composting, here's how we farm with the future in mind.",
    content: "",
    date: BigInt((/* @__PURE__ */ new Date("2024-09-10")).getTime()),
    author: "Gurupad MS"
  }
];
const CATEGORY_MAP = {
  "why-i-left-corporate-life-for-the-farm": "Founder's Story",
  "farming-as-a-business-what-i-wish-i-knew": "Business",
  "the-art-of-vijayapura-grape-cultivation": "Viticulture",
  "sustainable-agriculture-principles-and-practice": "Sustainability"
};
function getCategory(slug) {
  return CATEGORY_MAP[slug] ?? "Knowledge";
}
function estimateReadTime(content, excerpt) {
  const words = (content || excerpt).trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 200));
}
function formatDate(timestamp) {
  const ms = Number(timestamp);
  const date = ms > 1e15 ? new Date(ms / 1e6) : new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function BlogCard({ post, index }) {
  const readTime = estimateReadTime(post.content, post.excerpt);
  const category = getCategory(post.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-ocid": `blog.item.${index + 1}`,
      className: "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-smooth flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-primary via-secondary/70 to-primary/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-6 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-xs font-body font-medium bg-secondary/10 text-secondary border border-secondary/20",
                children: category
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground font-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              readTime,
              " min read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed line-clamp-3 flex-1", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-medium text-foreground", children: post.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: formatDate(post.date) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/blog/$slug",
                params: { slug: post.slug },
                "data-ocid": `blog.read_more.${index + 1}`,
                className: "inline-flex items-center gap-1.5 text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors duration-200 group/link",
                children: [
                  "Read More",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function BlogCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-muted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-4/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-28" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" })
      ] })
    ] })
  ] });
}
function BlogPage() {
  const { data: backendPosts, isLoading } = useGetBlogPosts();
  const posts = backendPosts && backendPosts.length > 0 ? backendPosts : FALLBACK_POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "blog.page", className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body font-medium opacity-80", children: "Knowledge from the Field" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5", children: "Stories from the Soil" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl font-body opacity-80 max-w-2xl mx-auto leading-relaxed", children: "Honest reflections on farming, entrepreneurship, and sustainable living — from an engineer who chose the earth over the office." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gradient-to-r from-secondary via-primary/40 to-secondary/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-muted-foreground uppercase tracking-widest", children: "Latest Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "blog.loading_state",
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: ["skel-1", "skel-2", "skel-3", "skel-4"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCardSkeleton, {}, id))
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "blog.list",
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: posts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { post, index: i }, String(post.id)))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 text-center bg-muted/40 rounded-2xl p-10 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "Want to see it in person?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mb-6", children: "Reading about farming is just the beginning. Come walk our fields." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            "data-ocid": "blog.cta_button",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-smooth",
            children: [
              "Connect With Us",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
