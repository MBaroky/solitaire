import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
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
    return () => controller?.abort();
  }, []);
  return (
    <div className='bg-gold w-full p-20'>
      <div className='w-full max-w-container mx-auto'>
        <h2 className='text-heading-1 font-gerbil text-white'>
          Clients Success Stories
        </h2>
        <p className='md:max-w-[50%] text-white'>
          We believe in long-lasting relationships with our clients.
          Over the years, we have helped thousands of homeowners,
          investors, and businesses achieve their real estate dreams.
          Read our Success Stories to see how we've transformed our
          clients’ experiences into success.
        </p>
      </div>
      <div className='relative flex flex-col max-w-full featured-slider-wrapper'>
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
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <img
                  src={`/images/testimonials/${testimonial.building}`}
                  alt='testimonial.building'
                  className='aspect-square'
                />
                <p>
                  {testimonial.name} - {testimonial.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='max-w-container w-full mx-auto relative'>
          <div className='custom-nav brightness-0 absolute top-0 left-0  invert mt-10 w-44 flex flex-row gap-5 justify-start z-50 '>
            <ArrowRight className='swiper-button-next min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowRight>
            <ArrowLeft className='swiper-button-prev min-h-16 min-w-16 p-3 rounded-full border border-white'></ArrowLeft>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
