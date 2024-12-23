import React from "react";

import why2 from "@/assets/images/why-2.jpg";
import why3 from "@/assets/images/why-3.jpg";
import why4 from "@/assets/images/why-4.jpg";

function Why() {
  const content = [
    {
      id: "01",
      text: "Expert Guidance: Our team of seasoned professionals offers deep insights into the real estate market.",
      img: why2,
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
    <div className='w-full bg-background p-16'>
      <div className='max-w-container mx-auto'>
        <h2 className='text-heading-1 text-dark font-gerbil'>
          Why Choose Us
        </h2>
        <p className='text-dark text-2xl'>
          At Solitaire Real Estate, we take pride in:
        </p>
      </div>
    </div>
  );
}

export default Why;
