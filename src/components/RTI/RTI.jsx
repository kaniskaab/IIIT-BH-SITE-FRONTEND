import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function RTI() {
  const HeroTxt = 'RTI';
  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className=" flex border-4 w-[80vw] h-[200px]  justify-between">
          <div className="flex flex-col border-4 w-[38vw]"></div>
          <div className="flex flex-col border-4 w-[38vw]"></div>
        </div>
      </div>
    </div>
  );
}

export default RTI;
