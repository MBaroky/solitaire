"use client"
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import PropertyBar from "@/components/PropertyBar";
import Loader from "@/components/Loader";
import React, { Suspense, useEffect, useState } from "react";

function Rent() {
  const [loading, setLoading] = useState(false);
  const [propsList, setPropsList] = useState([]);
  const [allProps, setAllProps] = useState([]);
  // useEffect(() => {
  //   //create the abort controller
  //   let controller = new AbortController();
  //   setLoading(true);
  //   fetch("/api/properties", { signal: controller.signal })
  //     .then(res => res.json())
  //     .then(data => {
  //       const forRent = data.filter(prop => prop.lease === "rent");
  //       setPropsList(forRent);
  //       setAllProps(forRent);
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <>
      { loading ? (
        <div className='py-5' > <Loader /> </div>
      ) : (

        <div className='w-full bg-background'>
          <div className='w-full max-w-container mx-auto'>
            <PropertyBar lease="rent" setPropsList={ setPropsList } allProps={ allProps } />
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

export default Rent;
