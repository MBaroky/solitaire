import React from "react";
import sectionBg from "@/assets/images/featured-bg.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import CustomButton from "@/components/CustomButton";

function Featured() {
  return (
    <div
      className='w-full bg-dark py-20 bg-top bg-contain bg-no-repeat'
      id='Featured'
      style={{
        backgroundImage: `url(${sectionBg.src})`,
      }}>
      <div className=' featured-content flex justify-center  px-8 py-8 '>
        <div className=' -mt-[8vw] max-w-container flex flex-col md:items-end'>
          <Swiper
            className='w-full'
            loop={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Featured;
