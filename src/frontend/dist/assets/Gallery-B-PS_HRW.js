import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Skeleton, X } from "./index-D6M-L3AT.js";
import { B as Badge } from "./badge-BfFuspmz.js";
import { u as useGetGalleryItems } from "./useQueries-BmWb2bzh.js";
import { G as GalleryCategory, P as Play, Z as ZoomIn } from "./types-Cqp2aef9.js";
import "./backend-D5qmZiZF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
];
const Images = createLucideIcon("images", __iconNode);
const PLACEHOLDER_ITEMS = [
  // VIDEO ITEM FIRST — always visible at the top of the All filter
  {
    id: 16n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/videos/teja-controls-video.mp4",
    videoUrl: "/assets/videos/teja-controls-video.mp4",
    title: "Control Panel Tour",
    projectType: "Video Tour",
    isVideo: true,
    description: "Walkthrough of our control panel manufacturing facility"
  },
  {
    id: 1n,
    category: GalleryCategory.riceMills,
    imageUrl: "/assets/generated/gallery-rice-mill-panel.jpg",
    title: "Rice Mill Automation Panel",
    projectType: "PLC Panel"
  },
  {
    id: 2n,
    category: GalleryCategory.flourMills,
    imageUrl: "/assets/generated/gallery-flour-mill-mcc.jpg",
    title: "Flour Mill MCC Panel",
    projectType: "MCC Panel"
  },
  {
    id: 3n,
    category: GalleryCategory.dalMills,
    imageUrl: "/assets/generated/gallery-dal-mill-scada.jpg",
    title: "Dal Mill SCADA Installation",
    projectType: "SCADA System"
  },
  {
    id: 4n,
    category: GalleryCategory.electricalPanels,
    imageUrl: "/assets/generated/gallery-vfd-panel.jpg",
    title: "VFD Drive Panel Assembly",
    projectType: "VFD Panel"
  },
  {
    id: 5n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/generated/gallery-installation.jpg",
    title: "Site Commissioning — Food Plant",
    projectType: "Installation"
  },
  {
    id: 6n,
    category: GalleryCategory.electricalPanels,
    imageUrl: "/assets/generated/gallery-apfc-panel.jpg",
    title: "APFC Power Factor Panel",
    projectType: "APFC Panel"
  },
  {
    id: 7n,
    category: GalleryCategory.riceMills,
    imageUrl: "/assets/generated/gallery-rice-plc.jpg",
    title: "Rice Mill PLC Programming",
    projectType: "PLC Panel"
  },
  {
    id: 8n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/generated/gallery-feed-mill.jpg",
    title: "Feed Mill Control System",
    projectType: "Installation"
  },
  {
    id: 9n,
    category: GalleryCategory.flourMills,
    imageUrl: "/assets/generated/gallery-automation-panel.jpg",
    title: "Flour Mill Automation Panel",
    projectType: "Automation Panel"
  }
];
const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Rice Mills", value: GalleryCategory.riceMills },
  { label: "Flour Mills", value: GalleryCategory.flourMills },
  { label: "Dal Mills", value: GalleryCategory.dalMills },
  { label: "Electrical Panels", value: GalleryCategory.electricalPanels },
  { label: "Installation", value: GalleryCategory.installationProjects }
];
const CATEGORY_META = {
  [GalleryCategory.riceMills]: {
    label: "Rice Mills",
    gradient: "from-primary/70 via-primary/40 to-secondary/20"
  },
  [GalleryCategory.flourMills]: {
    label: "Flour Mills",
    gradient: "from-secondary/70 via-secondary/50 to-accent/30"
  },
  [GalleryCategory.dalMills]: {
    label: "Dal Mills",
    gradient: "from-accent/70 via-accent/40 to-muted/20"
  },
  [GalleryCategory.electricalPanels]: {
    label: "Electrical Panels",
    gradient: "from-foreground/70 via-foreground/40 to-muted/20"
  },
  [GalleryCategory.installationProjects]: {
    label: "Installation",
    gradient: "from-secondary/60 via-primary/30 to-muted/20"
  }
};
const CATEGORY_BADGE_CLASS = {
  [GalleryCategory.riceMills]: "bg-primary/15 text-primary border-primary/25",
  [GalleryCategory.flourMills]: "bg-secondary/20 text-secondary border-secondary/30",
  [GalleryCategory.dalMills]: "bg-accent/20 text-accent-foreground border-accent/30",
  [GalleryCategory.electricalPanels]: "bg-muted text-muted-foreground border-border",
  [GalleryCategory.installationProjects]: "bg-primary/10 text-primary/80 border-primary/20"
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
  if (item.isVideo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": `gallery.item.${index + 1}`,
        onClick: () => onClick(item),
        className: "group relative rounded-xl overflow-hidden bg-primary border-2 border-secondary\n                   ring-2 ring-secondary/30 shadow-lg hover:shadow-2xl hover:ring-secondary/60\n                   transition-all duration-300 focus-visible:outline-none\n                   focus-visible:ring-2 focus-visible:ring-ring text-left w-full col-span-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary text-white text-xs font-body font-bold text-center py-2 tracking-widest uppercase flex items-center justify-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 12, className: "fill-white" }),
            "Featured Video Tour"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden bg-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                src: item.videoUrl,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "metadata",
                className: "w-full h-full object-cover opacity-50 transition-smooth group-hover:scale-105 group-hover:opacity-70"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/90 group-hover:bg-secondary rounded-full p-7 shadow-2xl transition-all duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 52, className: "text-white fill-white ml-2" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-display font-semibold px-6 py-2 rounded-full tracking-wide", children: "Click to Watch" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-secondary text-white text-xs font-display font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 10, className: "fill-white" }),
              " WATCH"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5 bg-primary/95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-white text-base leading-snug", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs font-body mt-1", children: item.description ?? item.projectType })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `gallery.item.${index + 1}`,
      onClick: () => onClick(item),
      className: "group relative rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm\n                 hover:shadow-lg transition-shadow focus-visible:outline-none\n                 focus-visible:ring-2 focus-visible:ring-ring text-left w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.imageUrl,
              alt: item.title,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-muted-foreground line-clamp-2 leading-relaxed", children: item.title })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 min-h-0 overflow-hidden", children: item.isVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                src: item.videoUrl,
                controls: true,
                autoPlay: true,
                className: "w-full h-full object-contain max-h-[65vh]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions", src: "", label: "No captions available" })
              }
            ) : hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.imageUrl,
                alt: item.title,
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base font-body text-foreground/80 leading-relaxed", children: [
                item.title,
                " — ",
                item.projectType
              ] })
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
  const rawItems = allItems.length > 0 ? allItems : PLACEHOLDER_ITEMS;
  const items = [...rawItems].sort(
    (a, b) => a.isVideo === b.isVideo ? 0 : a.isVideo ? -1 : 1
  );
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
        filtered.length === 1 ? "item" : "items",
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
