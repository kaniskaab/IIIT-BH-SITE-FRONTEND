import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const ImageSlider = ({ slides }) => {
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
    <section className="slider">
      <BsFillArrowLeftCircleFill
        className="left-arrow text-gray-800 opacity-25"
        onClick={prevSlide}
      />
      <BsFillArrowRightCircleFill
        className="right-arrow  text-gray-800 opacity-25"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="cse pic" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
