import React from 'react';
import heroImg from '../../img/heroImg.png';

function Hero() {
  return (
    <>
      <div className="h-screen relative   ">
        <div className="h-screen   w-[15vw] right-0 bottom-0 absolute bg-[#C8FFD4]"></div>
        <div className="w-full font-mono text-center  h-[2rem] bottom-0 absolute bg-[#E8E8E8]">
          <h>Explore IIIT BBSR</h>
        </div>
        <div className="flex lg:pl-32 md:pl-28 pl-4  lg:pt-72 md:pt-48 pt-32 ">
          <div className="flex flex-col justify-center items-center ">
            <div className="w-5 h-5 rounded-full bg-[#FF8A00]" />
            <div className="w-1 sm:h-80 h-40 orange-gradient" />
          </div>
          <div className="font-mono pl-4">
            <h className="  font-bold lg:text-7xl text-4xl">WELCOME</h>{' '}
            <br></br>
            <h className="   lg:text-5xl text-3xl">TO</h> <br></br>
            <h className="  lg:text-7xl text-4xl">
              <span className=" text-[#FF8A00] font-bold">IIIT BH</span>
              ubaneswar
            </h>
          </div>
          <div className="pl-60 z-[10] lg:scale-[1.5] sm:block hidden">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
