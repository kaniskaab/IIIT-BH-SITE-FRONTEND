import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function NIRF() {
  const HeroTxt = 'NIRF';
  const para = '';

  const NIRF2023 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2023';
  const NIRF2022 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2022';
  const NIRF2021 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2021';
  const NIRF2020 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2020';

  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="flex flex-col justify-center md:px-4 px-16">
          <a href={NIRF2023} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4 ">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                NIRF 2023{' '}
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={NIRF2022} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                NIRF 2022
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={NIRF2021} target="_blank" className="">
            <div className="py-8 text-xl text-center flex justify-center items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                NIRF 2021
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={NIRF2020} target="_blank" className="">
            <div className="py-8 text-xl text-center flex justify-center items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                NIRF 2020{' '}
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <div className="mb-16"></div>
        </div>
      </div>
    </div>
  );
}

export default NIRF;
