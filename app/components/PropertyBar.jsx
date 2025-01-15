import React, { Suspense } from 'react'
import SearchBar from './SearchBar'

function PropertyBar({ setPropsList, allProps }) {
    return (

        <div className="flex">

            <Suspense>
                <SearchBar handler={ setPropsList } data={ allProps } />
            </Suspense>
        </div>
    )
}

export default PropertyBar