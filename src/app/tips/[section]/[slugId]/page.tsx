import { getPostBySlug } from "@/utils/fetchPosts";
import { Post } from "@/types/post";
import VariableHero from "@/components/VariableHero";
import { remark } from 'remark';
import html from 'remark-html';
import QuickContact from "@/app/components/QuickContact";
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Dynamically import Disqus for client-side rendering
const DisqusComments = dynamic(() => import('@/app/components/DisqusComments'), {
  ssr: false,  // Disable server-side rendering for this component
});

// Define dynamic metadata for SEO based on frontmatter
export async function generateMetadata({ params }: { params: { slugId: string } }): Promise<Metadata> {
  const post: Post = await getPostBySlug(params.slugId);

  return {
    title: post.title,
    description: post.metaDescription || post.description,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.description,
      url: `https://coachellavalleyhandyman.com/posts/${post.slugId}`,
      images: [{ url: post.ogImage || post.image, alt: post.altText || post.title }],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { section: string; slugId: string };
}) {
  const { slugId, section } = params; // Destructure section from params
  const post: Post = await getPostBySlug(slugId);

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
      <QuickContact section={section} /> {/* Pass the section prop here */}

      {/* Disqus Comments Section */}
      <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <DisqusComments 
          postSlug={slugId} 
          postTitle={post.title}
        />
      </div>
    </div>
  );
}
