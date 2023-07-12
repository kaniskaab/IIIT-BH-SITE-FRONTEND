import React from 'react';
import Director from '../../components/Director/Director';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ImageCarousel /> */}
      <About truncate={true} />
      <Director truncate={true} />
    </>
  );
}
