import Types "../types";
import List "mo:core/List";

module {
  public func seed(items : List.List<Types.GalleryItem>, nextId : Nat) : Nat {
    let samples : [(Text, Text, Types.GalleryCategory)] = [
      // Farm
      ("/images/gallery/farm-aerial.jpg", "Aerial view of Heartland Farms — 20 acres of integrated cultivation", #farm),
      ("/images/gallery/farm-soil.jpg", "Rich black cotton soil — the foundation of our productivity", #farm),
      ("/images/gallery/farm-irrigation.jpg", "Drip irrigation network running at dawn across the fields", #farm),
      // Vineyard
      ("/images/gallery/vineyard-rows.jpg", "Rows of Thompson Seedless vines in full leaf", #vineyard),
      ("/images/gallery/vineyard-harvest.jpg", "Harvest season — golden clusters ready for market", #vineyard),
      ("/images/gallery/vineyard-pruning.jpg", "Double pruning in action — precision timing for peak yield", #vineyard),
      // Lifestyle
      ("/images/gallery/lifestyle-morning.jpg", "Morning rounds — the best part of farming life", #lifestyle),
      ("/images/gallery/lifestyle-family.jpg", "Family at the farm — connecting generations to the land", #lifestyle),
      ("/images/gallery/lifestyle-sunset.jpg", "Vijayapura sunset over the farm — a reward no office can match", #lifestyle),
      // Journey
      ("/images/gallery/journey-siemens.jpg", "From engineering to agriculture — the desk I left behind", #journey),
      ("/images/gallery/journey-first-crop.jpg", "Our first harvest — humble beginnings, big lessons", #journey),
      ("/images/gallery/journey-team.jpg", "The team that makes Heartland Farms run every day", #journey),
      // Real farm photos
      ("/assets/images/gallery-farm-puja.png", "Farm puja ceremony — women in colorful sarees performing a traditional worship ritual at the farm shrine, celebrating the harvest season", #lifestyle),
      ("/assets/images/gallery-peacock-vineyard.png", "A peacock perched on a vineyard post overlooking lush green grape rows and red soil paths at Heartland Farms", #vineyard),
      ("/assets/images/gallery-boy-grapes.png", "Joy of the harvest — a young boy smiling and holding a fresh bunch of green grapes in the vineyard", #vineyard),
      ("/assets/images/gallery-grape-drying.png", "Grape drying facility at scale — dense clusters of green and golden grapes laid out on massive overhead racks to dry into raisins", #farm),
      ("/assets/images/gallery-boy-tomato.png", "Fresh from the farm — a young boy proudly holds a ripe tomato with coconut trees, granite pillars and drip irrigation in the background", #farm),
    ];

    var id = nextId;
    for ((imageUrl, caption, category) in samples.vals()) {
      items.add({ id; imageUrl; caption; category });
      id += 1;
    };
    id;
  };

  public func getAll(items : List.List<Types.GalleryItem>) : [Types.GalleryItem] {
    items.toArray();
  };

  public func getByCategory(items : List.List<Types.GalleryItem>, category : Types.GalleryCategory) : [Types.GalleryItem] {
    items.filter(func(item) {
      switch (item.category, category) {
        case (#farm, #farm) true;
        case (#vineyard, #vineyard) true;
        case (#lifestyle, #lifestyle) true;
        case (#journey, #journey) true;
        case _ false;
      };
    }).toArray();
  };
};
