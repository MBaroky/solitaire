"use client"
import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

function PriceFilter({ onFilterChange, properties, setProperties }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const returnPricesList = () => {
    const prices = properties.map(prop => parseInt(prop.price));
    return prices;
  }
  useEffect(() => {
    if (properties.length > 0) {
      setMinPrice(Math.min(...returnPricesList()));
      setMaxPrice(Math.max(...returnPricesList()));
    }
  }, [properties]);
  // useEffect(() => {
  //   setProperties(properties.filter(prop => parseInt(prop.price) >= minPrice && parseInt(prop.price) <= maxPrice));
  // }, [ minPrice, maxPrice]);

  const priceRef = useRef();
  // close on clicking away
  useEffect(() => {

      document.addEventListener("click", e => {
        if (!priceRef.current.contains(e.target)) {
          setIsOpen(false);
        }
        // console.log(priceRef)
      });

      return () => {
        document.removeEventListener("click", () => {
          setIsOpen(false);
        });
      }

  }, []);
  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
    setProperties(properties.filter(prop => parseInt(prop.price) >= minPrice && parseInt(prop.price) <= maxPrice));
  };

  const handleMaxChange = (e) => {
    setMaxPrice( e.target.value);
    setProperties(properties.filter(prop => parseInt(prop.price) >= minPrice && parseInt(prop.price) <= maxPrice));
};

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// TODO: format the numbers for better ux
  return (
    <div className='relative' ref={priceRef}>
      <button onClick={toggleMenu} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize py-3'>
        Price <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className='absolute bg-background shadow-lg p-3 mt-2 rounded right-0 left-auto'>
          <div className='flex flex-row gap-3'>
            <div>
              <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              name="minPrice"
              placeholder="Not set"
              value={minPrice}
              onChange={handleMinChange}
              className='bg-white border border-bg-neutral-300 items-center flex flex-row flex-grow gap-3 p-3 outline-none'
            />
            </div>
            <div>
              <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Not set"
              value={maxPrice}
              onChange={handleMaxChange}
              className='bg-white border border-bg-neutral-300 items-center flex flex-row flex-grow gap-3 p-3 outline-none'
            />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceFilter;
