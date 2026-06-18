import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { GalleryCategory } from "../types";
import type { BlogPost, ContactForm, GalleryItem } from "../types";

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

export function useGetGalleryItems() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["galleryItems", "all"],
    queryFn: async () => {
      if (!actor) return [];
      const items = await actor.getGalleryItems();
      // The backend GalleryItem type doesn't carry videoUrl/isVideo.
      // We detect video items by their imageUrl extension and enrich them.
      return items.map((item) => {
        const url = item.imageUrl ?? "";
        const isVid =
          /\.(mp4|webm|ogg|mov)$/i.test(url) ||
          ("isVideo" in item && Boolean((item as GalleryItem).isVideo));
        return isVid
          ? { ...item, isVideo: true, videoUrl: url }
          : (item as GalleryItem);
      });
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGalleryItemsByCategory(category: GalleryCategory) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["galleryItems", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItemsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (form: ContactForm) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContact(
        form.name,
        form.company,
        form.phone,
        form.email,
        form.industry,
        form.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
