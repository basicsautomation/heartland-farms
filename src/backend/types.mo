module {
  public type BlogPost = {
    id : Nat;
    title : Text;
    excerpt : Text;
    content : Text;
    date : Int;
    author : Text;
    slug : Text;
  };

  public type GalleryCategory = {
    #farm;
    #vineyard;
    #lifestyle;
    #journey;
  };

  public type GalleryItem = {
    id : Nat;
    imageUrl : Text;
    caption : Text;
    category : GalleryCategory;
  };

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    phone : ?Text;
    timestamp : Int;
  };
};
