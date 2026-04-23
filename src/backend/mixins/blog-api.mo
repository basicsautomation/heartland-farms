import Types "../types";
import BlogLib "../lib/Blog";
import List "mo:core/List";

mixin (
  posts : List.List<Types.BlogPost>,
) {
  public query func getBlogPosts() : async [Types.BlogPost] {
    BlogLib.getAll(posts);
  };

  public query func getBlogPost(slug : Text) : async ?Types.BlogPost {
    BlogLib.getBySlug(posts, slug);
  };
};
