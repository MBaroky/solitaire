"use client"
import Loader from "@/components/Loader";
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import PropertyBar from "@/components/PropertyBar";
import React, { useState, useEffect } from "react";

function Buy() {
    const [loading, setLoading] = useState(true);
    const [propsList, setPropsList] = useState([]);

    useEffect(() => {
        const fetchInitialProps = async () => {
            const response = await fetch(`/api/properties?lease=buy`);
            const initialProps = await response.json();
            setPropsList(initialProps.filter(prop => prop.lease === 'buy'));
            setLoading(false);
        };
        fetchInitialProps();
    }, []);
    // TODO: show a message when there are no properties
    return (
        <>
        <PropertyBar lease="buy" setPropsList={ setPropsList } setLoading={setLoading}  />
        { loading ? (
            <div className='py-5' > <Loader /> </div>
        ) : (
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
        )
        }
    </>
    );
}

export default Buy;
