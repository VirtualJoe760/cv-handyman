import { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function RootLayout({
  children,
  seoData = {}
}: {
  children: ReactNode;
  seoData?: SeoData; // Accept SEO data as a prop
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <title>{seoData.title || 'Coachella Valley Handyman - Your Trusted Local Handyman'}</title>
        <meta
          name="description"
          content={
            seoData.description ||
            'Coachella Valley Handyman provides a wide range of home improvement services. Contact us today for reliable handyman services in the Coachella Valley area.'
          }
        />
        <meta
          name="keywords"
          content={seoData.keywords?.join(', ') || 'handyman, Coachella Valley, home improvement, repair services, maintenance'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={seoData.ogTitle || seoData.title || 'Coachella Valley Handyman - Your Trusted Local Handyman'} />
        <meta
          property="og:description"
          content={
            seoData.ogDescription ||
            seoData.description ||
            'Coachella Valley Handyman offers expert home improvement services, from repairs to remodeling. Contact us today to schedule an appointment!'
          }
        />
        <meta property="og:image" content={seoData.ogImage || 'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/coachella-valley.jpg'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.ogUrl || 'https://coachellavalleyhandyman.com'} />

        {/* Fallback Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
