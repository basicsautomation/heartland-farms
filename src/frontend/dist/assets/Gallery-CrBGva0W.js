import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Skeleton, X } from "./index-B8sDWgsi.js";
import { B as Badge } from "./badge-DvN-CMzZ.js";
import { u as useGetGalleryItems } from "./useQueries-kKZOlNaz.js";
import "./backend-CmKDUSkX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
];
const Images = createLucideIcon("images", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
var GalleryCategory = /* @__PURE__ */ ((GalleryCategory2) => {
  GalleryCategory2["journey"] = "journey";
  GalleryCategory2["farm"] = "farm";
  GalleryCategory2["vineyard"] = "vineyard";
  GalleryCategory2["lifestyle"] = "lifestyle";
  return GalleryCategory2;
})(GalleryCategory || {});
const PLACEHOLDER_ITEMS = [
  {
    id: 1n,
    category: GalleryCategory.vineyard,
    imageUrl: "/assets/images/gallery-community-vineyard.png",
    caption: "Community harvest day — women gathering at the vineyard in Vijayapura"
  },
  {
    id: 2n,
    category: GalleryCategory.farm,
    imageUrl: "/assets/images/gallery-founder-tractor.png",
    caption: "Gurupad MS on his John Deere tractor — where corporate dreams meet farming reality"
  },
  {
    id: 3n,
    category: GalleryCategory.journey,
    imageUrl: "/assets/images/gallery-harvest-collage.png",
    caption: "From first grape clusters to harvest — the Heartland Farms story"
  },
  {
    id: 4n,
    category: GalleryCategory.vineyard,
    imageUrl: "/assets/images/gallery-new-vineyard.png",
    caption: "Newly planted vineyard with drip irrigation — sustainable farming in action"
  },
  {
    id: 5n,
    category: GalleryCategory.lifestyle,
    imageUrl: "/assets/images/gallery-farm-puja.png",
    caption: "Farm puja ceremony — women in colorful sarees performing a traditional worship ritual at the farm shrine, celebrating the harvest season"
  },
  {
    id: 6n,
    category: GalleryCategory.vineyard,
    imageUrl: "/assets/images/gallery-peacock-vineyard.png",
    caption: "A peacock perched on a vineyard post overlooking lush green grape rows and red soil paths at Heartland Farms"
  },
  {
    id: 7n,
    category: GalleryCategory.vineyard,
    imageUrl: "/assets/images/gallery-boy-grapes.png",
    caption: "Joy of the harvest — a young boy smiling and holding a fresh bunch of green grapes in the vineyard"
  },
  {
    id: 8n,
    category: GalleryCategory.farm,
    imageUrl: "/assets/images/gallery-grape-drying.png",
    caption: "Grape drying facility at scale — dense clusters of green and golden grapes laid out on massive overhead racks to dry into raisins"
  },
  {
    id: 9n,
    category: GalleryCategory.farm,
    imageUrl: "/assets/images/gallery-boy-tomato.png",
    caption: "Fresh from the farm — a young boy proudly holds a ripe tomato with coconut trees, granite pillars and drip irrigation in the background"
  }
];
const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Farm", value: GalleryCategory.farm },
  { label: "Vineyard", value: GalleryCategory.vineyard },
  { label: "Lifestyle", value: GalleryCategory.lifestyle },
  { label: "Journey", value: GalleryCategory.journey }
];
const CATEGORY_META = {
  [GalleryCategory.farm]: {
    label: "Farm",
    gradient: "from-secondary/70 via-secondary/50 to-accent/30"
  },
  [GalleryCategory.vineyard]: {
    label: "Vineyard",
    gradient: "from-primary/70 via-primary/40 to-secondary/20"
  },
  [GalleryCategory.lifestyle]: {
    label: "Lifestyle",
    gradient: "from-secondary/70 via-secondary/40 to-muted/20"
  },
  [GalleryCategory.journey]: {
    label: "Journey",
    gradient: "from-foreground/70 via-foreground/40 to-muted/20"
  }
};
const CATEGORY_BADGE_CLASS = {
  [GalleryCategory.farm]: "bg-secondary/20 text-secondary border-secondary/30",
  [GalleryCategory.vineyard]: "bg-primary/15 text-primary border-primary/25",
  [GalleryCategory.lifestyle]: "bg-accent/20 text-accent-foreground border-accent/30",
  [GalleryCategory.journey]: "bg-muted text-muted-foreground border-border"
};
const SKELETON_KEYS = [
  "sk-a",
  "sk-b",
  "sk-c",
  "sk-d",
  "sk-e",
  "sk-f",
  "sk-g",
  "sk-h",
  "sk-i"
];
function GalleryCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden bg-card border border-border shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" })
    ] })
  ] });
}
function GalleryCard({ item, index, onClick }) {
  const meta = CATEGORY_META[item.category];
  const badgeClass = CATEGORY_BADGE_CLASS[item.category];
  const hasImage = !!item.imageUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `gallery.item.${index + 1}`,
      onClick: () => onClick(item),
      className: "group relative rounded-xl overflow-hidden bg-card border border-border shadow-sm\n                 hover:shadow-lg hover:-translate-y-0.5 transition-smooth focus-visible:outline-none\n                 focus-visible:ring-2 focus-visible:ring-ring text-left w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.imageUrl,
              alt: item.caption,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-full h-full bg-gradient-to-br ${meta.gradient} flex items-end justify-end p-3
                        transition-smooth group-hover:opacity-90`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_rgba(255,255,255,0.08)_0%,transparent_70%)]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100\n                        transition-smooth bg-foreground/10 backdrop-blur-[2px]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/90 rounded-full p-2.5 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-5 h-5 text-foreground" }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `text-xs font-body font-medium ${badgeClass}`,
              children: meta.label
            }
          ),
          item.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-muted-foreground line-clamp-2 leading-relaxed", children: item.caption })
        ] })
      ]
    }
  );
}
function Lightbox({ item, onClose }) {
  const meta = CATEGORY_META[item.category];
  const badgeClass = CATEGORY_BADGE_CLASS[item.category];
  const hasImage = !!item.imageUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "dialog",
    {
      "data-ocid": "gallery.dialog",
      open: true,
      "aria-label": "Gallery image lightbox",
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8\n                 bg-foreground/70 backdrop-blur-md w-full max-w-none h-full max-h-none m-0\n                 border-0 bg-transparent",
      onKeyDown: (e) => e.key === "Escape" && onClose(),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border\n                   max-w-3xl w-full max-h-[90vh] flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "gallery.close_button",
                onClick: onClose,
                "aria-label": "Close lightbox",
                className: "absolute top-3 right-3 z-10 bg-card/80 hover:bg-card rounded-full p-2\n                     shadow-md transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 min-h-0 overflow-hidden", children: hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.imageUrl,
                alt: item.caption,
                className: "w-full h-full object-contain max-h-[65vh]"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `w-full bg-gradient-to-br ${meta.gradient} flex items-center justify-center`,
                style: { minHeight: "340px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_rgba(255,255,255,0.1)_0%,transparent_70%)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "w-16 h-16 text-card/40 relative z-10" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-border bg-card flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-xs font-body font-medium flex-shrink-0 ${badgeClass}`,
                  children: meta.label
                }
              ),
              item.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-body text-foreground/80 leading-relaxed", children: item.caption })
            ] })
          ]
        }
      )
    }
  );
}
function GalleryPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [lightboxItem, setLightboxItem] = reactExports.useState(null);
  const { data: allItems = [], isLoading } = useGetGalleryItems();
  const items = allItems.length > 0 ? allItems : PLACEHOLDER_ITEMS;
  const filtered = activeFilter === "all" ? items : items.filter((i) => i.category === activeFilter);
  const openLightbox = reactExports.useCallback((item) => {
    setLightboxItem(item);
  }, []);
  const closeLightbox = reactExports.useCallback(() => {
    setLightboxItem(null);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: { minHeight: "340px" },
        "data-ocid": "gallery.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url('/assets/generated/gallery-hero.dim_1600x600.jpg')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/40 to-background/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center text-center px-4 py-28 sm:py-36", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-secondary/90 text-sm sm:text-base uppercase tracking-widest mb-3 font-semibold drop-shadow", children: "Heartland Farms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-premium-display text-card drop-shadow-lg max-w-2xl", children: "Life on the Farm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-body text-card/80 text-lg sm:text-xl max-w-xl leading-relaxed drop-shadow", children: "Every frame tells a story — of soil, seasons, and the people who tend this land with heart." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "tablist",
        "aria-label": "Gallery categories",
        className: "flex gap-1 overflow-x-auto py-3 scrollbar-none",
        children: FILTER_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": activeFilter === tab.value,
            "data-ocid": `gallery.filter.${tab.value}`,
            onClick: () => setActiveFilter(tab.value),
            className: `
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-body font-medium transition-smooth
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${activeFilter === tab.value ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}
                `,
            children: tab.label
          },
          tab.value
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", children: SKELETON_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryCardSkeleton, {}, key)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "gallery.empty_state",
        className: "flex flex-col items-center justify-center py-24 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground mb-1", children: "No images yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm", children: "Check back soon — we're adding new memories regularly." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground text-sm mb-6", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
        " ",
        filtered.length === 1 ? "photo" : "photos",
        activeFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " ",
          "in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: activeFilter })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", children: filtered.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        GalleryCard,
        {
          item,
          index,
          onClick: openLightbox
        },
        String(item.id)
      )) })
    ] }) }),
    lightboxItem && /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { item: lightboxItem, onClose: closeLightbox })
  ] });
}
export {
  GalleryPage as default
};
