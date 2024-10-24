import { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coachella Valley Handyman - Your Trusted Local Handyman',
  description: 'Coachella Valley Handyman provides expert home improvement services, from repairs to remodeling. Contact us today for reliable handyman services in Coachella Valley.',
  keywords: ['handyman', 'Coachella Valley', 'home improvement', 'repair services', 'maintenance'],
  openGraph: {
    title: 'Coachella Valley Handyman - Your Trusted Local Handyman',
    description: 'Expert handyman services in Coachella Valley for all home improvement projects. From small repairs to complete renovations.',
    url: 'https://coachellavalleyhandyman.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/coachella-valley.jpg',
        alt: 'Coachella Valley Handyman',
      },
    ],
    siteName: 'Coachella Valley Handyman',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coachella Valley Handyman - Your Trusted Local Handyman',
    description: 'Providing expert handyman services across Coachella Valley. Contact us today for fast and reliable service.',
    images: ['https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
