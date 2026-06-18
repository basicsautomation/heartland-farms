import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    slug: string;
    author: string;
    readTime: string;
    excerpt: string;
    category: string;
}
export interface GalleryItem {
    id: bigint;
    title: string;
    projectType: string;
    imageUrl: string;
    category: GalleryCategory;
    isVideo?: boolean;
    videoUrl?: string;
}
export enum GalleryCategory {
    electricalPanels = "electricalPanels",
    installationProjects = "installationProjects",
    riceMills = "riceMills",
    flourMills = "flourMills",
    dalMills = "dalMills"
}
export interface backendInterface {
    getBlogPost(slug: string): Promise<BlogPost | null>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    getContactSubmissionCount(): Promise<bigint>;
    getGalleryCategories(): Promise<Array<string>>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getGalleryItemsByCategory(category: GalleryCategory): Promise<Array<GalleryItem>>;
    submitContact(name: string, company: string, phone: string, email: string, industry: string, message: string): Promise<bigint>;
}
