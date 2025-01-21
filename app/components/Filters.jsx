"use client"
import React, { useState } from 'react';
import PropertyTypeFilter from './filters/PropertyTypeFilter';
import DeveloperFilter from './filters/DeveloperFilter';
import PriceFilter from './filters/PriceFilter';
import BedsBathsFilter from './filters/BedsBathsFilter';
import SizeFilter from './filters/SizeFilter';
import LocationFilter from './filters/LocationFilter';

function Filters({ onFilterChange, properties, setProperties }) {
  const [filters, setFilters] = useState({
    propertyType: '',
    developer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
    if (onFilterChange) {
      onFilterChange({
        ...filters,
        [name]: value
      });
    }
  }
  return (
    <div className='flex flex-row py-5 items-stretch gap-3'>

      {/* <LocationFilter onFilterChange={handleChange} /> */}
      <PropertyTypeFilter onFilterChange={handleChange} />
      <PriceFilter onFilterChange={onFilterChange} properties={properties} setProperties={setProperties} />
      <BedsBathsFilter onFilterChange={handleChange} properties={properties}  />
      <SizeFilter onFilterChange={handleChange} properties={properties} />
      <DeveloperFilter onFilterChange={handleChange} />
    </div>
  );
}

export default Filters;