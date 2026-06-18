import "./index-D6M-L3AT.js";
import { a as useQuery, u as useActor, c as createActor } from "./backend-D5qmZiZF.js";
function useBackendActor() {
  return useActor(createActor);
}
function useGetBlogPosts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBlogPosts();
    },
    enabled: !!actor && !isFetching
  });
}
function useGetBlogPost(slug) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBlogPost(slug);
    },
    enabled: !!actor && !isFetching && !!slug
  });
}
function useGetGalleryItems() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["galleryItems", "all"],
    queryFn: async () => {
      if (!actor) return [];
      const items = await actor.getGalleryItems();
      return items.map((item) => {
        const url = item.imageUrl ?? "";
        const isVid = /\.(mp4|webm|ogg|mov)$/i.test(url) || "isVideo" in item && Boolean(item.isVideo);
        return isVid ? { ...item, isVideo: true, videoUrl: url } : item;
      });
    },
    enabled: !!actor && !isFetching
  });
}
export {
  useGetBlogPosts as a,
  useGetBlogPost as b,
  useGetGalleryItems as u
};
