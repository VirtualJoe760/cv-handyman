import { getPostsBySection } from '@/utils/fetchPosts';
import TipsList from '@/components/TipsList';
import { tipsCategoriesContent } from '@/constants/staticContent'; // Import SEO data from static content
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { section: string };
}): Promise<Metadata> {
  const section = params.section;

  // Find the matching category's SEO data
  const category = tipsCategoriesContent.categories.find(
    (cat) => cat.href.split('/').pop() === section
  );

  // If no category is found, return default metadata
  if (!category || !category.seo) {
    return {
      title: 'Handyman Tips | Coachella Valley',
      description:
        'Explore our expert handyman tips for home improvement, seasonal care, and more in Coachella Valley.',
      keywords: ['handyman tips', 'home improvement', 'seasonal care', 'Coachella Valley'],
    };
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords,
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [{ url: category.imageUrl }],
    },
  };
}

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
