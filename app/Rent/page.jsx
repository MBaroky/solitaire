"use client"
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import PropertyBar from "@/components/PropertyBar";
import Loader from "@/components/Loader";
import React, { useState } from "react";

function Rent() {
  const [loading, setLoading] = useState(false);
  const [propsList, setPropsList] = useState([]);
  return (
    <>
        <PropertyBar lease="rent" setPropsList={ setPropsList } setLoading={setLoading} />
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

export default Rent;
