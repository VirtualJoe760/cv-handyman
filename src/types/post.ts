// types/post.ts
export interface Post {
  title: string;
  slug: string;
  date: string;
  section: string;
  description: string;
  metaDescription: string; // Ensure this matches your frontmatter
  image: string;
  altText: string;
  keywords: string[];
  content: string;  // Holds the actual content of the post
}
