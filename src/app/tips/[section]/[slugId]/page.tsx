import { getPostBySlug } from "@/utils/fetchPosts";
import { Post } from "@/types/post";
import VariableHero from "@/components/VariableHero";
import { remark } from 'remark';
import html from 'remark-html';
import QuickContact from "@/app/components/QuickContact";
import dynamic from 'next/dynamic';

// Dynamically import Disqus for client-side rendering
const DisqusComments = dynamic(() => import('@/app/components/DisqusComments'), {
  ssr: false,  // Disable server-side rendering for this component
});

// Metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: { section: string; slugId: string };
}) {
  try {
    const { slugId } = params;

    if (!slugId) {
      console.error('Slug ID is missing in params:', params);
      return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
      };
    }

    const post: Post = await getPostBySlug(slugId);

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
      };
    }

    return {
      title: `${post.title} - Coachella Valley Handyman`,
      description: post.description || post.metaDescription,
      keywords: post.keywords?.join(', '),
      openGraph: {
        title: post.title,
        description: post.description || post.metaDescription,
        url: `https://coachellavalleyhandyman.com/tips/${params.section}/${slugId}`,
        images: [
          {
            url: post.image,
            alt: post.altText,
          },
        ],
      },
    };
  } catch (error) {
    console.error('Error in metadata generation:', error);
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
}

export default async function PostPage({
  params,
}: {
  params: { section: string; slugId: string };
}) {
  const { slugId, section } = params;

  if (!slugId) {
    console.error('Slug ID is missing.');
    return <p>Slug ID is missing</p>;
  }

  try {
    const post: Post = await getPostBySlug(slugId);

    if (!post) {
      return (
        <div>
          <p>Post not found</p>
          <a href="/tips" className="text-blue-500 hover:underline">
            Back to Tips
          </a>
        </div>
      );
    }

    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
      <div>
        <VariableHero
          backgroundImage={post.image}
          serviceName={post.title}
          description={`Published on: ${new Date(post.date).toLocaleDateString()}`}
        />

        <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>

        <QuickContact section={section} />

        <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
          <DisqusComments 
            postSlug={slugId} 
            postTitle={post.title}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return <p>There was an error loading the post.</p>;
  }
}
