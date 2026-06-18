import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetGalleryItems } from "@/hooks/useQueries";
import { GalleryCategory, type GalleryItem } from "@/types";
import { Images, Play, X, ZoomIn } from "lucide-react";
import { useCallback, useState } from "react";

// ─── Placeholder data ─────────────────────────────────────────────────────────

const PLACEHOLDER_ITEMS: GalleryItem[] = [
  // VIDEO ITEM FIRST — always visible at the top of the All filter
  {
    id: 16n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/videos/teja-controls-video.mp4",
    videoUrl: "/assets/videos/teja-controls-video.mp4",
    title: "Control Panel Tour",
    projectType: "Video Tour",
    isVideo: true,
    description: "Walkthrough of our control panel manufacturing facility",
  },
  {
    id: 1n,
    category: GalleryCategory.riceMills,
    imageUrl: "/assets/generated/gallery-rice-mill-panel.jpg",
    title: "Rice Mill Automation Panel",
    projectType: "PLC Panel",
  },
  {
    id: 2n,
    category: GalleryCategory.flourMills,
    imageUrl: "/assets/generated/gallery-flour-mill-mcc.jpg",
    title: "Flour Mill MCC Panel",
    projectType: "MCC Panel",
  },
  {
    id: 3n,
    category: GalleryCategory.dalMills,
    imageUrl: "/assets/generated/gallery-dal-mill-scada.jpg",
    title: "Dal Mill SCADA Installation",
    projectType: "SCADA System",
  },
  {
    id: 4n,
    category: GalleryCategory.electricalPanels,
    imageUrl: "/assets/generated/gallery-vfd-panel.jpg",
    title: "VFD Drive Panel Assembly",
    projectType: "VFD Panel",
  },
  {
    id: 5n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/generated/gallery-installation.jpg",
    title: "Site Commissioning — Food Plant",
    projectType: "Installation",
  },
  {
    id: 6n,
    category: GalleryCategory.electricalPanels,
    imageUrl: "/assets/generated/gallery-apfc-panel.jpg",
    title: "APFC Power Factor Panel",
    projectType: "APFC Panel",
  },
  {
    id: 7n,
    category: GalleryCategory.riceMills,
    imageUrl: "/assets/generated/gallery-rice-plc.jpg",
    title: "Rice Mill PLC Programming",
    projectType: "PLC Panel",
  },
  {
    id: 8n,
    category: GalleryCategory.installationProjects,
    imageUrl: "/assets/generated/gallery-feed-mill.jpg",
    title: "Feed Mill Control System",
    projectType: "Installation",
  },
  {
    id: 9n,
    category: GalleryCategory.flourMills,
    imageUrl: "/assets/generated/gallery-automation-panel.jpg",
    title: "Flour Mill Automation Panel",
    projectType: "Automation Panel",
  },
];

// ─── Category colours & gradient palettes ────────────────────────────────────

type FilterCategory = "all" | GalleryCategory;

interface FilterTab {
  label: string;
  value: FilterCategory;
}

const FILTER_TABS: FilterTab[] = [
  { label: "All", value: "all" },
  { label: "Rice Mills", value: GalleryCategory.riceMills },
  { label: "Flour Mills", value: GalleryCategory.flourMills },
  { label: "Dal Mills", value: GalleryCategory.dalMills },
  { label: "Electrical Panels", value: GalleryCategory.electricalPanels },
  { label: "Installation", value: GalleryCategory.installationProjects },
];

const CATEGORY_META: Record<
  GalleryCategory,
  { label: string; gradient: string }
> = {
  [GalleryCategory.riceMills]: {
    label: "Rice Mills",
    gradient: "from-primary/70 via-primary/40 to-secondary/20",
  },
  [GalleryCategory.flourMills]: {
    label: "Flour Mills",
    gradient: "from-secondary/70 via-secondary/50 to-accent/30",
  },
  [GalleryCategory.dalMills]: {
    label: "Dal Mills",
    gradient: "from-accent/70 via-accent/40 to-muted/20",
  },
  [GalleryCategory.electricalPanels]: {
    label: "Electrical Panels",
    gradient: "from-foreground/70 via-foreground/40 to-muted/20",
  },
  [GalleryCategory.installationProjects]: {
    label: "Installation",
    gradient: "from-secondary/60 via-primary/30 to-muted/20",
  },
};

const CATEGORY_BADGE_CLASS: Record<GalleryCategory, string> = {
  [GalleryCategory.riceMills]: "bg-primary/15 text-primary border-primary/25",
  [GalleryCategory.flourMills]:
    "bg-secondary/20 text-secondary border-secondary/30",
  [GalleryCategory.dalMills]:
    "bg-accent/20 text-accent-foreground border-accent/30",
  [GalleryCategory.electricalPanels]:
    "bg-muted text-muted-foreground border-border",
  [GalleryCategory.installationProjects]:
    "bg-primary/10 text-primary/80 border-primary/20",
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
  "sk-i",
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function GalleryCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden bg-card border border-border shadow-sm">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onClick: (item: GalleryItem) => void;
}

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  const meta = CATEGORY_META[item.category];
  const badgeClass = CATEGORY_BADGE_CLASS[item.category];
  const hasImage = !!item.imageUrl;

  if (item.isVideo) {
    return (
      <button
        type="button"
        data-ocid={`gallery.item.${index + 1}`}
        onClick={() => onClick(item)}
        className="group relative rounded-xl overflow-hidden bg-primary border-2 border-secondary
                   ring-2 ring-secondary/30 shadow-lg hover:shadow-2xl hover:ring-secondary/60
                   transition-all duration-300 focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-ring text-left w-full col-span-1"
      >
        {/* Featured top banner */}
        <div className="bg-secondary text-white text-xs font-body font-bold text-center py-2 tracking-widest uppercase flex items-center justify-center gap-1.5">
          <Play size={12} className="fill-white" />
          Featured Video Tour
        </div>
        {/* Video area */}
        <div className="relative aspect-video overflow-hidden bg-primary">
          <video
            src={item.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-50 transition-smooth group-hover:scale-105 group-hover:opacity-70"
          />
          {/* Large play button — always visible, centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="bg-secondary/90 group-hover:bg-secondary rounded-full p-7 shadow-2xl transition-all duration-300 group-hover:scale-110">
              <Play size={52} className="text-white fill-white ml-2" />
            </div>
            <span className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-display font-semibold px-6 py-2 rounded-full tracking-wide">
              Click to Watch
            </span>
          </div>
          {/* WATCH badge top-right */}
          <div className="absolute top-3 right-3">
            <span className="bg-secondary text-white text-xs font-display font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5">
              <Play size={10} className="fill-white" /> WATCH
            </span>
          </div>
        </div>
        {/* Video footer */}
        <div className="px-4 py-3.5 bg-primary/95">
          <p className="font-display font-bold text-white text-base leading-snug">
            {item.title}
          </p>
          <p className="text-white/60 text-xs font-body mt-1">
            {item.description ?? item.projectType}
          </p>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      data-ocid={`gallery.item.${index + 1}`}
      onClick={() => onClick(item)}
      className="group relative rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm
                 hover:shadow-lg transition-shadow focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-ring text-left w-full"
    >
      {/* Image / placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasImage ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${meta.gradient} flex items-end justify-end p-3
                        transition-smooth group-hover:opacity-90`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_rgba(255,255,255,0.08)_0%,transparent_70%)]" />
          </div>
        )}
        {/* Hover zoom icon */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                        transition-smooth bg-foreground/10 backdrop-blur-[2px]"
        >
          <div className="bg-card/90 rounded-full p-2.5 shadow-lg">
            <ZoomIn className="w-5 h-5 text-foreground" />
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-3.5 space-y-1.5">
        <Badge
          variant="outline"
          className={`text-xs font-body font-medium ${badgeClass}`}
        >
          {meta.label}
        </Badge>
        <p className="text-sm font-body text-muted-foreground line-clamp-2 leading-relaxed">
          {item.title}
        </p>
      </div>
    </button>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  const meta = CATEGORY_META[item.category];
  const badgeClass = CATEGORY_BADGE_CLASS[item.category];
  const hasImage = !!item.imageUrl;

  return (
    <dialog
      data-ocid="gallery.dialog"
      open
      aria-label="Gallery image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
                 bg-foreground/70 backdrop-blur-md w-full max-w-none h-full max-h-none m-0
                 border-0 bg-transparent"
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border
                   max-w-3xl w-full max-h-[90vh] flex flex-col"
      >
        {/* Close button */}
        <button
          type="button"
          data-ocid="gallery.close_button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 z-10 bg-card/80 hover:bg-card rounded-full p-2
                     shadow-md transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Image area */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          {item.isVideo ? (
            <video
              src={item.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain max-h-[65vh]"
            >
              <track kind="captions" src="" label="No captions available" />
            </video>
          ) : hasImage ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-contain max-h-[65vh]"
            />
          ) : (
            <div
              className={`w-full bg-gradient-to-br ${meta.gradient} flex items-center justify-center`}
              style={{ minHeight: "340px" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              <Images className="w-16 h-16 text-card/40 relative z-10" />
            </div>
          )}
        </div>

        {/* Caption bar */}
        <div className="px-6 py-4 border-t border-border bg-card flex items-start gap-3">
          <Badge
            variant="outline"
            className={`text-xs font-body font-medium flex-shrink-0 ${badgeClass}`}
          >
            {meta.label}
          </Badge>
          <p className="text-sm sm:text-base font-body text-foreground/80 leading-relaxed">
            {item.title} — {item.projectType}
          </p>
        </div>
      </div>
    </dialog>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Fetch all items from backend; fall back to placeholders
  const { data: allItems = [], isLoading } = useGetGalleryItems();

  // Sort so videos always appear first, then keep original order
  const rawItems = allItems.length > 0 ? allItems : PLACEHOLDER_ITEMS;
  const items: GalleryItem[] = [...rawItems].sort((a, b) =>
    a.isVideo === b.isVideo ? 0 : a.isVideo ? -1 : 1,
  );

  const filtered =
    activeFilter === "all"
      ? items
      : items.filter((i) => i.category === activeFilter);

  const openLightbox = useCallback((item: GalleryItem) => {
    setLightboxItem(item);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "340px" }}
        data-ocid="gallery.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/gallery-hero.dim_1600x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/40 to-background/80" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-28 sm:py-36">
          <p className="font-display text-secondary/90 text-sm sm:text-base uppercase tracking-widest mb-3 font-semibold drop-shadow">
            Heartland Farms
          </p>
          <h1 className="text-premium-display text-card drop-shadow-lg max-w-2xl">
            Life on the Farm
          </h1>
          <p className="mt-5 font-body text-card/80 text-lg sm:text-xl max-w-xl leading-relaxed drop-shadow">
            Every frame tells a story — of soil, seasons, and the people who
            tend this land with heart.
          </p>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <section className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex gap-1 overflow-x-auto py-3 scrollbar-none"
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.value}
                data-ocid={`gallery.filter.${tab.value}`}
                onClick={() => setActiveFilter(tab.value)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-body font-medium transition-smooth
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${
                    activeFilter === tab.value
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SKELETON_KEYS.map((key) => (
              <GalleryCardSkeleton key={key} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            data-ocid="gallery.empty_state"
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Images className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="font-display text-xl text-foreground mb-1">
              No images yet
            </p>
            <p className="font-body text-muted-foreground text-sm">
              Check back soon — we're adding new memories regularly.
            </p>
          </div>
        ) : (
          <>
            {/* Item count */}
            <p className="font-body text-muted-foreground text-sm mb-6">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "item" : "items"}
              {activeFilter !== "all" && (
                <>
                  {" "}
                  in <span className="capitalize">{activeFilter}</span>
                </>
              )}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((item, index) => (
                <GalleryCard
                  key={String(item.id)}
                  item={item}
                  index={index}
                  onClick={openLightbox}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── Lightbox ── */}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} />}
    </div>
  );
}
