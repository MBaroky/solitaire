"use client"
import React, { useState, useEffect } from 'react';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: '',
    developer: ''
  });
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function fetchPropertyTypes() {
      const response = await fetch('/api/propertyTypes');
      const data = await response.json();
      setPropertyTypes(data);
    }
    fetchPropertyTypes();
  }, []);

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await fetch('/api/developers');
      const data = await response.json();
      setDevelopers(data);
    }
    fetchDevelopers();
  }, []);

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
  };

  return (
    <div className='flex flex-row py-5 items-stretch gap-3'>
      <select name="propertyType" aria-placeholder='Property Type' value={filters.propertyType} onChange={handleChange} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize'>
        <option value="" className='capitalize'>Property Type</option>
        {propertyTypes.map((type) => (
          <option key={type.id} value={type.name} className='hover:shadow-inner  hover:shadow-dark capitalize'>{type.name}</option>
        ))}
      </select>
      <select name="developer" aria-placeholder='Developer' value={filters.developer} onChange={handleChange} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize'>
        <option value="" className='capitalize'>Developer</option>
        {developers.map((dev) => (
          <option key={dev.id} value={dev.name} className='hover:shadow-inner  hover:shadow-dark capitalize'>{dev.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;