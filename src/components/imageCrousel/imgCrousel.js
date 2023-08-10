import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import styles from './index.module.css';

const ImageSlider = ({ slides, mainTxt }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className="md:text-6xl sm:text-3xl text-3xl font-bold absolute text-white z-30 pointer-events-none text-center ">
        {' '}
        {mainTxt}
      </div>
      <MdOutlineKeyboardArrowLeft
        className={`${styles.leftArrow} text-white bg-gray-900  rounded-full  opacity-[.1] hover:opacity-50 scale-[1.5] hover:scale-[2]  transition-all duration-200`}
        onClick={prevSlide}
      />
      <MdOutlineKeyboardArrowRight
        className={`${styles.rightArrow} text-white bg-gray-900  rounded-full  opacity-[.1] hover:opacity-50 scale-[1.5] hover:scale-[2]  transition-all duration-200`}
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="cse pic" className={styles.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
