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

export default async function PostPage({
  params,
}: {
  params: { section: string; slugId: string };
}) {
  console.log('Params:', params); // Debugging params

  const { slugId } = params;
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
      <QuickContact />

      {/* Disqus Comments Section */}
      <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2"> {/* Added padding/margin here */}
        <DisqusComments 
          postSlug={slugId} 
          postTitle={post.title}
        />
      </div>
    </div>
  );
}
