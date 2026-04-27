import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, L as Link, a as Leaf } from "./index-B_yqDsmv.js";
import { B as Badge } from "./badge-B1kUhnsd.js";
import { A as ArrowRight } from "./arrow-right-Dsnoy1i3.js";
import { G as Grape, S as Sun } from "./sun-D2fwxOs7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const features = [
  {
    icon: Leaf,
    title: "Integrated Farming",
    description: "Combining traditional wisdom with modern agri-science for resilient, diversified crop systems that thrive year-round.",
    image: "/assets/generated/integrated-farming.dim_800x600.jpg",
    href: "/practices",
    ocid: "home.feature_card.1"
  },
  {
    icon: Grape,
    title: "Vijayapura Grapes",
    description: "The jewel of North Karnataka — our premium grape cultivation celebrates the region's unique terroir and climate.",
    image: "/assets/generated/grapes-closeup.dim_800x600.jpg",
    href: "/products",
    ocid: "home.feature_card.2"
  },
  {
    icon: Sun,
    title: "Sustainable Practices",
    description: "Zero-chemical philosophy, composting, drip irrigation, and soil health as the foundation of every harvest.",
    image: "/assets/generated/sustainable-practices.dim_800x600.jpg",
    href: "/practices",
    ocid: "home.feature_card.3"
  }
];
const stats = [
  { value: "12+", label: "Crop Varieties" },
  { value: "40", label: "Acres Cultivated" },
  { value: "100%", label: "Chemical-Free" },
  { value: "5★", label: "Quality Standard" }
];
function Home() {
  const scrollToVideo = () => {
    var _a;
    (_a = document.getElementById("our-story")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.hero_section",
        className: "relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-vineyard.dim_1600x900.jpg",
                alt: "Heartland Farms vineyard at golden hour",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 py-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-xs uppercase tracking-widest px-4 py-1.5",
                children: "Vijayapura · North Karnataka"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight", children: [
              "From Corporate Life",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "to Sustainable Farming" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg sm:text-xl text-primary-foreground/80 max-w-xl leading-relaxed", children: "A journey of purpose, passion, and agriculture — where modern innovation meets the ancient art of farming." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  size: "lg",
                  "data-ocid": "home.explore_cta",
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/practices", children: [
                    "Explore Our Farm",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "lg",
                  onClick: scrollToVideo,
                  "data-ocid": "home.story_cta",
                  className: "border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 font-semibold px-8 py-6 text-base rounded-full transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-2 h-4 w-4" }),
                    "Watch Our Story"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-12 bg-primary-foreground/50 animate-pulse" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.stats_section",
        className: "bg-primary text-primary-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl md:text-4xl font-bold", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-primary-foreground/70 uppercase tracking-widest", children: stat.label })
        ] }, stat.label)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.tagline_section",
        className: "bg-muted/40 border-y border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground italic leading-tight", children: '"Where Nature Meets Innovation"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-body text-base text-muted-foreground max-w-xl mx-auto", children: "Heartland Farms · Est. Vijayapura, Karnataka" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.features_section",
        className: "bg-background py-20 px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-primary border-primary/30 bg-primary/5 text-xs uppercase tracking-widest mb-4",
                children: "What We Do"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight", children: [
              "Rooted in Purpose,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Growing with Intent" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature) => {
            const Icon = feature.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": feature.ocid,
                className: "group card-elevated rounded-2xl overflow-hidden flex flex-col",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: feature.image,
                        alt: feature.title,
                        className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 bg-primary/90 text-primary-foreground rounded-full p-2.5 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-6 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground", children: feature.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed flex-1", children: feature.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: feature.href,
                        className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-smooth",
                        children: [
                          "Learn More ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                        ]
                      }
                    )
                  ] })
                ]
              },
              feature.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.brand_message_section",
        className: "bg-muted/30 py-20 px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-primary/30 mx-auto mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug italic", children: `"Farming is not just tradition — it's a smart, modern, and profitable way of life."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-body text-base text-muted-foreground", children: "— Gurupad MS, Founder, Heartland Farms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "default",
                "data-ocid": "home.about_cta",
                className: "rounded-full px-7",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Our Story" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "default",
                "data-ocid": "home.contact_cta",
                className: "rounded-full px-7",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Connect With Us" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "our-story",
        "data-ocid": "home.video_section",
        className: "bg-background py-20 px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-primary border-primary/30 bg-primary/5 text-xs uppercase tracking-widest mb-4",
                children: "Our Story"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "A Glimpse into Heartland Farms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-body text-base text-muted-foreground max-w-xl mx-auto", children: "Watch how a former Siemens engineer turned a plot of North Karnataka land into a thriving, sustainable farm." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-elevated rounded-2xl overflow-hidden aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              src: "https://www.youtube.com/embed/772WVHHehm4",
              title: "Heartland Farms — Our Story",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true,
              className: "w-full h-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center font-body text-sm text-muted-foreground", children: "Heartland Farms · Vijayapura, North Karnataka, India" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.final_cta_section",
        className: "bg-primary text-primary-foreground py-20 px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center flex flex-col items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight", children: [
            "Ready to Experience",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "the Heartland?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-primary-foreground/80 max-w-md", children: "Reach out to learn more about our farm, our practices, or to source directly from us." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                "data-ocid": "home.final_explore_cta",
                className: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 rounded-full shadow-lg transition-smooth",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/practices", children: "Explore Our Farm" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "lg",
                "data-ocid": "home.final_connect_cta",
                className: "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-full transition-smooth",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Connect With Us" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
