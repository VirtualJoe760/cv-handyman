import "./globals.css"; // Tailwind and global styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from 'react';
import Head from 'next/head';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/palm-treesvgrepo-com.svg" type="image/svg+xml" />
        <title>Coachella Valley Handyman: Your Trusted Partner for Home Improvement</title>
        <meta name="description" content="Coachella Valley Handyman offers professional handyman services for all your home improvement needs. From seasonal maintenance and repairs to custom installations, our skilled team ensures your home remains safe, functional, and beautiful." />
        <meta name="keywords" content="home improvement, handyman services, seasonal maintenance, plumbing, electrical work, drywall repairs, Coachella Valley" />
        
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Coachella Valley Handyman: Your Trusted Partner for Home Improvement" />
        <meta property="og:description" content="Coachella Valley Handyman offers professional handyman services for all your home improvement needs. From seasonal maintenance and repairs to custom installations, our skilled team ensures your home remains safe, functional, and beautiful." />
        <meta property="og:image" content="https://res.cloudinary.com/dcrue4vr6/image/upload/v1729463634/coachella-valley.jpg" />
        <meta property="og:url" content="https://coachellavalleyhandyman.com" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
