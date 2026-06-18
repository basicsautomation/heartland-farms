import { GalleryCategory } from "../types";
import type { backendInterface, BlogPost, GalleryItem } from "../backend";

export const mockBackend: backendInterface = {
  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    const posts: BlogPost[] = [
      {
        id: BigInt(1),
        title: "PLC Programming for Rice Mill Automation",
        content: "PLC-based automation transforms rice mill operations by providing precise control over every stage of processing, from cleaning through packaging.",
        date: BigInt(1714089600000),
        slug: "plc-programming-rice-mills",
        author: "Teja Controls Engineering Team",
        excerpt: "How programmable logic controllers streamline rice mill operations and reduce downtime.",
        readTime: "6 min read",
        category: "automation",
      },
      {
        id: BigInt(2),
        title: "SCADA Benefits for Food Processing Plants",
        content: "SCADA systems provide real-time visibility into every aspect of food processing, enabling better decisions and faster response to production issues.",
        date: BigInt(1711411200000),
        slug: "scada-benefits-food-processing",
        author: "Teja Controls Engineering Team",
        excerpt: "How SCADA implementation drives efficiency and quality in modern food processing facilities.",
        readTime: "7 min read",
        category: "scada",
      },
    ];
    return posts.find((p) => p.slug === slug) ?? null;
  },
  getBlogPosts: async (): Promise<Array<BlogPost>> => [
    {
      id: BigInt(1),
      title: "PLC Programming for Rice Mill Automation",
      content: "PLC-based automation transforms rice mill operations.",
      date: BigInt(1714089600000),
      slug: "plc-programming-rice-mills",
      author: "Teja Controls Engineering Team",
      excerpt: "How programmable logic controllers streamline rice mill operations and reduce downtime.",
      readTime: "6 min read",
      category: "automation",
    },
    {
      id: BigInt(2),
      title: "SCADA Benefits for Food Processing Plants",
      content: "SCADA systems provide real-time visibility into food processing.",
      date: BigInt(1711411200000),
      slug: "scada-benefits-food-processing",
      author: "Teja Controls Engineering Team",
      excerpt: "How SCADA implementation drives efficiency in modern food processing facilities.",
      readTime: "7 min read",
      category: "scada",
    },
    {
      id: BigInt(3),
      title: "MCC Panel Design Best Practices",
      content: "Motor control centres form the backbone of industrial power distribution.",
      date: BigInt(1708732800000),
      slug: "mcc-panel-design-best-practices",
      author: "Teja Controls Engineering Team",
      excerpt: "Key design principles for motor control centres in flour and dal mill applications.",
      readTime: "5 min read",
      category: "design",
    },
  ],
  getBlogPostsByCategory: async (category: string): Promise<Array<BlogPost>> => [],
  getContactSubmissionCount: async (): Promise<bigint> => BigInt(42),
  getGalleryCategories: async (): Promise<Array<string>> => [
    "riceMills", "flourMills", "dalMills", "electricalPanels", "installationProjects",
  ],
  getGalleryItems: async (): Promise<Array<GalleryItem>> => [
    {
      id: BigInt(1),
      imageUrl: "/assets/generated/gallery-rice-mill-panel.jpg",
      title: "Rice Mill Automation Panel",
      category: GalleryCategory.riceMills,
      projectType: "PLC Panel",
    },
    {
      id: BigInt(2),
      imageUrl: "/assets/generated/gallery-flour-mill-mcc.jpg",
      title: "Flour Mill MCC Panel",
      category: GalleryCategory.flourMills,
      projectType: "MCC Panel",
    },
    {
      id: BigInt(3),
      imageUrl: "/assets/generated/gallery-vfd-panel.jpg",
      title: "VFD Drive Panel Assembly",
      category: GalleryCategory.electricalPanels,
      projectType: "VFD Panel",
    },
    {
      id: BigInt(4),
      imageUrl: "/assets/generated/gallery-installation.jpg",
      title: "Site Commissioning — Food Plant",
      category: GalleryCategory.installationProjects,
      projectType: "Installation",
    },
  ],
  getGalleryItemsByCategory: async (category: GalleryCategory): Promise<Array<GalleryItem>> => [
    {
      id: BigInt(1),
      imageUrl: "/assets/generated/gallery-rice-mill-panel.jpg",
      title: "Rice Mill Automation Panel",
      category,
      projectType: "PLC Panel",
    },
  ],
  submitContact: async (
    _name: string,
    _company: string,
    _phone: string,
    _email: string,
    _industry: string,
    _message: string,
  ): Promise<bigint> => BigInt(43),
};
