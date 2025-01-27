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
            const response = await fetch(`/api/properties`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            try {
                const initialProps = await response.json();
                setPropsList(initialProps.filter(prop => prop.lease === 'buy'));
             } catch (error) {
                 console.error(error.message);
              }
            setLoading(false);
        };
        fetchInitialProps();
        console.log(propsList)
    }, []);
    return (
        <>


            {
                propsList &&
                <PropertyBar lease="buy" setPropsList={ setPropsList } setLoading={setLoading} apiSource={'properties'}  />

            }
        { loading ? (
            <div className='py-5' > <Loader /> </div>
        ) : (
            <div className='w-full bg-background'>
            <div className='w-full max-w-container mx-auto'>
                <>
                    { propsList.length > 0 ? (
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
                    ) : <div className="text-xl text-center py-5">No properties found</div>}
                </>
            </div>
        </div>
        )
        }
    </>
    );
}

export default Buy;
