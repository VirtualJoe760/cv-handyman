import "./globals.css"; // Tailwind and global styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/palm-treesvgrepo-com.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
