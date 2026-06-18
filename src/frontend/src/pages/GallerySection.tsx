import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Play, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { useGetGalleryItems } from "../hooks/useQueries";
import type { GalleryItem } from "../types";
import { GalleryCategory } from "../types";

// ── Fallback hardcoded industrial gallery items ─────────────────────────────
// VIDEO ITEM is FIRST so it is always visible at the top of the homepage gallery
const FALLBACK_ITEMS: GalleryItem[] = [
  {
    id: 16n,
    title: "Control Panel Tour",
    category: GalleryCategory.installationProjects,
    projectType: "Video Tour",
    imageUrl: "/assets/videos/teja-controls-video.mp4",
    videoUrl: "/assets/videos/teja-controls-video.mp4",
    isVideo: true,
    description: "Walkthrough of our control panel manufacturing facility",
  },
  {
    id: 1n,
    title: "Rice Mill PLC Control Panel",
    category: GalleryCategory.riceMills,
    projectType: "PLC Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: 2n,
    title: "Flour Mill MCC Panel Installation",
    category: GalleryCategory.flourMills,
    projectType: "MCC Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 3n,
    title: "Dal Mill SCADA System",
    category: GalleryCategory.dalMills,
    projectType: "SCADA",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    id: 4n,
    title: "VFD Panel Assembly",
    category: GalleryCategory.electricalPanels,
    projectType: "VFD Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
  {
    id: 5n,
    title: "Rice Mill Automation Project",
    category: GalleryCategory.riceMills,
    projectType: "Full Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
  },
  {
    id: 6n,
    title: "Electrical Panel Wiring",
    category: GalleryCategory.electricalPanels,
    projectType: "Control Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 7n,
    title: "Site Installation — Feed Mill",
    category: GalleryCategory.installationProjects,
    projectType: "Installation",
    imageUrl:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
  },
  {
    id: 8n,
    title: "PCC Panel — Flour Mill",
    category: GalleryCategory.flourMills,
    projectType: "PCC Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
  },
  {
    id: 9n,
    title: "HMI Integration — Dal Mill",
    category: GalleryCategory.dalMills,
    projectType: "HMI",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    id: 10n,
    title: "APFC Panel Manufacturing",
    category: GalleryCategory.electricalPanels,
    projectType: "APFC Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    id: 11n,
    title: "Commissioning — Rice Mill",
    category: GalleryCategory.installationProjects,
    projectType: "Commissioning",
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    id: 12n,
    title: "Automation Panel Design",
    category: GalleryCategory.electricalPanels,
    projectType: "Automation Panel",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    id: 13n,
    title: "Factory Floor Installation",
    category: GalleryCategory.installationProjects,
    projectType: "Installation",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: 14n,
    title: "Control Desk — Feed Mill",
    category: GalleryCategory.installationProjects,
    projectType: "Control Desk",
    imageUrl:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
  },
  {
    id: 15n,
    title: "Flour Mill Full Automation",
    category: GalleryCategory.flourMills,
    projectType: "Full Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

type FilterTab = "all" | GalleryCategory;

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: GalleryCategory.riceMills, label: "Rice Mills" },
  { key: GalleryCategory.flourMills, label: "Flour Mills" },
  { key: GalleryCategory.dalMills, label: "Dal Mills" },
  { key: GalleryCategory.electricalPanels, label: "Electrical Panels" },
  { key: GalleryCategory.installationProjects, label: "Installation Projects" },
];

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  [GalleryCategory.riceMills]: "Rice Mills",
  [GalleryCategory.flourMills]: "Flour Mills",
  [GalleryCategory.dalMills]: "Dal Mills",
  [GalleryCategory.electricalPanels]: "Electrical Panels",
  [GalleryCategory.installationProjects]: "Installation Projects",
};

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
        data-ocid="gallery.lightbox"
        aria-modal="true"
        aria-label={`Gallery lightbox: ${item.title}`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          data-ocid="gallery.close_button"
          aria-label="Close lightbox"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-smooth z-10"
        >
          <X size={20} />
        </button>

        {/* Prev */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          data-ocid="gallery.prev_button"
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-smooth z-10"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          data-ocid="gallery.next_button"
          aria-label="Next image"
          className="absolute right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-smooth z-10"
        >
          <ChevronRight size={22} />
        </button>

        {/* Image + info */}
        <motion.div
          key={index}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="max-w-4xl w-full flex flex-col items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {item.isVideo ? (
            <video
              src={item.videoUrl}
              controls
              autoPlay
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
            >
              <track kind="captions" src="" label="No captions available" />
            </video>
          ) : (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full max-h-[70vh] object-cover rounded-xl shadow-2xl"
            />
          )}
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="font-display text-xl font-semibold text-white">
              {item.title}
            </h3>
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary/80 text-white border-0 text-xs">
                {CATEGORY_LABELS[item.category]}
              </Badge>
              <span className="text-white/60 text-xs font-body">
                {item.projectType}
              </span>
            </div>
            <span className="text-white/40 text-xs font-body">
              {index + 1} / {items.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Gallery Card ──────────────────────────────────────────────────────────────
function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      data-ocid={`gallery.item.${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      className={`relative group overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-4 shadow-sm hover:shadow-xl transition-shadow ${
        item.isVideo
          ? "bg-primary border-2 border-secondary ring-2 ring-secondary/30"
          : "bg-white border border-gray-200"
      }`}
      onClick={onClick}
    >
      {item.isVideo ? (
        <div
          className="relative w-full bg-primary"
          style={{ minHeight: "260px" }}
        >
          <video
            src={item.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
            style={{ display: "block", minHeight: "260px" }}
          />
          {/* Large prominent play button overlay — always visible */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-3">
            <div className="bg-secondary/90 rounded-full p-6 shadow-2xl group-hover:bg-secondary transition-colors duration-300 group-hover:scale-110 transform">
              <Play size={44} className="text-white fill-white ml-1.5" />
            </div>
            <span className="bg-secondary text-white text-sm font-display font-bold px-5 py-1.5 rounded-full tracking-wider shadow-lg uppercase">
              ▶ WATCH VIDEO
            </span>
          </div>
          {/* FEATURED banner top */}
          <div className="absolute top-0 left-0 right-0 bg-secondary/90 text-white text-xs font-body font-bold text-center py-1.5 tracking-widest uppercase">
            📹 Featured Video Tour
          </div>
        </div>
      ) : (
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ display: "block" }}
        />
      )}
      {/* Hover overlay (images only) */}
      {!item.isVideo && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-4">
          <Badge className="mb-2 w-fit bg-secondary/90 text-white border-0 text-xs">
            {CATEGORY_LABELS[item.category]}
          </Badge>
          <p className="font-display font-semibold text-white text-sm leading-snug line-clamp-2">
            {item.title}
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs font-body">
            <ZoomIn size={12} />
            <span>View Full</span>
          </div>
        </div>
      )}
      {/* Video card footer */}
      {item.isVideo && (
        <div className="px-4 py-3 bg-primary/95 border-t border-secondary/30">
          <p className="font-display font-semibold text-white text-sm leading-snug">
            {item.title}
          </p>
          <p className="text-white/60 text-xs font-body mt-0.5">
            {item.description ?? item.projectType}
          </p>
        </div>
      )}
    </motion.div>
  );
}

// ── Skeleton grid ─────────────────────────────────────────────────────────────
const SKEL_KEYS = [
  "gs-a",
  "gs-b",
  "gs-c",
  "gs-d",
  "gs-e",
  "gs-f",
  "gs-g",
  "gs-h",
  "gs-i",
];
const SKEL_HEIGHTS = [180, 240, 300, 240, 180, 300, 240, 300, 180];

function GallerySkeleton() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {SKEL_KEYS.map((k, i) => (
        <Skeleton
          key={k}
          className="w-full mb-4 rounded-xl"
          style={{ height: `${SKEL_HEIGHTS[i]}px` }}
        />
      ))}
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export function GallerySection() {
  const { data: backendItems, isLoading } = useGetGalleryItems();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sort items so the video always appears first regardless of backend ordering
  const rawItems =
    backendItems && backendItems.length > 0 ? backendItems : FALLBACK_ITEMS;
  const allItems = [...rawItems].sort((a, b) =>
    a.isVideo === b.isVideo ? 0 : a.isVideo ? -1 : 1,
  );

  const filtered =
    activeFilter === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const gotoPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null,
    );
  }, [filtered.length]);

  const gotoNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="bg-background py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Real projects, real results — control panels, SCADA systems, and
            automation solutions delivered across India.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          data-ocid="gallery.filter_tabs"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTER_TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              data-ocid={`gallery.filter.${key}`}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium border transition-smooth ${
                activeFilter === key
                  ? "bg-secondary text-white border-secondary shadow-md"
                  : "bg-card border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div data-ocid="gallery.loading_state">
            <GallerySkeleton />
          </div>
        ) : filtered.length === 0 ? (
          <div
            data-ocid="gallery.empty_state"
            className="text-center py-20 text-muted-foreground font-body"
          >
            No projects found in this category.
          </div>
        ) : (
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <GalleryCard
                  key={String(item.id)}
                  item={item}
                  index={i}
                  onClick={() => openLightbox(i)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button
            type="button"
            variant="outline"
            data-ocid="gallery.view_all_button"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white font-body font-semibold px-8 py-3 text-base transition-smooth"
            onClick={() => setActiveFilter("all")}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={gotoPrev}
          onNext={gotoNext}
        />
      )}
    </section>
  );
}
