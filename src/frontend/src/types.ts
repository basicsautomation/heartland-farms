export interface BlogPost {
  id: bigint;
  title: string;
  content: string;
  date: bigint;
  slug: string;
  author: string;
  excerpt: string;
}

export interface GalleryItem {
  id: bigint;
  imageUrl: string;
  caption: string;
  category: GalleryCategory;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export type NavLink = {
  label: string;
  href: string;
};

export enum GalleryCategory {
  journey = "journey",
  farm = "farm",
  vineyard = "vineyard",
  lifestyle = "lifestyle",
}
