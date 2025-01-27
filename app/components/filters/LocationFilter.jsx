"use client"
import { MapPin } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function LocationFilter({ onFilterChange }) {
  const [location, setLocation] = useState('');
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(`/api/locations`);
      if (!response.ok) {
        throw new Error('Failed to fetch locations');
      }
      try {
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

      <label
        className='bg-white border-0 items-center flex flex-row gap-3 px-3'
        htmlFor=''>
        <select name="location" value={ location } onChange={ handleLocationChange } className='bg-transparent border-0 outline-none appearance-none capitalize'>
          <option value="">Locations</option>
          { locationOptions.map((option, index) => (
            <option className='hover:shadow-inner  hover:shadow-dark capitalize' key={ index } value={ option.name }>{ option.name }</option>
          )) }
        </select> <MapPin size={14} />
      </label>
    </>
  );
}

export default LocationFilter;
