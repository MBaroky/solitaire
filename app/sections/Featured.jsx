"use client";
import React, { useState, useEffect } from "react";
import sectionBg from "@/assets/images/featured-bg.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import CustomButton from "@/components/CustomButton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loader from "@/components/Loader";

function Featured() {
  const [propsList, setPropsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("api/properties")
      .then(res => res.json())
      .then(data => {
        setPropsList(data.filter(prop => prop.featured === true));
      });
      setLoading(false);
  }, []);
  const onSlideChange = swiper => {
    // console.log("slide change", swiper.activeIndex);
  }
  return (
    <>
    {loading ? <div className='flex items-center justify-center w-full absolute left-0 top-0'>
      <Loader />
    </div>
    :

    <div
      className='w-full bg-dark pt-20 bg-top bg-contain bg-no-repeat'
      id='Featured'
      style={ {
        backgroundImage: `url(${sectionBg.src})`,
      } }>
      <div className=' featured-content py-8 '>
        <div className='relative flex flex-col max-w-full featured-slider-wrapper overflow-x-clip'>
          <Swiper
            className='w-full featured-slider -mx-[50px]'
            modules={ [Navigation, Autoplay] }
            // loop={true}
            centeredSlides={ true }
            centeredSlidesBounds={ true }
            spaceBetween={ 50 }
            slidesPerView={ 2 }
            initialSlide={ 1 }
            autoplay={ { delay: 5000 } }
            navigation={ {
              nextEl: ".featured-swiper-button-next",
              prevEl: ".featured-swiper-button-prev",
            } }
            // watchOverflow = {false}
            onSlideChange={ onSlideChange }
            onSwiper={ swiper => swiper.autoplay.start() }>
            { propsList &&
              propsList.map(prop => (
                <SwiperSlide className='' key={ prop.id }>
                  <img
                    className='aspect-video object-cover w-full'
                    src={ `/images/properties/${prop.images[0]}` }
                    alt={ prop.images[0] }
                  />
                </SwiperSlide>
              )) }
          </Swiper>
          <div className='max-w-container w-full mx-auto relative'>
            <div className='custom-nav brightness-0 absolute top-0 left-0  invert mt-10 w-44 flex flex-row gap-5 justify-start z-50 '>
              <button className="after:hidden after:max-w-0 featured-swiper-button-prev">

                <ArrowLeft className=' min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowLeft>
              </button>
              <button className="after:hidden after:max-w-0 featured-swiper-button-next">

                <ArrowRight className=' min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowRight>
              </button>
            </div>
          </div>
          <h2 className='text-heading-1 w-full absolute left-0 top-[50%] translate-y-[-50%] text-white font-gerbil z-30 text-center drop-shadow-lg pointer-events-none'>
            Featured Properties
          </h2>
        </div>
        {/* endof featured-slider-wrapper */ }
        <div className='relative z-50 max-w-40 mx-auto flex justify-center md:-mt-10'>
          <CustomButton
            className=''
            url='/Featured'
            text='Discover All'
          />
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Featured;
