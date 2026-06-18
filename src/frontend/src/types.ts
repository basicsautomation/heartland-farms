export interface BlogPost {
  id: bigint;
  title: string;
  excerpt: string;
  content: string;
  date: bigint;
  author: string;
  slug: string;
  category: string;
  readTime: string;
}

export enum GalleryCategory {
  riceMills = "riceMills",
  flourMills = "flourMills",
  dalMills = "dalMills",
  electricalPanels = "electricalPanels",
  installationProjects = "installationProjects",
}

export interface GalleryItem {
  id: bigint;
  imageUrl: string;
  title: string;
  category: GalleryCategory;
  projectType: string;
  videoUrl?: string;
  isVideo?: boolean;
  description?: string;
}

export interface ContactForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  message: string;
}

export type NavLink = {
  label: string;
  href: string;
};
