import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],  // Allow MDX pages
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com'
    ], // Allow Cloudinary for images
  },
});

export default nextConfig;  // Use export default for ES modules
