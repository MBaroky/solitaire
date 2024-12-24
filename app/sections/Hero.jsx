import React from "react";
import heroBg from "@/assets/images/hero-bg.jpg";
import heroBgBottom from "@/assets/images/hero-bg-bottom.svg";
import CustomButton from "@/components/CustomButton";

function Hero() {
  return (
    <div className='w-full bg-dark pb-20' id='hero'>
      {/* {//top secction with image //} */}
      <div
        className='hero-bg bg-cover min-h-[30vw] before:bg-gradient-to-t before:from-dark before:to-transparent before:h-10 before:w-full before:absolute before:bottom-0 before:left-0 relative'
        style={{
          backgroundImage: `url(${heroBg.src})`,
        }}></div>
      <div
        className=' hero-content relative z-10 flex justify-center bg-dark px-8 py-8 bg-bottom bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${heroBgBottom.src})`,
        }}>
        <div className=' -mt-[8vw] max-w-container flex flex-col md:items-end'>
          <h1 className='md:text-[5vw] font-gerbil text-white w-full'>
            Welcome to Solitaire <br /> Real Estate
          </h1>
          <div className='md:w-[50%] md:-mt-14 text-white flex flex-col items-start gap-10'>
            <p>
              At Solitaire Real Estate, we are committed to helping
              you navigate the ever-evolving real estate market with
              confidence. Whether you’re buying your dream home,
              selling a cherished property, or looking for lucrative
              investment opportunities, our expertise and personalized
              approach ensure a seamless experience. With a deep
              understanding of the local market and a dedication to
              excellence, we strive to offer tailored solutions that
              meet your unique needs.
            </p>
            <CustomButton url={"/"} text={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
