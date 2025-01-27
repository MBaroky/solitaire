"use client"
import React, { Suspense, useEffect } from 'react'
import SearchBar from './SearchBar'
import Filters from './filters/Filters'
import { useState } from 'react';
import SearchBarLocation from './SearchBarLocation';

function PropertyBar({ setPropsList, lease, setLoading, apiSource }) {
    const [allProps, setAllProps] = useState([]);

    // handleFilterChange is a function that takes in filters and sets the properties list
    const handleFilterChange = async (filters) => {
        if(filters){

            setLoading(true);
            const queryParams = new URLSearchParams(filters).toString();
            const path = `/api/${apiSource}?${queryParams}`;
            console.log(path);

            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            try {
                const data = await response.json();
                setPropsList(lease?data.filter(prop => prop.lease === lease): data);
                setAllProps(lease? data.filter(prop => prop.lease === lease):data);
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
        <div className="flex flex-wrap gap-3 max-w-container mx-auto w-full pt-5 border-b border-gray-200 !text-xs">

            <Suspense>
                <SearchBar handler={ setPropsList } data={ allProps } />
            </Suspense>
            <Filters apiSource={apiSource} className="flex flex-row flex-grow justify-between" onFilterChange={handleFilterChange} properties={allProps} setProperties={setPropsList} />
        </div>
    )
}

export default PropertyBar