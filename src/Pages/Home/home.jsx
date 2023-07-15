import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { PlacementStats } from '../../components/PlacementStats/PlacementStats';

import Director from '../../components/Director/Director';
import Feedbacks from '../../components/Feedback/Feedbacks';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import About from '../About/About';

export default function Home() {
  return (
    <>
      {' '}
      <div className="overflow-x-hidden">
        <header class="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img overflow-hidden">
          <div class=" bg-white bg-opacity-50 rounded-xl h-screen w-screen">
            <Hero />
          </div>
        </header>
        <Dashboard />

        <About truncate={true} />
        <section class="container flex items-center justify-center sm:h-[400px] rounded-full m-auto mb-12 bg-fixed bg-center bg-cover custom-img  h-[200px]"></section>

        <Director truncate={true} />
        <Stats />

        <PlacementStats />

        <Feedbacks />
      </div>
    </>
  );
}
