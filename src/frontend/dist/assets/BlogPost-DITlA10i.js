import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link, B as Button, S as Skeleton } from "./index-D6M-L3AT.js";
import { B as Badge } from "./badge-BfFuspmz.js";
import { C as Card } from "./card-BVeU_Je5.js";
import { b as useGetBlogPost } from "./useQueries-BmWb2bzh.js";
import { C as Calendar } from "./calendar-NOTLN0CZ.js";
import { C as Clock } from "./clock-DsUzyxKD.js";
import { A as ArrowRight } from "./arrow-right-CG_9LE0i.js";
import "./backend-D5qmZiZF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const FULL_POSTS = {
  "plc-programming-rice-mills": {
    id: 1n,
    slug: "plc-programming-rice-mills",
    title: "PLC Programming for Rice Mills: A Complete Guide",
    excerpt: "Modern rice mill automation relies on robust PLC programming to deliver consistent milling quality, minimal downtime, and precise process control from paddy intake to finished rice packaging.",
    author: "Teja Controls Engineering Team",
    date: BigInt((/* @__PURE__ */ new Date("2024-04-10")).getTime()),
    category: "Automation",
    readTime: "8 min read",
    content: `Rice milling is one of India's most critical food processing operations, and the transition from manual to automated control has transformed productivity across the industry. At the heart of every modern rice mill automation project is a well-architected PLC (Programmable Logic Controller) program that orchestrates cleaning, milling, grading, and packaging into a seamless, supervised process.

A rice mill PLC program begins at paddy intake. Incoming raw paddy is weighed, moisture-checked, and routed to the appropriate pre-cleaner. Pre-cleaning PLCs typically manage vibratory screens, aspirators, and de-stoners in sequence, with interlocks that halt downstream equipment if the pre-cleaner is overwhelmed. Getting this sequencing right eliminates the most common cause of mechanical breakdowns in older mills.

The milling section is where PLC programming demands the most precision. Rubber roll shellers must operate within a tight gap tolerance — too wide and yield drops, too narrow and broken rice percentage climbs. Modern PLC programs read rubber roll pressure sensors and automatically adjust roller gap via servo-actuated mechanisms. The result is milling consistency that no manual operator can reliably sustain across a 16-hour shift.

Whitening and polishing machines are controlled through load feedback loops. The PLC continuously monitors motor current draw and adjusts feed rates to keep whitening pressure within specification. Over-polishing wastes rice and increases energy consumption; under-polishing produces a product that won't meet export grade. The control logic balances both risks simultaneously.

Grading and length sorting present a different programming challenge. Colour sorters and length graders generate high-frequency reject signals that must be logged, counted, and reported to the SCADA layer without creating communication bottlenecks. We use interrupt-driven subroutines in our Siemens S7-1500 programs that handle sorter feedback at millisecond resolution while the main scan cycle continues uninterrupted.

Packaging section PLCs integrate with weighing controllers, bag-sealing machines, and conveyor systems. Batch counts, shift totals, and alarm logs are all written to a database via OPC-UA, giving the mill manager a complete audit trail of every production run.

The most important principle in rice mill PLC programming: every mechanical interlock must be captured in software, and every software interlock must be validated against the physical system during commissioning. We perform I/O checkout on 100% of signals before any automated sequence is run.

Energy monitoring is now a standard component of our rice mill programs. Power meters on each major drive feed into the PLC via Modbus, and the data is aggregated into a per-tonne energy consumption metric that mill owners can track in real time. Across our recent projects, this visibility has reduced specific energy consumption by 12-18% within the first six months of operation.`
  },
  "scada-benefits-food-processing": {
    id: 2n,
    slug: "scada-benefits-food-processing",
    title: "SCADA Benefits for Food Processing Industries",
    excerpt: "A SCADA system transforms scattered sensor data into actionable plant intelligence. For food processing facilities, the benefits go beyond visibility — they directly impact quality, compliance, and profitability.",
    author: "Teja Controls Engineering Team",
    date: BigInt((/* @__PURE__ */ new Date("2024-06-15")).getTime()),
    category: "Technology",
    readTime: "6 min read",
    content: `Supervisory Control and Data Acquisition systems have become the operational backbone of modern food processing plants. Where operators once walked the floor with clipboards, today's SCADA gives a single engineer complete visibility into every motor, valve, sensor, and conveyor in the plant — from a single screen, updated in real time.

The first and most immediate benefit is centralised alarm management. In a typical flour mill or dal processing plant, hundreds of process alarms can be generated in a single shift. Without SCADA, these alarms appear only on local panels, are often missed or silenced without documentation, and rarely get investigated for root cause. A well-configured SCADA system prioritises alarms by severity, records response times, and generates shift reports that identify chronic alarm sources. Plants that implement this discipline routinely reduce nuisance alarms by 60-70% within three months.

Batch traceability is a non-negotiable requirement for food processing plants supplying modern retail chains. SCADA systems can record every batch parameter — ingredient weights, process temperatures, cooking times, packaging lot numbers — and store them with a timestamp linking the finished product to its raw material inputs. When a quality issue arises, the investigation that would have taken days takes hours.

Energy management through SCADA has delivered measurable ROI in every food processing plant we've instrumented. Monitoring specific energy consumption by production unit reveals inefficiencies invisible at the utility meter level. One of our dal mill clients discovered their destoner was running unloaded for two hours per shift — a finding that reduced their electrical bill by approximately Rs 4 lakh per year, with zero capital expenditure.

Remote access is transforming how maintenance is done. Our SCADA systems support secure remote access, meaning our engineers can diagnose a PLC fault or adjust a control loop from Hyderabad while the plant operates in Punjab. Downtime that once required a two-day site visit is now often resolved in under an hour.

Data historian integration is the long-term value multiplier. Every process variable your SCADA records becomes a dataset for production optimisation. Correlating motor current trends with bearing temperature data predicts failures before they happen. The intelligence is in the data — SCADA is the system that captures it.`
  },
  "automation-roi-milling-industry": {
    id: 3n,
    slug: "automation-roi-milling-industry",
    title: "Maximizing ROI with Industrial Automation",
    excerpt: "Industrial automation is a capital investment — and like any investment, it must be evaluated on returns. Understanding where automation delivers the fastest and most durable ROI helps mill owners make confident decisions.",
    author: "Teja Controls Engineering Team",
    date: BigInt((/* @__PURE__ */ new Date("2024-08-22")).getTime()),
    category: "Business",
    readTime: "7 min read",
    content: `The question mill owners ask us most often is not "Can you automate this?" — it's "Will it pay back?" The answer is almost always yes, but the timeline and mechanism vary significantly depending on the plant's current state, production volume, and the specific processes being automated.

Labour cost reduction is the most cited driver, but it's rarely the fastest payback. In our experience, the quickest ROI comes from yield improvement. A rice mill running at 67% head rice yield that can be pushed to 70% through precise PLC-controlled milling gap adjustment adds three percentage points of saleable output from the same input. At Rs 45 per kilogram for premium head rice, that translates directly to lakhs of rupees per month in additional revenue — without changing the raw material procurement, labour structure, or overhead.

Downtime reduction is the second major lever. Manual mills experience regular unplanned stoppages due to jams, overloads, and mechanical failures that weren't predicted. Automated mills with current monitoring, vibration sensors, and predictive maintenance alerts can reduce unplanned downtime by 40-60%. For a mill operating at Rs 50 lakh per month in output, a 5% reduction in unplanned downtime is worth Rs 2.5 lakh per month in recovered production — every month, indefinitely.

Energy efficiency improvements from automation typically deliver 10-20% reduction in specific energy consumption. Soft starters and VFDs on motors that run at variable loads, automatic shutoff of idle equipment, and optimised compressed air control all contribute. Energy savings are durable — once the capital investment is made, the savings compound over the asset life.

Quality premiums are harder to quantify but real. Export-grade rice commands a Rs 3-5 per kilogram premium over domestic grade. Achieving export grade consistently requires automated colour sorting, grading, and moisture management — processes that human operators cannot sustain reliably at scale. Our clients who have invested in this level of automation report that the quality premium alone funds the automation capital cost within 18-24 months.

The total cost of ownership calculation must include after-sales support, spare parts, and software maintenance. At Teja Controls, we design systems using Siemens, ABB, and Schneider Electric components specifically because the replacement parts ecosystem is robust and the component lifetime is proven in industrial environments.`
  },
  "control-panel-design-best-practices": {
    id: 4n,
    slug: "control-panel-design-best-practices",
    title: "Control Panel Design Best Practices",
    excerpt: "A well-designed control panel is the foundation of a reliable automation system. Poor panel design leads to overheating, interference, difficult maintenance, and shortened component life.",
    author: "Teja Controls Engineering Team",
    date: BigInt((/* @__PURE__ */ new Date("2024-10-05")).getTime()),
    category: "Engineering",
    readTime: "5 min read",
    content: `Control panel design is where automation projects succeed or fail in the long run. A PLC program can be excellent and a SCADA system can be perfectly configured, but if the control panel that houses them is poorly designed, the system will be unreliable, difficult to maintain, and prone to premature failure. After designing and building several hundred panels, we've distilled our engineering standards into a set of principles we apply consistently on every project.

Thermal management is the single most important design consideration. Heat is the primary cause of premature component failure in control panels. Our design process begins with a thermal calculation: we sum the heat dissipation of every component inside the enclosure, calculate the ambient temperature rise, and specify cooling through natural convection, forced air, or air conditioning depending on the result. We target an internal panel temperature no more than 10 degrees C above the highest-rated component's maximum ambient specification.

Cable management separates power and signal cables to prevent electromagnetic interference. In our standard designs, 415V power cables run on the left side of the panel, and 24V DC signal cables run on the right, separated by a grounded metal divider. This segregation eliminates 80% of the interference problems that plague poorly-designed panels. All cable runs are numbered and labelled at both ends, matching the engineering drawing set that we hand over at project completion.

Component selection follows a tier-1-only policy for safety-critical and hard-to-access items. MCBs, contactors, and overload relays are sourced from Schneider Electric, Siemens, or ABB. PLCs and drives are selected from the same tier. This is not brand preference — it is a maintenance and spares philosophy. When a component fails at 2 AM during a production run, the plant engineer needs to source a replacement from local distributors, not wait for an import.

Future expansion is designed in from the start. We reserve 20% spare space in every enclosure, include spare terminals on every rail, and leave documented spare capacity in the PLC program. The cost of this discipline is minimal — a slightly larger enclosure and a few extra terminal blocks. The value is that when the plant adds a new production line in three years, the automation upgrade is an extension rather than a replacement.

Documentation is the final deliverable that distinguishes a professional panel build. Every panel we deliver includes complete engineering drawings — single-line diagrams, schematic drawings, cabinet layouts, I/O lists, and cable schedules — in both paper and electronic format. We also provide operation and maintenance manuals with troubleshooting guides. A panel without documentation is a liability; a panel with complete documentation is an asset that any competent engineer can maintain for decades.`
  }
};
const RELATED_ARTICLES = Object.values(FULL_POSTS).map((p) => ({
  slug: p.slug,
  title: p.title,
  category: p.category,
  readTime: p.readTime
}));
const CATEGORY_COLORS = {
  Automation: "bg-accent/20 text-accent border-accent/30",
  Technology: "bg-primary/20 text-primary-foreground border-primary/30",
  Business: "bg-muted text-muted-foreground border-border",
  Engineering: "bg-accent/15 text-accent border-accent/25"
};
const HERO_IMAGES = {
  "plc-programming-rice-mills": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&auto=format&fit=crop&q=80",
  "scada-benefits-food-processing": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
  "automation-roi-milling-industry": "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&auto=format&fit=crop&q=80",
  "control-panel-design-best-practices": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&auto=format&fit=crop&q=80"
};
const DEFAULT_HERO = "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=1200&auto=format&fit=crop&q=80";
function formatDate(timestamp) {
  const ms = Number(timestamp);
  const date = ms > 1e15 ? new Date(ms / 1e6) : new Date(ms);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function renderContent(content) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return paragraphs.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "font-body text-base sm:text-lg text-foreground/90 leading-[1.85] mb-6",
      children: para.trim()
    },
    `para-${i}-${para.length}`
  ));
}
function PostSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-3xl mx-auto px-6 py-16",
      "data-ocid": "blog_post.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4 mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }, id)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
        ] })
      ]
    }
  );
}
function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const { data: backendPost, isLoading } = useGetBlogPost(slug);
  const post = backendPost ?? FULL_POSTS[slug] ?? null;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostSkeleton, {}) });
  }
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "blog_post.error_state",
        className: "min-h-[60vh] bg-background flex flex-col items-center justify-center gap-4 px-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-foreground", children: "Article not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "This article may have moved or been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              "data-ocid": "blog_post.back_link",
              className: "inline-flex items-center gap-2 text-accent font-body font-medium hover:underline",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Back to Knowledge Hub"
              ]
            }
          )
        ]
      }
    );
  }
  const heroImg = HERO_IMAGES[post.slug] ?? DEFAULT_HERO;
  const badgeClass = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.Engineering;
  const related = RELATED_ARTICLES.filter((a) => a.slug !== post.slug).slice(
    0,
    3
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "blog_post.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary pt-10 pb-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          "aria-label": "Breadcrumb",
          "data-ocid": "blog_post.breadcrumb",
          className: "flex items-center gap-2 text-sm font-body text-primary-foreground/60 mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "hover:text-primary-foreground transition-colors",
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog",
                className: "hover:text-primary-foreground transition-colors",
                children: "Knowledge Hub"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/90 truncate max-w-[200px] sm:max-w-xs", children: post.title })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `inline-block text-xs font-body font-semibold px-3 py-1 rounded-full border mb-4 ${badgeClass}`,
          children: post.category
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5 max-w-4xl", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/75 text-base sm:text-lg leading-relaxed max-w-3xl mb-8", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 text-sm font-body text-primary-foreground/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
          post.author
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
          formatDate(post.date)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
          post.readTime
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border mb-10 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroImg,
            alt: post.title,
            className: "w-full h-64 sm:h-80 object-cover",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "blog_post.content", children: renderContent(post.content || post.excerpt) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 pt-8 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            "data-ocid": "blog_post.back_link",
            className: "inline-flex items-center gap-2 font-body font-semibold text-accent hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Knowledge Hub"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-24 flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground mb-1", children: "Related Articles" }),
        related.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/blog/$slug",
            params: { slug: article.slug },
            "data-ocid": "blog_post.related_item",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border-border hover:border-accent/50 hover:shadow-md transition-all duration-200 group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs font-body mb-2 border-accent/30 text-accent",
                  children: article.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-3", children: article.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-body text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  article.readTime
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-accent", children: [
                  "Read ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ] })
              ] })
            ] })
          },
          article.slug
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 p-6 bg-primary border-0 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold mb-2", children: "Need an Automation Solution?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-primary-foreground/75 mb-4", children: "Our engineers are ready to assess your plant and deliver a custom proposal." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              type: "button",
              className: "w-full bg-accent hover:bg-accent/90 text-white font-body font-semibold text-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "blog_post.quote_cta_button", children: "Request a Quote" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BlogPostPage as default
};
