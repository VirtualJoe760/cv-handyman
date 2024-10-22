import { Post } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/Pagination'; // Import the pagination component
import { sectionPageContent } from '@/constants/staticContent'; // Import static content

interface TipsListProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  section: string;
}

const TipsList: React.FC<TipsListProps> = ({ posts, totalPages, currentPage, section }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Dynamic title and description */}
          <h2 className="text-4xl font-bold py-4 tracking-tight text-black sm:text-5xl">
            {sectionPageContent.title(section)}
          </h2>
          <p className="mt-2 text-xl leading-8 text-black">
            {sectionPageContent.description(section)}
          </p>

          {/* Posts */}
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.slice(0, 5).map((post) => (
              <article
                key={post.slug}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
                aria-label={`Read more about ${post.title}`}
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    alt={post.altText || `Image related to ${post.title}`}
                    src={post.image}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    width={1200}
                    height={630}
                    loading="lazy" // Enable lazy loading
                    aria-hidden="true"
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
                      aria-label={`Go to ${post.title} post in ${section.replace('-', ' ')} section`}
                    >
                      {section.replace('-', ' ')}
                    </Link>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-3xl font-semibold leading-7 text-black group-hover:text-gray-600">
                      <Link
                        href={`/tips/${section}/${post.slug}`}
                        aria-label={`Read full post titled ${post.title}`}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-lg leading-7 text-black">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} section={section} />
        </div>
      </div>
    </div>
  );
};

export default TipsList;
