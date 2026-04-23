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
    excerpt: string;
}
export interface GalleryItem {
    id: bigint;
    imageUrl: string;
    caption: string;
    category: GalleryCategory;
}
export enum GalleryCategory {
    journey = "journey",
    farm = "farm",
    vineyard = "vineyard",
    lifestyle = "lifestyle"
}
export interface backendInterface {
    getBlogPost(slug: string): Promise<BlogPost | null>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getContactSubmissionCount(): Promise<bigint>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getGalleryItemsByCategory(category: GalleryCategory): Promise<Array<GalleryItem>>;
    submitContact(name: string, email: string, message: string, phone: string | null): Promise<bigint>;
}
