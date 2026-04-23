import Types "../types";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func seed(posts : List.List<Types.BlogPost>, nextId : Nat) : Nat {
    let now = Time.now();
    let samples : [(Text, Text, Text, Text, Text)] = [
      (
        "Why I Left Corporate Life for the Farm",
        "After years at Siemens, I made the leap that changed everything. Here's the story of how I traded my engineering desk for fertile Vijayapura soil.",
        "After more than a decade working as an engineer at Siemens, I found myself at a crossroads. The corporate world had given me discipline, systems thinking, and a comfortable life — but something was missing. The land my family owned in Vijayapura had been calling to me for years.\n\nI remember the exact moment the decision crystallised. It was a Monday morning, stuck in a meeting about quarterly targets, when I thought: what if I applied this same systems thinking to farming? What if agriculture could be approached with the precision and innovation of engineering?\n\nThat question launched everything. I spent six months researching, visiting farms, talking to agronomists. Then I resigned, moved back home, and Heartland Farms was born.\n\nThe first season was humbling. Farming has rhythms that no spreadsheet can fully capture. But the engineering mindset helped — I set up soil monitoring, optimised irrigation schedules, and treated each crop cycle like a product iteration.\n\nToday, I can honestly say it is the most meaningful work I have ever done.",
        "2024-03-15",
        "why-i-left-corporate-life"
      ),
      (
        "Farming as a Business: Numbers That Actually Work",
        "Sustainable agriculture doesn't mean sacrificing profitability. Learn how integrated farming across multiple crops can build a resilient and profitable enterprise.",
        "One of the biggest myths I encountered when I transitioned to farming was that sustainable agriculture and profitability are at odds. They are not — but you have to be intentional.\n\nAt Heartland Farms, we grow across multiple crops: grapes, pomegranates, cereals, and vegetables. This diversification is not just ecological wisdom — it is sound business strategy. If one crop underperforms due to weather or market fluctuations, others compensate.\n\nOur grape cultivation, particularly the varieties suited to Vijayapura's unique climate, has become our premium revenue stream. But the supporting crops keep cash flowing year-round and maintain soil health naturally.\n\nThe key metrics I track every season: cost per acre, yield per variety, market timing, and input efficiency. Engineering trained me to measure everything. Farming rewards that habit.\n\nThe result? Heartland Farms has been profitable since year two, and we have reinvested consistently into soil health, water conservation, and equipment that reduces manual labour.",
        "2024-05-22",
        "farming-as-a-business"
      ),
      (
        "Grape Cultivation Insights from Vijayapura",
        "Vijayapura's unique climate and soil make it one of India's premier grape-growing regions. Here's what we've learned after three full harvest cycles.",
        "Vijayapura district sits at the perfect latitude for grape cultivation. The semi-arid climate, with its dry summers and mild winters, mimics conditions found in renowned wine regions worldwide. Yet Indian table grape varieties are uniquely adapted to thrive here.\n\nAt Heartland Farms, we grow primarily Thompson Seedless and Flame Seedless varieties, along with experimental plots of newer hybrids. Each variety demands slightly different care — pruning schedules, irrigation timing, canopy management.\n\nWhat we've learned after three harvests:\n\nSoil preparation is everything. The calcium-rich black cotton soil of Vijayapura is excellent but needs organic matter. Our composting programme has measurably improved Brix levels in our fruit.\n\nWater is the limiting factor. We run drip irrigation at dawn, avoiding midday heat and leaf moisture that invites fungal disease. Sensors alert us to soil moisture levels before stress sets in.\n\nPruning timing shapes the entire season. We've fine-tuned our double-pruning schedule to align with monsoon patterns and market windows.\n\nThe result is consistent, high-quality fruit that we are proud to bring to market each season.",
        "2024-07-10",
        "grape-cultivation-vijayapura"
      ),
      (
        "Sustainable Agriculture: Practices We Live By",
        "Sustainability is not a marketing term for us — it's operational philosophy. From water conservation to biodiversity, here's how we build a farm that lasts.",
        "When people hear 'sustainable agriculture,' they often think of niche organic markets or anti-technology idealism. At Heartland Farms, sustainability means something simpler and more rigorous: farming in a way that can continue indefinitely without degrading the land.\n\nOur core practices:\n\nZero synthetic pesticide approach: We use integrated pest management — beneficial insects, pheromone traps, and targeted biological controls. It requires more knowledge but results in healthier soil microbiology.\n\nWater efficiency: Every drop is measured. Drip irrigation, mulching to reduce evaporation, and rainwater harvesting from our shed roofs have cut our water use by nearly 40% compared to conventional neighbours.\n\nSoil health as the foundation: We run cover crops in the off-season, add vermicompost, and test soil every six months. Healthy soil grows healthy plants that resist pests and disease naturally.\n\nBiodiversity buffers: The borders of our farm are planted with native trees and flowering plants. They attract pollinators, provide windbreaks, and make the farm a living ecosystem rather than a monoculture.\n\nThese practices cost more in attention and planning upfront — but they compound over time. Our input costs have dropped each year as the land grows more resilient.",
        "2024-09-05",
        "sustainable-agriculture-practices"
      ),
    ];

    var id = nextId;
    for ((title, excerpt, content, date, slug) in samples.vals()) {
      posts.add({
        id;
        title;
        excerpt;
        content;
        date = now;
        author = "Gurupad MS";
        slug;
      });
      id += 1;
    };
    id;
  };

  public func getAll(posts : List.List<Types.BlogPost>) : [Types.BlogPost] {
    posts.toArray();
  };

  public func getBySlug(posts : List.List<Types.BlogPost>, slug : Text) : ?Types.BlogPost {
    posts.find(func(p) { p.slug == slug });
  };
};
