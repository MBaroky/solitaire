"use client"
import React, { useState, useEffect } from 'react';

function DeveloperFilter({ onFilterChange }) {
  const [developer, setDeveloper] = useState('');
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await fetch('/api/developers');
      const data = await response.json();
      setDevelopers(data);
    }
    fetchDevelopers();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setDeveloper(value);
    if (onFilterChange) {
      onFilterChange({ developer: value });
    }
  };

  return (
    <select name="developer" aria-placeholder='Developer' value={developer} onChange={handleChange} className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-5 outline-none capitalize'>
      <option value="" className='capitalize'>Developer</option>
      {developers.map((dev) => (
        <option key={dev.id} value={dev.name} className='hover:shadow-inner  hover:shadow-dark capitalize'>{dev.name}</option>
      ))}
    </select>
  );
}

export default DeveloperFilter;
