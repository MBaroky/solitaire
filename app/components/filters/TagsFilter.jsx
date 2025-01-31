"use client"
import { ChevronDown, FilterIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function TagsFilter({ onFilterChange,  setProperties, properties, apiSource }) {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Fetch tags from the API
    const fetchTags = async () => {
      const response = await fetch(`/api/${apiSource}/tags`);
      if (!response.ok) {
        throw new Error('Failed to fetch tags');
      }
      try {
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTags();
  }, []);
  const handleClick = () => {
    setShowPopup(!showPopup)
  }
  const handleTagChange = (tag) => {
    let updatedTags;
    if (tag === 'all') {
      updatedTags = selectedTags.length === tags.length ? [] : tags.map(t => t.name);
    } else {
      updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    }
    setSelectedTags(updatedTags);
    setProperties(properties.filter(prop => updatedTags.length === 0 || prop.tags.some(tagObj => updatedTags.includes(tagObj.name))));
    // onFilterChange(updatedTags);
  };

  return (
    <div className='relative'>
      <button className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3 outline-none capitalize py-3' onClick={ handleClick }>
        <FilterIcon size={14} /> Tags <ChevronDown size={14} />
        </button>

      { showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]" onClick={ handleClick }>

            <div className='w-full max-w-lg mx-auto absolute bg-background p-4 shadow-lg' onClick={ e => e.stopPropagation() }>
              <div className='flex items-center justify-between'>
              <h3 className='font-gerbil text-lg'>Filter</h3>
              <button className="absolute right-4 text-dark text-xl" onClick={ () => setShowPopup(false) }>×</button>
              </div>
              <hr className='my-2' />
              <div className=' grid max-sm:grid-cols-1 grid-cols-2 gap-2 md:grid-cols-3 [&_input]:mr-2'>

              <div className=''>
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
            </div>
        </div>
      ) }
    </div>
  );
}

export default TagsFilter;
