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
  }, [ properties ]);
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

  return (
    <div className='relative'>
      <button onClick={toggleMenu} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize py-2'>
        Price <ChevronDown />
      </button>
      {isOpen && (
        <div className='absolute bg-white shadow-lg p-3 mt-2 rounded'>
          <div className='flex flex-row gap-3'>
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinChange}
              className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none'
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxChange}
              className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceFilter;
