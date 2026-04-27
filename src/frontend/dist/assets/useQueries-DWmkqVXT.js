import "./index-B_yqDsmv.js";
import { u as useQuery, a as useActor, c as createActor } from "./backend-CN5Y_TMj.js";
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
function useGetGalleryItems(category) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["galleryItems", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching
  });
}
export {
  useGetBlogPosts as a,
  useGetBlogPost as b,
  useGetGalleryItems as u
};
