import { getPostsBySection } from '@/utils/fetchPosts';
import Pagination from '@/components/Pagination';
import { Post } from '@/types/post';

// This page handles pagination for each section
export default async function SectionPage({ params, searchParams }: { params: { section: string }, searchParams: { page?: string } }) {
  const section = params.section;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  // Fetch posts by section with pagination
  const { posts, totalPages } = await getPostsBySection(section, page);

  return (
    <div>
      <h1>{section.replace('-', ' ')} Articles</h1>
      {posts.map((post: Post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <a href={`/tips/${section}/${post.slug}`}>Read more</a>
        </div>
      ))}

      <Pagination currentPage={page} totalPages={totalPages} section={section} />
    </div>
  );
}
