import Types "../types";
import GalleryLib "../lib/Gallery";
import List "mo:core/List";

mixin (
  galleryItems : List.List<Types.GalleryItem>,
) {
  public query func getGalleryItems() : async [Types.GalleryItem] {
    GalleryLib.getAll(galleryItems);
  };

  public query func getGalleryItemsByCategory(category : Types.GalleryCategory) : async [Types.GalleryItem] {
    GalleryLib.getByCategory(galleryItems, category);
  };
};
