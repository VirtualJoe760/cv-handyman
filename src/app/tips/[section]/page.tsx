import { getPostsBySection } from '@/utils/fetchPosts';
import TipsList from '@/components/TipsList';

export default async function SectionPage({
  params,
  searchParams,
}: {
  params: { section: string };
  searchParams: { page?: string };
}) {
  const section = params.section;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  // Fetch posts by section with pagination (limit set to 5)
  const { posts, totalPages } = await getPostsBySection(section, page, 5);

  return (
    <TipsList
      posts={posts}
      totalPages={totalPages}
      currentPage={page}
      section={section}
    />
  );
}
