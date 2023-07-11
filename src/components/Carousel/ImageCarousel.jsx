import React from 'react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './carousel.css';

const slides = [
  {
    image: 'https://miro.medium.com/max/828/1*KSHxjkvPTBkAhTkRuNoObw.png',
    index: 1,
  },
  {
    image:
      'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8&w=1000&q=80',
    index: 2,
  },
  {
    image: 'https://wallpaperaccess.com/full/84248.png',
    index: 3,
  },
];

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const ImageCarousel = () => {
  return (
    <Swiper
      id="swiper"
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      loop
      navigation
      style={{ padding: '20px' }}
      className="z-[100]"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={`slide-${slide.index}`}
            style={{ listStyle: 'none' }}
          >
            <div className="slide">
              <img src={slide.image} alt="slider" style={{ width: '100%' }} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
