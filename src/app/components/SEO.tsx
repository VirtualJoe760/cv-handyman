'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

interface SeoProps {
  seoData: SeoData;
}

const SEO: React.FC<SeoProps> = ({ seoData }) => {
  useEffect(() => {
    // You can also add any dynamic updates here if needed
  }, [seoData]);

  return (
    <Head>
      <title>{seoData.title || 'Coachella Valley Handyman - Your Trusted Local Handyman'}</title>
      <meta name="description" content={seoData.description || 'Coachella Valley Handyman offers a wide range of handyman services.'} />
      <meta name="keywords" content={seoData.keywords?.join(', ') || 'handyman, Coachella Valley, home improvement'} />
      <meta property="og:title" content={seoData.ogTitle || seoData.title || 'Coachella Valley Handyman'} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description || 'Expert handyman services in Coachella Valley.'} />
      <meta property="og:image" content={seoData.ogImage || 'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg'} />
      <meta property="og:url" content={seoData.ogUrl || 'https://coachellavalleyhandyman.com'} />
    </Head>
  );
};

export default SEO;
