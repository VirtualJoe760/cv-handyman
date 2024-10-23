// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const seoData = await fetchSeoData();

  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <title>{seoData?.title || 'Coachella Valley Handyman - Your Trusted Local Service'}</title>
        <meta
          name="description"
          content={
            seoData?.description ||
            'Coachella Valley Handyman provides a wide range of home improvement services. Contact us today for reliable handyman services in the Coachella Valley area.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={seoData?.ogTitle || 'Coachella Valley Handyman'} />
        <meta
          property="og:description"
          content={
            seoData?.ogDescription ||
            'Coachella Valley Handyman offers expert services for your home improvement needs. Contact us today to schedule an appointment.'
          }
        />
        <meta property="og:image" content={seoData?.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData?.ogUrl || 'https://coachellavalleyhandyman.com'} />
        <meta name="robots" content="index, follow" />
        
        {/* Favicon */}
        <link rel="icon" href="{seoData?.favicon}" type="image/svg+xml" />
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

// Mock fetch function to get SEO data
async function fetchSeoData() {
  return {
    title: 'Coachella Valley Handyman - Reliable Local Services',
    description:
      'We specialize in a range of home improvement services, including repairs, maintenance, and remodeling. Contact us for fast, reliable service in the Coachella Valley.',
    ogTitle: 'Coachella Valley Handyman',
    ogDescription: 'Get expert handyman services in the Coachella Valley area today!',
    ogImage: 'https://res.cloudinary.com/dcrue4vr6/image/upload/l_text:Arial_40_bold:Coachella-Valley-Handyman,co_rgb:ffffff,g_south_east,x_20,y_80,b_rgb:000000/l_text:Arial_50_bold:No task to big or small,co_rgb:ffffff,g_south_east,x_20,y_20,b_rgb:00CC00/v1729459742/coachella-valley.jpg',
    ogUrl: 'https://coachellavalleyhandyman.com',
  };
}