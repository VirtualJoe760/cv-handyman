import About from "./components/About";
import HomeHero from "./components/HomeHero";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
