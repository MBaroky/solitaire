"use client"
import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';

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
  }, [ isOpen, properties ]);
  useEffect(() => {
    setProperties(properties.filter(prop => parseInt(prop.price) >= minPrice && parseInt(prop.price) <= maxPrice));
  }, [ minPrice, maxPrice]);

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxPrice( e.target.value);
};

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// TODO: format the numbers for better ux
// TODO: revise the code and change the dependency on the open state
  return (
    <div className='relative'>
      <button onClick={toggleMenu} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize py-2'>
        Price <ChevronDown />
      </button>
      {isOpen && (
        <div className='absolute bg-background shadow-lg p-3 mt-2 rounded'>
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
