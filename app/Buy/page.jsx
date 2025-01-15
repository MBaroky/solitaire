"use client"
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import React, { useEffect, useState } from "react";

function Buy() {
    const [propsList, setPropsList] = useState([]);
    useEffect(() => {
        //create the abort controller
        let controller = new AbortController();
        fetch("/api/properties", { signal: controller.signal })
            .then(res => res.json())
            .then(data => {
                setPropsList(data.filter(prop => prop.lease === "buy"));
            });
    }, []);
    return (
        <div className='w-full bg-background'>
            <div className='w-full max-w-container mx-auto'>
                <>
                    { propsList && (
                        <Pagination
                            className={ `grid grid-cols-1 gap-5 my-5` }
                            perPage={ 3 }>
                            { propsList?.map((item, i) => {
                                return (
                                    <PaginationItem key={ i }>
                                        <Property data={ item } />
                                    </PaginationItem>
                                );
                            }) }
                        </Pagination>
                    ) }
                </>
            </div>
        </div>
    );
}

export default Buy;
