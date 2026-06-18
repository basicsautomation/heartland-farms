import Types "../types";
import List "mo:core/List";

module {
  public func seed(items : List.List<Types.GalleryItem>, nextId : Nat) : Nat {
    let samples : [(Text, Text, Types.GalleryCategory, Text)] = [
      // Rice Mills (3)
      ("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800", "Rice Mill PLC Automation Panel", #riceMills, "PLC Panel"),
      ("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", "Rice Mill SCADA Control Room", #riceMills, "SCADA System"),
      ("https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800", "Rice Mill Motor Control Centre", #riceMills, "MCC Panel"),
      // Flour Mills (3)
      ("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", "Flour Mill Automation Panel", #flourMills, "PLC Panel"),
      ("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800", "Flour Mill VFD Drive Panel", #flourMills, "VFD Panel"),
      ("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", "Flour Mill Process Control System", #flourMills, "SCADA System"),
      // Dal Mills (3)
      ("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", "Dal Mill Main Control Panel", #dalMills, "PCC Panel"),
      ("https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800", "Dal Mill HMI Operator Panel", #dalMills, "HMI Panel"),
      ("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800", "Dal Mill VFD Drive Cabinet", #dalMills, "VFD Panel"),
      // Electrical Panels (3)
      ("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", "Custom MCC Panel 800A Feeder", #electricalPanels, "MCC Panel"),
      ("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", "PCC Main Distribution Board", #electricalPanels, "PCC Panel"),
      ("https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800", "APFC Power Factor Correction Panel", #electricalPanels, "APFC Panel"),
      // Installation Projects (3)
      ("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800", "On-site Panel Installation", #installationProjects, "Electrical Installation"),
      ("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", "Factory Commissioning & Testing", #installationProjects, "Commissioning"),
      ("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", "Cable Tray and Wiring Installation", #installationProjects, "Electrical Installation"),
    ];

    var id = nextId;
    for ((imageUrl, title, category, projectType) in samples.vals()) {
      items.add({ id; imageUrl; title; category; projectType; videoUrl = null; isVideo = null });
      id += 1;
    };
    // Video gallery item
    items.add({
      id;
      imageUrl = "/assets/videos/teja-controls-video.mp4";
      title = "Control Panel Tour";
      category = #installationProjects;
      projectType = "Installation Projects";
      videoUrl = ?("/assets/videos/teja-controls-video.mp4");
      isVideo = ?(true);
    });
    id + 1;
  };

  public func getAll(items : List.List<Types.GalleryItem>) : [Types.GalleryItem] {
    items.toArray();
  };

  public func getByCategory(items : List.List<Types.GalleryItem>, category : Types.GalleryCategory) : [Types.GalleryItem] {
    items.filter(func(item) {
      switch (item.category, category) {
        case (#riceMills, #riceMills) true;
        case (#flourMills, #flourMills) true;
        case (#dalMills, #dalMills) true;
        case (#electricalPanels, #electricalPanels) true;
        case (#installationProjects, #installationProjects) true;
        case _ false;
      };
    }).toArray();
  };
};
