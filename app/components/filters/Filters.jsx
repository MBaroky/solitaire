"use client"
import React, { useState } from 'react';
import PropertyTypeFilter from './PropertyTypeFilter';
import DeveloperFilter from './DeveloperFilter';
import PriceFilter from './PriceFilter';
import BedsBathsFilter from './BedsBathsFilter';
import SizeFilter from './SizeFilter';
import LocationFilter from './LocationFilter';
import TagsFilter from './TagsFilter';

function Filters({ onFilterChange, properties, setProperties, apiSource }) {
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

  const handleTagsChange = (selectedTags) => {
    setFilters({
      propertyType: '',
      developer: '',
      tags: selectedTags
    });
    if (onFilterChange) {
      onFilterChange({
        propertyType: '',
        developer: '',
        tags: selectedTags
      });
    }
  }

  return (
    <div className='flex flex-row py-5 items-stretch gap-3'>
      <LocationFilter apiSource={apiSource} onFilterChange={handleChange} />
      <PropertyTypeFilter onFilterChange={handleChange} />
      <PriceFilter onFilterChange={onFilterChange} properties={properties} setProperties={setProperties} />
      <BedsBathsFilter onFilterChange={handleChange} properties={properties}  />
      <SizeFilter apiSource={apiSource} onFilterChange={handleChange} properties={properties} />
      <DeveloperFilter onFilterChange={handleChange} />
      <TagsFilter apiSource={apiSource} properties={properties} onFilterChange={handleTagsChange} setProperties={setProperties} />
    </div>
  );
}

export default Filters;