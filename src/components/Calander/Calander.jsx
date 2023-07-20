import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import buildingImg from '../../img/calanderBG.png';
import ImageBox from '../imageBox';

function Calander() {
  const HeroTxt = 'Academic Calendar';
  const para = '';
  const calanderUrl =
    'https://drive.google.com/file/d/1lNAnpTsCQ-eKW9RM81dJj_k2eAxPK837/view';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="flex flex-col justify-center md:px-4 px-16">
          <a href={calanderUrl} target="_blank" className="">
            <div className="py-8 text-md md:text-xl text-center flex justify-center items-center gap-4">
              <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4 ">
                Academic Calendar 2022-23{' '}
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

export default Calander;
