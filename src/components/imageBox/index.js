import React, { useRef } from 'react';
import { ReactComponent as DownArrow } from '../../svg/arrowDown.svg';
import './imageBox.css';

const ImageBox = (props) => {
  const scrollRef = useRef();
  const { HeadTxt, paraTxt, bgImg } = props;

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div
          className="image-box w-[90vw]  rounded-full md:h-[300px] h-[200px] filter  relative bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div class="absolute inset-0 transform transition-transform duration-300 hover:scale-">
            {/* <img src={buildingImg} alt="Image" className="image rounded-full" /> */}
            <div className="  md:h-[300px] h-[200px] flex flex-col items-center justify-center ">
              <div className="text-gray-300 font-bold text-5xl p-1 text-center">
                {HeadTxt}
              </div>
              <div className="text-white text-3xl font-thin p-1">{paraTxt}</div>
            </div>
            <div className=" darkei w-[80px] h-[80px] left-[50%] bottom-[-30px] translate-x-[-50%]  absolute rounded-[50%]  cursor-pointer flex items-center justify-center">
              <button
                className="scroll-button bg-gradient-to-r hover:bg-gradient-to-l from-orange-300 to-orange-200"
                onClick={handleButtonClick}
              >
                <DownArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className=" pt-20 "></div>
    </>
  );
};

export default ImageBox;
