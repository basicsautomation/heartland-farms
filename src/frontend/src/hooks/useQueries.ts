import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { BlogPost, GalleryItem } from "../types";
import { GalleryCategory } from "../types";

function useBackendActor() {
  return useActor(createActor);
}

export function useGetBlogPosts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBlogPost(slug: string) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<BlogPost | null>({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBlogPost(slug);
    },
    enabled: !!actor && !isFetching && !!slug,
  });
}

export function useGetGalleryItems(category?: GalleryCategory) {
  const { actor, isFetching } = useBackendActor();
  const isFiltered = category !== undefined && category !== null;
  return useQuery<GalleryItem[]>({
    queryKey: ["galleryItems", isFiltered ? (category as string) : "all"],
    queryFn: async () => {
      if (!actor) return [];
      if (isFiltered) {
        return actor.getGalleryItemsByCategory(category as GalleryCategory);
      }
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export { GalleryCategory };
