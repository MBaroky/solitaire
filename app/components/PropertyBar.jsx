"use client"
import React, { Suspense, useEffect } from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'
import { useState } from 'react';

function PropertyBar({ setPropsList, lease, setLoading }) {
    const [allProps, setAllProps] = useState([]);

    // handleFilterChange is a function that takes in filters and sets the properties list
    const handleFilterChange = async (filters) => {
        if(filters){

            setLoading(true);
            const queryParams = new URLSearchParams(filters).toString();
            const path = `/api/properties?${queryParams}`;
            console.log(path);

            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            try {
                const data = await response.json();
                setPropsList(data.filter(prop => prop.lease === lease));
                setAllProps(data.filter(prop => prop.lease === lease));
            }catch (error) {
                console.error(error.message);
            }
            // const data = await response.json();
            setLoading(false);
        }
    };
    useEffect(() => {
        handleFilterChange({});
    },[]);

    return (
        <div className="flex gap-3 max-w-container mx-auto w-full pt-5 border-b border-gray-200">

            <Suspense>
                <SearchBar handler={ setPropsList } data={ allProps } />
            </Suspense>
            {console.log(allProps)}
            <Filters onFilterChange={handleFilterChange} properties={allProps} setProperties={setPropsList} />
        </div>
    )
}

export default PropertyBar