import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import buildingImg from '../../img/regulationBG.png';
import ImageBox from '../imageBox';

function Regulations() {
  const HeroTxt = 'REGULATIONS';
  const para = '';
  const BtechReg =
    'https://drive.google.com/file/d/1UzNnU_8v_626Jth5kDF0NP7Pl1elx2Ou/view';
  const MtechReg =
    'https://drive.google.com/file/d/1GeWzA-aESshF784-i2JgNNWFchZ8Dgty/view';
  const PhDReg =
    'https://drive.google.com/file/d/1mjjDAHg8nAvqq2R87CdwdJljJFc3viFk/view';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="flex flex-col md:flex-row justify-around w-[80vw] p-8 gap-4  ">
          <div className="flex flex-col justify-center items-start bg-slate-300 rounded-xl p-16 relative">
            <div className="absolute top-0 left-16 text-gray-800 text-7xl ">
              ...
            </div>
            <div className="text-5xl font-bold text-gray-800  pt-8 border-b-2 border-gray-100 pb-4">
              BTech
            </div>

            <a href={BtechReg} target="_blank" className="">
              <div className="py-8 text-sm text-center justify-center flex items-center gap-4">
                <div className="bg-gradient-to-r hover:bg-gradient-to-l from-white to-orange-000 p-2 rounded-xl px-4">
                  Regulations
                </div>
                <div className="text-gray-800 animationArr ">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center items-start rounded-xl p-16 relative bg-slate-300 ">
            <div className="absolute top-0 left-16 text-gray-800 text-7xl ">
              ...
            </div>
            <div className="text-5xl font-bold text-gray-800  pt-8 border-b-2 pb-4">
              Mtech
            </div>

            <a href={MtechReg} target="_blank" className="">
              <div className="py-8 text-sm text-center justify-center flex items-center gap-4">
                {/* <div className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200 p-2 rounded-full px-4"> */}
                <div className="bg-gradient-to-r hover:bg-gradient-to-l from-white to-orange-000 p-2 rounded-full px-4">
                  Regulations
                </div>
                <div className="text-gray-800 animationArr">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center md:items-center items-start bg-slate-300 relative rounded-xl p-16">
            <div className="absolute top-0 left-16 text-gray-800 text-7xl ">
              ...
            </div>
            <div className="text-5xl font-bold text-gray-800  pt-8 border-b-2 border-gray-100 pb-4 text-center">
              PhD
            </div>

            <a href={PhDReg} target="_blank" className="">
              <div className="py-8 text-sm text-center justify-center flex items-center gap-4">
                <div className="bg-gradient-to-r hover:bg-gradient-to-l from-white to-orange-000 p-2 rounded-full px-4">
                  Regulations
                </div>
                <div className="text-gray-800 animationArr">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulations;
