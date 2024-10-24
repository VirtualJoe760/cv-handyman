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

    // Safeguard to ensure slugId exists in params
    if (!slugId) {
      console.error('Slug ID is missing in params:', params);
      return {
        title: 'Post Not Found',
        description: 'The requested post could not be found.',
      };
    }

    const post: Post = await getPostBySlug(slugId);

    // Ensure post exists
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

  // Safeguard to ensure slugId is passed
  if (!slugId) {
    console.error('Slug ID is missing.');
    return <p>Slug ID is missing</p>;
  }

  try {
    const post: Post = await getPostBySlug(slugId);

    // Log for debugging
    console.log("Post found:", post);

    // Handle case where post is not found
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

    // Convert markdown content to HTML
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
      <div>
        {/* VariableHero component */}
        <VariableHero
          backgroundImage={post.image}
          serviceName={post.title}
          description={`Published on: ${new Date(post.date).toLocaleDateString()}`}
        />

        {/* Main content section */}
        <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
          {/* Render post content */}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>

        {/* QuickContact component */}
        <QuickContact section={section} />

        {/* Disqus Comments Section */}
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
