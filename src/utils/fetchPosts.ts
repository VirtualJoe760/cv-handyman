import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// Function to get the metadata and content of a single post by its slugId
export async function getPostBySlug(slugId: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slugId}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the front matter (metadata)
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    slug: slugId,
    date: data.date,
    section: data.section,
    description: data.metaDescription,
    image: data.image,
    altText: data.altText,
    keywords: data.keywords,
    content: content,
  } as Post;
}

// Function to get all posts (can be paginated)
export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return Promise.all(
    fileNames.map(async (fileName) => {
      const slugId = fileName.replace(/\.mdx?$/, ''); // Remove the extension
      return getPostBySlug(slugId);
    })
  );
}

// Function to get posts by section (e.g., 'How To') with pagination
export async function getPostsBySection(section: string, page: number = 1, limit: number = 5): Promise<{ posts: Post[], totalPages: number }> {
  const allPosts = await getAllPosts(); // Get all posts initially
  const sectionPosts = allPosts.filter(post => post.section === section); // Filter posts by section

  // Calculate total pages based on the section posts
  const totalPages = Math.ceil(sectionPosts.length / limit);

  // Slice the posts for the current page
  const paginatedPosts = sectionPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    totalPages,
  };
}
