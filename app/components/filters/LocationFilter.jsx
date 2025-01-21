"use client"
import React, { useState, useEffect } from 'react';

function LocationFilter({ onFilterChange }) {
  const [location, setLocation] = useState('');
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/properties/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }
        const locations = await response.json();
        setLocationOptions(locations.sort());
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    if (onFilterChange) {
      onFilterChange(e);
    }
  };

  return (
    <>

      <select name="location" value={location} onChange={handleLocationChange} className='bg-white border-0 items-center flex flex-row gap-3 px-5 outline-none capitalize'>
        <option value="">Location</option>
        {locationOptions.map((option, index) => (
          <option className='hover:shadow-inner  hover:shadow-dark capitalize' key={index} value={option.name}>{option.name}</option>
        ))}
      </select>
    </>
  );
}

export default LocationFilter;
