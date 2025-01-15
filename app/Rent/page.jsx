
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import React from "react";
import { createClient } from 'edgedb';


const client = createClient();

async function Rent() {
  // TODO: move this to a query file
  // TODO: add a filter to only show properties with lease = 'Rent'
  // TODO: move the request to API route
  const items = await client.query(`\
  select properties::SingleProperty {
    price,
    propertyType: {name},
    lease,
    propertyArea:{name},
    developer:{name},
    size,
    excerpt,
    featured,
    bedrooms,
    bathrooms,
    images,

    buttons:{text, url},
 };`);
  console.log(items)
  return (
    <div className='w-full bg-background'>
      <div className='w-full max-w-container mx-auto'>
        <>
          { items && (
            <Pagination
              className={ `grid grid-cols-1 gap-5 my-5` }
              perPage={ 3 }>
              { items?.map((item, i) => {
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

export default Rent;
