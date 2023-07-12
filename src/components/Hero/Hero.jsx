import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import heroImg from '../../img/heroImg.png';

function Hero() {
  const scrollRef = useRef();

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      <div className="h-screen relative   ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-screen   w-[15vw] right-0 bottom-0 absolute bg-[#C8FFD4]"></div>
        </motion.div>
        <div
          className="w-full cursor-pointer font-mono text-center  h-[2rem] bottom-0 absolute bg-[#E8E8E8]"
          onClick={handleButtonClick}
        >
          <h>Explore IIIT BBSR</h>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(10%)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className=" z-[10] lg:scale-[1.2]  xl:scale-[1.5] sm:block hidden absolute pointer-events-none  md:right-8 lg:right-20 xl:right-40 lg:top-60 xl:top-72 md:top-40 sm:top-80 sm:right-[50%]  sm:translate-x-[50%] md:translate-x-[0%]">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex lg:pl-32 sm:pl-28 pl-8  lg:pt-72 md:pt-48 pt-32 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-5 h-5 rounded-full bg-[#FF8A00]" />
              <div className="w-1 sm:h-80 h-40 orange-gradient" />
            </div>
            <div className="font-mono pl-4">
              <h className="  font-bold lg:text-7xl md:text-5xl text-4xl">
                WELCOME
              </h>{' '}
              <br></br>
              <h className="   lg:text-5xl text-3xl">TO</h> <br></br>
              <h className="  lg:text-7xl md:text-5xl text-4xl">
                <span className=" text-[#FF8A00] font-bold">IIIT</span>{' '}
                <div className="md:hidden"></div>
                <span className=" text-[#FF8A00] font-bold">BH</span>
                ubaneswar
              </h>
            </div>
          </div>
        </motion.div>

        <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
          <div onClick={handleButtonClick}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-slate-400 mb-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef}></div>
    </>
  );
}

export default Hero;
