import React from "react";

import why1 from "@/assets/images/why-1.webp";
import why2 from "@/assets/images/why-2.jpg";
import why3 from "@/assets/images/why-3.jpg";
import why4 from "@/assets/images/why-4.jpg";

function Why() {
  const content = [
    {
      id: "01",
      text: "Expert Guidance: Our team of seasoned professionals offers deep insights into the real estate market.",
      img: why1,
    },
    {
      id: "02",
      text: "Client-Centered Approach: We prioritize your goals, whether you're buying, selling, or investing.",
      img: why2,
    },
    {
      id: "03",
      text: "Market Knowledge: With extensive knowledge of the latest trends and developments, we provide unmatched expertise in property transactions.",
      img: why3,
    },
    {
      id: "04",
      text: "Trust & Integrity: Our business is built on trust, and we are committed to transparency in all our dealings.",
      img: why4,
    },
  ];
  return (
    <div className='w-full bg-background py-16'>
      <div className='max-w-container w-full mx-auto'>
        <h2 className='text-heading-1 text-dark font-gerbil'>
          Why Choose Us
        </h2>
        <p className='text-dark text-2xl mb-8'>
          At Solitaire Real Estate, we take pride in:
        </p>
        <div className='services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {content?.map((column, i) => (
            <div
              key={i}
              className='p-8 border bg-cover bg-center hover:!bg-none  hover:border-gold  text-white hover:text-gold flex flex-col gap-32 justify-between relative group'
              style={{
                backgroundImage: `url(${column.img.src})`,
              }}>
              <span
                className='absolute w-full h-full z-0 left-0 top-0 group-hover:hidden'
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(27, 57, 66, 0.45) 0%, rgba(27, 57, 66, 0) 50%, rgba(27, 57, 66, 0.45) 100%)",
                }}></span>
              <p className='z-1 relative'>{column.text}</p>
              <h2 className='z-1 relative font-gerbil text-heading-1'>
                {column.id}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
