import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';
import Circle from '../../svg/Circle';
import LogoElement from './TopCompanies';
const CircularComponent = () => {
  const { y } = useWindowScroll();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotationValue = y / 2; // Adjust the scroll speed here
      setRotation(rotationValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  return (
    <div className='overflow-scroll-hidden h-screen mb-[150px] w-screen flex flex-col items-center'>
        <div className='text-[40px] font-poppins font-semibold leading-[40px]' >Placement Stats</div>
        <div className='text-[20px] leading-[40px]'>300+ students placed</div>
        <div className='text-[20px] leading-[40px]'> 20+ recruiters On Campus</div>


    <div
      className={classNames(
        'rounded-full flex justify-center text-2xl font-semibold overflow-scroll-hidden',
        {
          'transform rotate': rotation !== 0,
        }
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
        <div className=' h-[350px] w-[350px] rounded-full text-black opacity-30'>
            <Circle/> 
        </div>
      
  
    </div>
    <div className='text-[40px] font-bold -mt-[280px] h-30 w-[200px] flex justify-center items-center text-center'>98% placement rate!</div>
    <LogoElement/>

    </div>
  );
};

export default CircularComponent;
