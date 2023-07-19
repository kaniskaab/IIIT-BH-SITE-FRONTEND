import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function AICTE() {
  const HeroTxt = 'AICTE';
  const para = '';

  const EOA21_22 =
    'https://drive.google.com/file/d/1vu35p-WgOndnvaSfma5ukJUhDCZu49H0/view';
  const EOA20_21 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2022';
  const EOA19_20 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2021';
  const EOA18_19 = 'https://www.iiit-bh.ac.in/university/nirf/nirf-2020';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="md:text-3xl text-2xl font-bold text-gray-700 mb-4">
          AICTE Mandatory Disclosure
        </div>
        <div className="flex flex-col justify-center md:px-4 px-16">
          <a href={EOA21_22} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4 ">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                EOA Report 2021-2022{' '}
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={EOA20_21} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                EOA Report 2020-2021
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={EOA19_20} target="_blank" className="">
            <div className="py-8 text-xl text-center flex justify-center items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                EOA Report 2019-2020
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={EOA18_19} target="_blank" className="">
            <div className="py-8 text-xl text-center flex justify-center items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4">
                EOA Report 2018-2019{' '}
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

export default AICTE;
