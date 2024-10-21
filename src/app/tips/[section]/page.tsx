import { getPostsBySection } from '@/utils/fetchPosts';
import Pagination from '@/components/Pagination';
import { Post } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

// This page handles pagination for each section
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Read our {section.replace('-', ' ')} articles
          </h2>
          <p className="mt-2 text-xl leading-8 text-black">
            At Coachella Valley Handyman, we are more than just a service provider. We take pride in offering insightful advice and practical tips through our blog. Whether you're looking to improve your home or simply stay informed, our {section.replace('-', ' ')} articles are designed to empower you with the knowledge you need to make the best decisions for your home improvement needs.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.slice(0, 5).map((post: Post) => (
              <article key={post.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    alt={post.altText}
                    src={post.image}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    width={850}
                    height={400}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <Link
                      href={`/tips/${section}/${post.slug}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {section.replace('-', ' ')}
                    </Link>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-3xl font-semibold leading-7 text-black group-hover:text-gray-600">
                      <Link href={`/tips/${section}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-lg leading-7 text-black">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} section={section} />
        </div>
      </div>
    </div>
  );
}
