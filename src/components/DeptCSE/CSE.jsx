import React from 'react';

import ImageSlider from '../imageCrousel/imgCrousel';
import { SliderData } from '../imageCrousel/sliderData';

function CSE() {
  return (
    <>
      <div className="lg:p-[86px] sm:p-14 p-12"></div>
      <div className="flex flex-col justify-center items-center">
        <ImageSlider slides={SliderData} />;
      </div>
    </>
  );
}

export default CSE;
