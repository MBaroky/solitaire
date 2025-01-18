"use client"
import React from 'react';
import PropertyTypeFilter from './filters/PropertyTypeFilter';
import DeveloperFilter from './filters/DeveloperFilter';
import PriceFilter from './filters/PriceFilter';

function Filters({ onFilterChange, properties, setProperties }) {
  const handleFilterChange = (filter) => {
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className='flex flex-row py-5 items-stretch gap-3'>
      <PropertyTypeFilter onFilterChange={handleFilterChange} />
      <DeveloperFilter onFilterChange={handleFilterChange} />
      <PriceFilter onFilterChange={handleFilterChange} properties={properties} setProperties={setProperties} />
    </div>
  );
}

export default Filters;