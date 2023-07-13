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
        <Hero />
        <Dashboard />

        <About truncate={true} />
        <Director truncate={true} />
        <Stats />

        <PlacementStats />

        <Feedbacks />
      </div>
    </>
  );
}
