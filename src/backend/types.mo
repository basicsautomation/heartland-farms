module {
  public type BlogPost = {
    id : Nat;
    title : Text;
    excerpt : Text;
    content : Text;
    date : Int;
    author : Text;
    slug : Text;
    category : Text;
    readTime : Text;
  };

  public type GalleryCategory = {
    #riceMills;
    #flourMills;
    #dalMills;
    #electricalPanels;
    #installationProjects;
  };

  public type GalleryItem = {
    id : Nat;
    imageUrl : Text;
    title : Text;
    category : GalleryCategory;
    projectType : Text;
    videoUrl : ?Text;
    isVideo : ?Bool;
  };

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    company : Text;
    phone : Text;
    email : Text;
    industry : Text;
    message : Text;
    timestamp : Int;
  };
};
