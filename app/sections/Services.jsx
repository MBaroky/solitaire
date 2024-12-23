import React, { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    let controller = new AbortController();
    fetch("api/services", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
    return () => controller?.abort;
  }, []);
  return (
    <div className='w-full bg-dark py-16 px-5'>
      <div className='heading-wrapper mb-7 text-white'>
        <h2 className='text-center w-full text-heading-1 font-gerbil mb-3'>
          Our Services
        </h2>
        <p className='max-w-container mx-auto text-center'>
          Explore the wide range of services we provide to meet all
          your real estate needs
        </p>
      </div>
      <div className='w-full max-w-container mx-auto grid grid-cols-1'>
        {services?.map((service, i) => (
          <>
            <div
              key={i}
              className='w-full flex justify-between items-end gap-3 p-1 py-3'>
              <div>
                <h3 className='text-heading-2 text-gold font-gerbil'>
                  {" "}
                  *{service.title}
                </h3>
                <p className='text-white'>{service.desc}</p>
              </div>
              <img
                src={`/images/services/${service.image}`}
                alt={service.title}
                className='w-70 max-w-full aspect-square'
              />
            </div>
            {i != services.length - 1 && (
              <hr className='w-full bg-white opacity-30 my-3' />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Services;
