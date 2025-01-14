import React from 'react';
import Hero from '../Home/Hero';
import Aboutme from '../Home/Aboutme';
import Testimonials from '../Home/Testimonials';
import Casestudies from '../Home/Casestudies';
import Carousel from '../Home/Carousel';
import Contact from '../Home/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Casestudies />
      <Carousel />
      <Aboutme />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
