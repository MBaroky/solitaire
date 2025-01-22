"use client"
import React, { useState, useEffect } from 'react';

function TagsFilter({ onFilterChange }) {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  // TODO: revise code (api calls and states and useeffect)
  // TODO: make it open in popup not dropdown
  // TODO: fix layout after so many filters
  useEffect(() => {
    // Fetch tags from the API
    const fetchTags = async () => {
      const response = await fetch('/api/properties/tags');
      if (!response.ok) {
        throw new Error('Failed to fetch tags');
      }
      try {
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error(error.message);
      }
      // const data = await response.json();
      // setTags(data);
    };
    fetchTags();
  }, []);

  const handleTagChange = (tag) => {
    let updatedTags;
    if (tag === 'all') {
      if (selectedTags.includes('all')) {
        updatedTags = [];
      } else {
        updatedTags = tags.map(t => t.name);
      }
    } else {
      updatedTags = selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag];
    }
    setSelectedTags(updatedTags);
    onFilterChange(updatedTags);
  };

  return (
    <div className='relative'>
      <button onClick={ () => setShowPopup(!showPopup) }>Tags</button>
      { showPopup && (
        <div className='absolute bg-white p-4 shadow-lg'>
          <div>
            <label>
              <input
                type='checkbox'
                checked={ selectedTags.length === tags.length }
                onChange={ () => handleTagChange('all') }
              />
              All
            </label>
          </div>
          { tags.map(tag => (
            <div key={ tag.id }>
              <label>
                <input
                  type='checkbox'
                  checked={ selectedTags.includes(tag.name) }
                  onChange={ () => handleTagChange(tag.name) }
                />
                { tag.name }
              </label>
            </div>
          )) }
        </div>
      ) }
    </div>
  );
}

export default TagsFilter;
