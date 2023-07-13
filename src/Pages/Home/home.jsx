import React from 'react';

import Director from '../../components/Director/Director';
import Feedbacks from '../../components/Feedback/Feedbacks';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import About from '../About/About';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ImageCarousel /> */}
      <About truncate={true} />
      <Director truncate={true} />
      <Stats />
      {/* <PlacementStats /> */}
      <Feedbacks />
    </>
  );
}
