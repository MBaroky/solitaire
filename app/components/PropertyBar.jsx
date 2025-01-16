"use client"
import React, { Suspense, useEffect } from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'

function PropertyBar({ setPropsList, allProps, lease }) {
    const handleFilterChange = async (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(`/api/properties?${queryParams}`);
        const data = await response.json();
        setPropsList(data.filter(prop => prop.lease === lease));
    };
    useEffect(() => {
        handleFilterChange()
    },[])

    return (
        <div className="flex gap-3">
            <Suspense>
                <SearchBar handler={ setPropsList } data={ allProps } />
            </Suspense>
            <Filters onFilterChange={handleFilterChange} />
        </div>
    )
}

export default PropertyBar