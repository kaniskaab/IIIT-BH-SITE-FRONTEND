import React from 'react';

import ImageSlider from '../imageCrousel/imgCrousel';
import { SliderData } from '../imageCrousel/sliderData';

function CSE() {
  return (
    <>
      <div className="p-16"></div>
      <ImageSlider slides={SliderData} />;
    </>
  );
}

export default CSE;
