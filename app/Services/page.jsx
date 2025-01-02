"use client";
import heroBg from "@/assets/images/services-bg.jpg";
import MoveUpRight from "@/assets/images/arrow-up-right.svg";
import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let controller = new AbortController();
    fetch("api/services", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
    return () => controller?.abort();
  }, []);
  return (
    <div>
      <div className='hero'>
        <div
          className='hero-bg bg-center bg-cover min-h-[30vw] before:bg-gradient-to-t before:from-dark before:from-30% before:to-transparent before:h-[60%] before:w-full before:absolute before:bottom-0 before:left-0 relative pt-[15vw] leading-loose'
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}>
          <div className=' hero-content mx-auto max-w-container relative z-10 flex  px-8 py-8'>
            <div className=''>
              <h1 className='text-heading-2 font-gerbil text-white w-full'>
                Your Partner for Every Step of the Journey
              </h1>
              <div className=' text-white flex flex-col items-start gap-10'>
                <p>
                  Explore our extensive range of services crafted to
                  meet all your needs, delivering <br /> innovative,
                  effective solutions to support you every step of the
                  way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-background'>
        <div className='w-full max-w-container mx-auto py-12'>
          {loading ? (
            <div className='py-5'>
              <Loader />
            </div>
          ) : (
            <>
              {services
                ? services.map((service, i) => (
                    <div key={i}>
                      <div className='flex flex-col md:flex-row items-center justify-between px-8 py-3'>
                        <div className='w-full flex flex-col md:flex-row justify-start items-end gap-3'>
                          <img
                            src={`/images/services/${service.image}`}
                            alt={service.title}
                            className='w-40 max-w-full aspect-square'
                          />
                          <div className='text-dark max-w-screen-sm'>
                            <h3 className='text-2xl font-gerbil leading-loose'>
                              {service.title}
                            </h3>
                            <p className=''>{service.desc}</p>
                          </div>
                        </div>

                        <img
                          src={MoveUpRight.src}
                          alt='move up right'
                          className='w-24'
                        />
                      </div>
                      {i != services.length - 1 && (
                        <hr className='w-full bg-transparent border-transparent opacity-30 my-3' />
                      )}
                    </div>
                  ))
                : ""}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
