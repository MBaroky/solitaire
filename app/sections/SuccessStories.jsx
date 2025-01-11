"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import sectionBg from "@/assets/images/success-bg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function SuccessStories() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    let controller = new AbortController();
    fetch("/api/testimonials", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      });
  }, []);
  return (
    <div className='bg-gold w-full py-20'>
      <div className='w-full max-w-container mx-auto px-5'>
        <h2 className='text-heading-1 font-gerbil text-white'>
          Clients Success Stories
        </h2>
        <p className='md:max-w-[50%] text-white mb-8'>
          We believe in long-lasting relationships with our clients.
          Over the years, we have helped thousands of homeowners,
          investors, and businesses achieve their real estate dreams.
          Read our Success Stories to see how we've transformed our
          clients’ experiences into success.
        </p>
      </div>
      <div className='relative flex flex-col w-full featured-slider-wrapper'>
        <Swiper
          className='w-full featured-slider -mx-[50px]'
          modules={[Navigation]}
          // loop={true}
          //   centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}>
          {testimonials?.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className='grid grid-cols-1 md:grid-cols-2 text-white justify-start items-stretch'>
                <img
                  src={`/images/testimonials/${testimonial.building}`}
                  alt='testimonial.building'
                  className='aspect-video block object-cover w-full'
                />
                <div
                  className='max-w-container w-full mx-auto relative bg-contain bg-no-repeat bg-center px-5 flex flex-col justify-between'
                  style={{
                    backgroundImage: `url(${sectionBg.src})`,
                  }}>
                  <div className='text'>
                    <p className='text-lg mb-3'>
                      {testimonial.name} - {testimonial.title}
                    </p>
                    <p>
                      As a first-time buyer, I was unsure about the
                      process of purchasing a home. The team at
                      Solitaire guided me through each step, ensuring
                      everything was transparent and straightforward.
                      Thanks to their support, I’m now the proud owner
                      of my dream apartment in Dubai Marina.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-nav brightness-0 translate-y-[-100%] invert w-44 flex flex-row gap-5 justify-start z-50 md:ml-[51vw] md:-mt-16 md:mb-16 mt-8'>
          <ArrowRight className='swiper-button-next min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowRight>
          <ArrowLeft className='swiper-button-prev min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowLeft>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
