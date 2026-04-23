import type { backendInterface, BlogPost, GalleryItem, GalleryCategory } from "../backend";

export const mockBackend: backendInterface = {
  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    const posts: BlogPost[] = [
      {
        id: BigInt(1),
        title: "From Corporate Life to the Farm: My Journey",
        content: "After years working at Siemens as an engineer, I decided to follow my heart back to the land. Heartland Farms was born from a vision of integrated, sustainable agriculture that honors tradition while embracing modern innovation. The transition wasn't easy, but every sunrise over our vineyards reminds me it was worth it.",
        date: BigInt(1714089600000),
        slug: "from-corporate-to-farm",
        author: "Gurupad MS",
        excerpt: "How a Siemens engineer left it all behind to cultivate something truly meaningful.",
      },
      {
        id: BigInt(2),
        title: "The Art of Vijayapura Grape Cultivation",
        content: "Vijayapura's unique climate and soil composition create the perfect conditions for growing exceptional grapes. Our regenerative viticulture practices restore soil health while producing premium quality fruit for local and regional markets.",
        date: BigInt(1711411200000),
        slug: "vijayapura-grape-cultivation",
        author: "Gurupad MS",
        excerpt: "Exploring the unique terroir of Vijayapura and what makes our grapes exceptional.",
      },
    ];
    return posts.find((p) => p.slug === slug) ?? null;
  },
  getBlogPosts: async (): Promise<Array<BlogPost>> => [
    {
      id: BigInt(1),
      title: "From Corporate Life to the Farm: My Journey",
      content: "After years working at Siemens as an engineer, I decided to follow my heart back to the land.",
      date: BigInt(1714089600000),
      slug: "from-corporate-to-farm",
      author: "Gurupad MS",
      excerpt: "How a Siemens engineer left it all behind to cultivate something truly meaningful.",
    },
    {
      id: BigInt(2),
      title: "The Art of Vijayapura Grape Cultivation",
      content: "Vijayapura's unique climate and soil composition create the perfect conditions for growing exceptional grapes.",
      date: BigInt(1711411200000),
      slug: "vijayapura-grape-cultivation",
      author: "Gurupad MS",
      excerpt: "Exploring the unique terroir of Vijayapura and what makes our grapes exceptional.",
    },
    {
      id: BigInt(3),
      title: "Integrated Farming: Growing More with Less",
      content: "Our integrated farming approach combines traditional wisdom with modern techniques to maximize yield while minimizing environmental impact.",
      date: BigInt(1708732800000),
      slug: "integrated-farming-approach",
      author: "Gurupad MS",
      excerpt: "How our multi-crop system creates a resilient and profitable farm ecosystem.",
    },
  ],
  getContactSubmissionCount: async (): Promise<bigint> => BigInt(42),
  getGalleryItems: async (): Promise<Array<GalleryItem>> => [
    {
      id: BigInt(1),
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      caption: "Regenerative Viticulture",
      category: "vineyard" as unknown as GalleryCategory,
    },
    {
      id: BigInt(2),
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
      caption: "Fresh Organic Vegetables",
      category: "farm" as unknown as GalleryCategory,
    },
    {
      id: BigInt(3),
      imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
      caption: "Farmer's Organic Hands",
      category: "journey" as unknown as GalleryCategory,
    },
    {
      id: BigInt(4),
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      caption: "Landscape of the Farm",
      category: "farm" as unknown as GalleryCategory,
    },
    {
      id: BigInt(5),
      imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
      caption: "Farmworkers in the Fields",
      category: "lifestyle" as unknown as GalleryCategory,
    },
    {
      id: BigInt(6),
      imageUrl: "https://images.unsplash.com/photo-1615485291234-9d694218aeb0?w=800",
      caption: "Farmer Soil Health and Compost",
      category: "journey" as unknown as GalleryCategory,
    },
  ],
  getGalleryItemsByCategory: async (category: GalleryCategory): Promise<Array<GalleryItem>> => {
    const allItems: GalleryItem[] = [
      {
        id: BigInt(1),
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        caption: "Regenerative Viticulture",
        category: "vineyard" as unknown as GalleryCategory,
      },
      {
        id: BigInt(4),
        imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
        caption: "Landscape of the Farm",
        category: "farm" as unknown as GalleryCategory,
      },
    ];
    return allItems.filter((item) => item.category === category);
  },
  submitContact: async (name: string, email: string, message: string, phone: string | null): Promise<bigint> => BigInt(43),
};
