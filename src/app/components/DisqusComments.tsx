"use client";

import { useEffect, useState } from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  postTitle: string;
  postSlug: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({ postTitle, postSlug }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the component only renders on the client-side
  }, []);

  const disqusShortname = "coachellavalleyhandyman-com"; // Your Disqus shortname
  const disqusConfig = {
    url: `https://coachellavalleyhandyman.com/tips/${postSlug}`, // URL of the current post
    identifier: postSlug, // Unique identifier for the post
    title: postTitle, // Title of the post
  };

  return (
    <div className="mt-10">
      {isClient && (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      )}
    </div>
  );
};

export default DisqusComments;
