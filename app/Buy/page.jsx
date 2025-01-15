"use client"
import Loader from "@/components/Loader";
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import PropertyBar from "@/components/PropertyBar";
import React, { useEffect, useState } from "react";

function Buy() {
    const [loading, setLoading] = useState(false);
    const [propsList, setPropsList] = useState([]);
    const [allProps, setAllProps] = useState([]);
    useEffect(() => {
        //create the abort controller
        setLoading(true);
        let controller = new AbortController();
        fetch("/api/properties", { signal: controller.signal })
            .then(res => res.json())
            .then(data => {
                const forSale = data.filter(prop => prop.lease === "buy");
                setPropsList(forSale);
                setAllProps(forSale);
                setLoading(false);
            });
    }, []);
    return (
        <>
            { loading ? (
                <div className='py-5' > <Loader /> </div>
            ) : (

                <div className='w-full bg-background'>
                    <div className='w-full max-w-container mx-auto'>
                        <PropertyBar setPropsList={ setPropsList } allProps={ allProps } />
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
            )
            }
        </>
    );
}

export default Buy;
