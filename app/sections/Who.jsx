import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useIsVisible } from "@/components/utils/isVisible";

function Who() {
  const counterRef = useRef();
  const counterIsVisible = useIsVisible(counterRef);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    fetch("/api/counters")
      .then(res => res.json())
      .then(data => {
        setCounters(data);
      });
  }, []);
  return (
    <div className='w-full py-20' id='who'>
      <div className='max-w-container mx-auto'>
        <h2 className='text-heading-1 font-gerbil mb-10'>
          Who We Are
        </h2>
        <p>
          Solitaire Real Estate is a leading real estate company with
          decades of experience in property sales, leasing, and
          investment advisory. Our mission is to deliver exceptional
          service through honesty, transparency, and unparalleled
          market knowledge. We’ve built a reputation for excellence,
          assisting clients in making informed decisions with
          confidence.
        </p>
      </div>
      <div
        ref={counterRef}
        className='max-w-container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-3 my-8'>
        {counters
          ? counters.map((counter, i) => (
              <div
                key={i}
                className='font-gerbil text-gold text-center'>
                {counterIsVisible && (
                  <CountUp
                    className='md:text-heading-2 text-2xl mb-3'
                    end={parseInt(counter.number)}
                    suffix={counter.number.replace(
                      parseInt(counter.number),
                      ""
                    )}
                  />
                )}
                <h3>{counter.title}</h3>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}

export default Who;
