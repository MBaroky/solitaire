"use client"
import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
function BedsBathsFilter({ onFilterChange, properties }) {
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [bedroomOptions, setBedroomOptions] = useState([]);
  const [bathroomOptions, setBathroomOptions] = useState([]);

  useEffect(() => {

      const uniqueBedrooms = [...new Set(properties.map(prop => parseInt(prop.bedrooms)))];


      const uniqueBathrooms = [...new Set(properties.map(prop => parseInt(prop.bathrooms)))];

      setBedroomOptions(uniqueBedrooms);
      setBathroomOptions(uniqueBathrooms);

  }, [ properties]);

  const handleBedroomsChange = (e) => {
    const {value} = e.target;
    setBedrooms(value);
    if (onFilterChange) {
      onFilterChange(e);
    }
  };

  const handleBathroomsChange = (e) => {
    const {value} = e.target;
    setBathrooms(value);
    if (onFilterChange) {
      onFilterChange(e);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const componentRef = useRef();
  // close on clicking away
  useEffect(() => {
    document.addEventListener("click", e => {
      if (!componentRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <div className='relative' ref={componentRef}>
      <button onClick={toggleMenu} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize py-2'>
        Beds/Baths <ChevronDown />
      </button>
      {isOpen && (
        <div className='absolute bg-background shadow-lg p-3 mt-2 rounded'>
          <div className='flex flex-row gap-3'>
            <div>

            <label htmlFor="bedrooms">Bedrooms</label>
            <select name="bedrooms" value={bedrooms} onChange={handleBedroomsChange} className='bg-white border border-neutral-300 items-center flex flex-row flex-grow gap-3 p-3 outline-none'>
              <option value="">Not set</option>
              {bedroomOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            </div>
            <div>

            <label htmlFor="bathrooms">Bathrooms</label>
            <select name="bathrooms" value={bathrooms} onChange={handleBathroomsChange} className='bg-white border border-neutral-300 items-center flex flex-row flex-grow gap-3 p-3 outline-none'>
              <option value="">Not set</option>
              {bathroomOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedsBathsFilter;
