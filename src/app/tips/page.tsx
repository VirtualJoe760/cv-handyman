import React from 'react';
import TipsCategories from '@/components/TipsCategories';
import VariableHero from '@/components/VariableHero';

// Generate dynamic metadata for the Tips section
export async function generateMetadata() {
  return {
    title: 'Handyman Home Tips - Coachella Valley Handyman',
    description:
      'Discover professional handyman tips, home improvement advice, and seasonal care for homes in the Coachella Valley desert region. Get expert insights on maintaining and remodeling your home.',
    keywords: [
      'handyman services',
      'home remodeling',
      'home improvement',
      'seasonal home care',
      'Coachella Valley home care',
      'desert home maintenance',
      'how-to home improvement',
      'home repair tips',
      'handyman tips',
    ],
    openGraph: {
      title: 'Handyman Home Tips - Coachella Valley Handyman',
      description:
        'Find expert handyman tips and seasonal home care advice specifically for homeowners in the Coachella Valley desert region. Learn how to take care of your home year-round.',
      images: [
        'https://images.unsplash.com/photo-1715559929394-4c5fdda7c50d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      url: 'https://coachellavalleyhandyman.com/tips',
    },
  };
}

const TipsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <VariableHero 
        backgroundImage='https://images.unsplash.com/photo-1715559929394-4c5fdda7c50d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        serviceName='Handyman Tips for Coachella Valley Residents'
        description='Discover professional handyman tips and expert advice from Coachella Valley Handyman.'
      />
      
      {/* Tips Categories Section */}
      <TipsCategories />
    </>
  );
}

export default TipsPage;
