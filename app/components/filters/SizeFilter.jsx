"use client"
import React, { useState, useEffect } from 'react';

function SizeFilter({ onFilterChange }) {
  const [size, setSize] = useState('');
  const [sizeOptions, setSizeOptions] = useState([]);

  useEffect(() => {
    const fetchSizes = async () => {
      const response = await fetch('/api/properties/sizes');
      if (!response.ok) {
        throw new Error('Failed to fetch sizes');
      }
      try {
        const sizes = await response.json();
        setSizeOptions(sizes.sort((a, b) => a - b));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchSizes();
  }, []);

  const handleSizeChange = (e) => {
    const { value } = e.target;
    setSize(value);
    if (onFilterChange) {
      onFilterChange(e);
    }
  };

  return (
    <select name="size" value={ size } onChange={ handleSizeChange } className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-5 outline-none capitalize'>
      <option value="">Size</option>
      { sizeOptions.map((option, index) => (
        <option className='hover:shadow-inner  hover:shadow-dark capitalize' key={ index } value={ option }>{ option } sq ft</option>
      )) }
    </select>
  );
}

export default SizeFilter;
