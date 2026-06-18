import Types "types";
import BlogLib "lib/Blog";
import GalleryLib "lib/Gallery";
import List "mo:core/List";

import BlogApi "mixins/blog-api";
import GalleryApi "mixins/gallery-api";
import ContactApi "mixins/contact-api";





actor {
  let posts = List.empty<Types.BlogPost>();
  let galleryItems = List.empty<Types.GalleryItem>();
  let submissions = List.empty<Types.ContactSubmission>();
  let state = { var seeded = false };

  // Seed data once on first run
  if (not state.seeded) {
    ignore BlogLib.seed(posts, 0);
    ignore GalleryLib.seed(galleryItems, 0);
    state.seeded := true;
  };

  include BlogApi(posts);
  include GalleryApi(galleryItems);
  include ContactApi(submissions);
};
