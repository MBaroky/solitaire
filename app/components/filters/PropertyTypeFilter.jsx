"use client"
import React, { useState, useEffect } from 'react';

function PropertyTypeFilter({ onFilterChange }) {
  const [propertyType, setPropertyType] = useState('');
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    async function fetchPropertyTypes() {
      const response = await fetch('/api/propertyTypes');
      const data = await response.json();
      setPropertyTypes(data);
    }
    fetchPropertyTypes();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setPropertyType(value);
    if (onFilterChange) {
      onFilterChange({ propertyType: value });
    }
  };

  return (
    <select name="propertyType" aria-placeholder='Property Type' value={propertyType} onChange={handleChange} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-5 outline-none capitalize'>
      <option value="" className='capitalize'>Property Type</option>
      {propertyTypes.map((type) => (
        <option key={type.id} value={type.name} className='hover:shadow-inner  hover:shadow-dark capitalize'>{type.name}</option>
      ))}
    </select>
  );
}

export default PropertyTypeFilter;