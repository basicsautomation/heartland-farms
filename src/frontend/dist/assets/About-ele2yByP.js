import { c as createLucideIcon, j as jsxRuntimeExports, a as Leaf, L as Link } from "./index-B8sDWgsi.js";
import { B as Badge } from "./badge-DvN-CMzZ.js";
import { m as motion } from "./proxy-BvTcQrLp.js";
import { S as Sprout } from "./sprout--awjwXOS.js";
import { F as FlaskConical, G as Globe } from "./globe-wLzzQ1Mo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const milestones = [
  {
    year: "2010",
    title: "Engineering Career Begins",
    description: "Gurupad MS graduates with an engineering degree and joins the corporate world — driven, ambitious, and ready to climb.",
    side: "left"
  },
  {
    year: "2015",
    title: "Senior Role at Siemens",
    description: "Five years in, a senior position at Siemens in Bengaluru. Comfortable salary, international projects, and a growing unease — something felt missing.",
    side: "right"
  },
  {
    year: "2018",
    title: "The Courageous Decision",
    description: "A trip back to Vijayapura changed everything. Standing in his ancestral fields, Gurupad made the decision that would define his life: leave it all behind and farm.",
    side: "left"
  },
  {
    year: "2019",
    title: "First Harvest",
    description: "Not without struggle. Unfamiliar soil, unpredictable rains, and skeptical neighbours. Yet the first harvest arrived — imperfect, hard-won, and deeply satisfying.",
    side: "right"
  },
  {
    year: "2022",
    title: "Heartland Farms Established",
    description: "With integrated, science-backed farming producing consistent yields, Heartland Farms was formally born — a brand as rooted in the land as the crops it grows.",
    side: "left"
  }
];
const values = [
  {
    icon: FlaskConical,
    title: "Innovation Meets Tradition",
    description: "We blend time-honoured agricultural wisdom with modern science — precision irrigation, soil analytics, and integrated pest management — to honour the past while cultivating the future."
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "Every decision on our farm is made with the next generation in mind. Zero chemical runoff, water conservation, and biodiversity are non-negotiables — not marketing promises."
  },
  {
    icon: Heart,
    title: "From Soil to Soul",
    description: "Farming is personal. Every crop we grow carries our story, our care, and our belief that the relationship between farmer and land is one of the most profound on earth."
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 }
  })
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[56vh] flex items-center justify-center overflow-hidden bg-primary",
        "data-ocid": "about.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.06]",
              style: {
                backgroundImage: "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 32px)",
                color: "oklch(0.98 0 0)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,oklch(0.55_0.1_90/0.3),transparent)]",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-6 py-24 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                custom: 0,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 font-body text-xs uppercase tracking-widest px-4 py-1", children: "Our Story" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6",
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                custom: 1,
                children: [
                  "From ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic opacity-90", children: "Boardrooms" }),
                  " to Bountiful Fields"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "font-body text-primary-foreground/75 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto",
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                custom: 2,
                children: "A story about courage, roots, and the quiet revolution of choosing the land over the corporate ladder — told honestly, without the gloss."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent",
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-24 px-6",
        "data-ocid": "about.founder.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeLeft,
              className: "relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/founder-portrait.dim_800x1000.jpg",
                      alt: "Gurupad MS — founder of Heartland Farms — standing in his vineyard at golden hour",
                      className: "w-full h-full object-cover",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-primary-foreground font-semibold", children: "Gurupad MS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/75 text-sm", children: "Founder, Heartland Farms · Vijayapura, Karnataka" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -right-6 top-8 hidden lg:flex flex-col items-center gap-2 bg-card border border-border rounded-xl px-5 py-4 shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "text-primary", size: 28 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-foreground", children: "5+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground text-center leading-snug", children: [
                    "Years",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Farming"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-6 bottom-24 hidden lg:flex flex-col items-center gap-2 bg-card border border-border rounded-xl px-5 py-4 shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "text-secondary", size: 28 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-foreground", children: "100%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground text-center leading-snug", children: [
                    "Sustainable",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Practices"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeRight,
              className: "flex flex-col gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "self-start text-xs uppercase tracking-widest font-body text-muted-foreground border-border",
                    children: "The Founder's Journey"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground leading-snug", children: '"I had everything the world said I should want. And I was empty."' }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-muted-foreground text-base leading-relaxed flex flex-col gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Gurupad MS spent years inside glass-and-steel offices, engineering solutions for one of the world's most respected industrial companies. The pay was good, the title respectable, the future secure. Yet every visit back to Vijayapura stirred something that no promotion could quiet." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In 2018, he did something most called reckless: he resigned from Siemens and drove back to North Karnataka with soil on his mind and no safety net. The first year was brutal. The learning curve was steep, the failures public, and the neighbours politely unconvinced." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "But he brought something that traditional farming rarely had: an engineer's discipline. He studied soil science obsessively, experimented with drip irrigation, and built composting systems from scratch. By 2019, the first proper harvest arrived. By 2022, Heartland Farms was a name people in Vijayapura began to respect." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium italic border-l-4 border-primary/30 pl-4", children: `"I don't miss the salary. I miss nothing. This land — this work — is the most meaningful thing I have ever done."` })
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-muted/40 py-24 px-6 overflow-hidden relative",
        "data-ocid": "about.mission.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04]",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, oklch(0.38 0.11 140) 0px, oklch(0.38 0.11 140) 1px, transparent 1px, transparent 24px)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              className: "relative z-10 max-w-4xl mx-auto text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs uppercase tracking-widest text-muted-foreground", children: "Our Mission" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary/40" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight", children: [
                  '"Farming is not just tradition —',
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "it is a smart, modern, and profitable way of life." }),
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed", children: "We believe the future of agriculture belongs to people willing to marry ancient knowledge with contemporary science — and we are living proof that it works." })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-24 px-6",
        "data-ocid": "about.timeline.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 text-xs uppercase tracking-widest font-body text-muted-foreground border-border",
                    children: "The Journey"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "Milestones That Shaped Us" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "md:hidden absolute left-0 top-0 bottom-0 w-px bg-border",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: milestones.map((m, i) => {
              const isLeft = m.side === "left";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  custom: i,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true },
                  variants: fadeUp,
                  className: `relative pb-12 md:pb-16 pl-10 md:pl-0 flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`,
                  "data-ocid": `about.timeline.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-elevated rounded-xl p-6 inline-block text-left w-full", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-primary", children: m.year }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mt-1 mb-2", children: m.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: m.description })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md z-10",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "md:hidden absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:w-1/2" })
                  ]
                },
                m.year
              );
            }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-24 px-6",
        "data-ocid": "about.values.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 text-xs uppercase tracking-widest font-body text-muted-foreground border-border",
                    children: "What We Stand For"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "Our Values" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-body text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "These are not brand taglines. They are the principles that guide every seed we plant and every decision we make at Heartland Farms." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-8", children: values.map((v, i) => {
            const Icon = v.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                custom: i,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants: fadeUp,
                className: "card-elevated rounded-2xl p-8 flex flex-col items-start gap-5",
                "data-ocid": `about.values.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: v.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: v.description })
                  ] })
                ]
              },
              v.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-primary py-20 px-6 text-center relative overflow-hidden",
        "data-ocid": "about.cta.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,oklch(0.48_0.12_33/0.15),transparent)]",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              className: "relative z-10 max-w-2xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Zap,
                  {
                    size: 36,
                    className: "text-primary-foreground mx-auto mb-6 opacity-70"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4", children: "Ready to know the farm?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/70 text-lg mb-8 leading-relaxed", children: "Explore our farming practices, browse our produce, or simply get in touch. We love to talk about the land." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/practices",
                      className: "inline-flex items-center gap-2 bg-card text-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover:bg-card/90 hover:shadow-lg",
                      "data-ocid": "about.cta.practices_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { size: 18 }),
                        "Our Practices"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-full transition-smooth hover:opacity-90 hover:shadow-lg",
                      "data-ocid": "about.cta.contact_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 }),
                        "Connect With Us"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  About as default
};
