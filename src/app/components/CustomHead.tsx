// components/CustomHead.tsx
"use client";

import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <title>
        Coachella Valley Handyman: Your Trusted Partner for Home Improvement
      </title>
      <meta
        name="description"
        content="Coachella Valley Handyman offers professional handyman services for all your home improvement needs. From seasonal maintenance and repairs to custom installations, our skilled team ensures your home remains safe, functional, and beautiful."
      />
      <meta
        name="keywords"
        content="home improvement, handyman services, seasonal maintenance, plumbing, electrical work, drywall repairs, Coachella Valley"
      />
      <meta
        property="og:title"
        content="Coachella Valley Handyman: Your Trusted Partner for Home Improvement"
      />
      <meta
        property="og:description"
        content="Coachella Valley Handyman offers professional handyman services for all your home improvement needs. From seasonal maintenance and repairs to custom installations, our skilled team ensures your home remains safe, functional, and beautiful."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dcrue4vr6/image/upload/w_1200,h_630,q_auto,f_auto/v1729463634/coachella-valley.jpg"
      />
      <meta property="og:url" content="https://coachellavalleyhandyman.com" />
    </Head>
  );
};

export default CustomHead;
