import React from "react";
import Agent from "@/assets/images/agent.jpg";
import CustomButton from "@/components/CustomButton";

function Know() {
  return (
    <div className='w-full py-20 bg-background relative' id='know'>
      {/* background */}
      <div
        className='absolute bg-center bg-cover opacity-10 w-full h-full left-0 top-0 z-0 blur-md'
        style={{
          backgroundImage: `url(${Agent.src})`,
        }}></div>
      <div className='max-w-container mx-auto relative px-5 z-1'>
        <h2 className='text-heading-1 text-dark font-gerbil mb-10'>
          Get To Know Us
        </h2>
        <div className='flex max-md:flex-col flex-row gap-10'>
          <img src={Agent.src} alt='agent' className='max-w-72' />
          <div className='grow'>
            <p className='mb-12'>
              Discover the heart of Coastal Vacation Estates. With
              years of expertise and a passion for delivering
              exceptional vacation experiences, we offer personalized
              services to help you find the perfect getaway. Learn
              more about our commitment to quality and how we make
              your dream vacation a reality.
            </p>

            <CustomButton url={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Know;
