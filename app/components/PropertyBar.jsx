"use client"
import React, { Suspense } from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'
import { useState } from 'react';

function PropertyBar({ setPropsList, lease, setLoading }) {
    const [allProps, setAllProps] = useState([]);
    // handleFilterChange is a function that takes in filters and sets the properties list
    const handleFilterChange = async (filters) => {
        setLoading(true);
        const queryParams = new URLSearchParams(filters).toString();
        const path = `/api/properties?${queryParams}`;
        console.log(path);
        const response = await fetch(path);
        const data = await response.json();
        setPropsList(data.filter(prop => prop.lease === lease));
        setAllProps(data.filter(prop => prop.lease === lease));
        setLoading(false);
    };

    return (
        <div className="flex gap-3 max-w-container mx-auto w-full pt-5 border-b border-gray-200">
            <Suspense>
                <SearchBar className="flex-grow" handler={ setPropsList } data={ allProps } />
            </Suspense>
            <Filters onFilterChange={handleFilterChange} properties={allProps} setProperties={setPropsList} />
        </div>
    )
}

export default PropertyBar