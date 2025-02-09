"use client"
import React, { useState, useEffect } from 'react';

function DeveloperFilter({ onFilterChange }) {
  const [developer, setDeveloper] = useState('');
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await fetch('/api/developers');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      try {
        const data = await response.json();
        setDevelopers(data);
      }catch (error) {
        console.error(error.message);
      }
      // const data = await response.json();
      // setDevelopers(data);
    }
    fetchDevelopers();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setDeveloper(value);
    if (onFilterChange) {
      onFilterChange(e);
    }
  };

  return (
    <select name="developer" aria-placeholder='Developer' value={developer} onChange={handleChange} className='bg-white border-0 items-center flex flex-row flex-grow outline-none capitalize'>
      <option value="" className='capitalize'>Developer</option>
      {developers.map((dev) => (
        <option key={dev.id} value={dev.name} className='hover:shadow-inner  hover:shadow-dark capitalize'>{dev.name}</option>
      ))}
    </select>
  );
}

export default DeveloperFilter;
