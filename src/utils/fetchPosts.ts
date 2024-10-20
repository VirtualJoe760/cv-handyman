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

  // Explicitly return only the properties we need
  return {
    title: data.title,
    slug: slugId,  // Use slugId as the slug
    date: data.date,
    section: data.section,
    description: data.metaDescription,
    image: data.image,
    altText: data.altText,
    keywords: data.keywords,
    content: content,  // The actual content of the post
  } as Post;
}

// Function to get paginated posts (returns a subset of all posts)
export async function getAllPosts(page: number = 1, limit: number = 5): Promise<{ posts: Post[], totalPages: number }> {
  const fileNames = fs.readdirSync(postsDirectory);

  // Get the total number of pages
  const totalPages = Math.ceil(fileNames.length / limit);

  // Get the posts for the current page
  const posts = await Promise.all(
    fileNames
      .slice((page - 1) * limit, page * limit) // Slice based on page and limit
      .map(async (fileName) => {
        const slugId = fileName.replace(/\.mdx?$/, ''); // Remove the extension
        return getPostBySlug(slugId);
      })
  );

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: sortedPosts,
    totalPages,
  };
}

// Function to get posts by section (e.g., 'How To')
export async function getPostsBySection(section: string, page: number = 1, limit: number = 5): Promise<{ posts: Post[], totalPages: number }> {
  const { posts: allPosts, totalPages } = await getAllPosts(page, limit);
  const sectionPosts = allPosts.filter(post => post.section === section);
  
  return { posts: sectionPosts, totalPages };
}
