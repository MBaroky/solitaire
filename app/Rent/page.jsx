"use client"
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import PropertyBar from "@/components/PropertyBar";
import Loader from "@/components/Loader";
import React, { useState, useEffect } from "react";

function Rent() {
  const [loading, setLoading] = useState(true);
  const [propsList, setPropsList] = useState([]);

  useEffect(() => {
    const fetchInitialProps = async () => {
      const response = await fetch(`/api/properties?lease=rent`);
      const initialProps = await response.json();
      setPropsList(initialProps.filter(prop => prop.lease === 'rent'));
      setLoading(false);
    };
    fetchInitialProps();
  }, []);
// TODO: show a message when there are no properties
  return (
    <>
      <PropertyBar lease="rent" setPropsList={ setPropsList } setLoading={setLoading} />
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
              ):  <div className="text-xl text-center py-5">No properties found</div> }
            </>
          </div>
        </div>
      )
      }
    </>
  );
}

export default Rent;
