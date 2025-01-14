import Loader from "@/components/Loader";
import Pagination, { PaginationItem } from "@/components/Pagination";
import Property from "@/components/Property";
import Link from "next/link";
import React from "react";
import { createClient } from 'edgedb';


const client = createClient();

// const items = [
//   {
//     price: "35,000,000",
//     excerpt:
//       "Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline",
//     propertyArea: "Palm Jumeirah, Dubai",
//     bedrooms: 6,
//     bathrooms: 5,
//     size: 15000,
//     propertyType: "villa",
//     contactInfo: "",
//     images: ["1-01.webp", "1-02.webp", "1-03.webp"],
//     buttons: [
//       { text: "Book  A Viewing", url: "" },
//       { text: "Call", url: "" },
//       { text: "Message", url: "" },
//     ],
//   },
//   {
//     price: "25,000,000",
//     excerpt:
//       "Expansive villas with golf course views, landscaped gardens, and luxurious interiors.",
//     area: "Emirates Hills, Dubai",
//     bedrooms: 8,
//     bathrooms: 6,
//     size: 12000,
//     type: "Apartment",
//     contactInfo: "",
//     images: ["2-01.webp", "2-02.webp", "2-03.webp"],
//     buttons: [
//       { text: "Book  A Viewing", url: "" },
//       { text: "Call", url: "" },
//       { text: "Message", url: "" },
//     ],
//   },
//   {
//     price: "7,500,000",
//     excerpt:
//       "Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline",
//     area: "Palm Jumeirah, Dubai",
//     bedrooms: 5,
//     bathrooms: 5,
//     size: 8500,
//     type: "villa",
//     contactInfo: "",
//     images: ["3-01.webp", "3-02.webp", "3-03.webp"],
//     buttons: [
//       { text: "Book  A Viewing", url: "" },
//       { text: "Call", url: "" },
//       { text: "Message", url: "" },
//     ],
//   },
// ];


async function Rent() {

  const items = await client.query(`\
  select properties::SingleProperty {
    price,
    propertyType,
    lease,
    propertyArea,
    developer,
    size,
    excerpt,
    featured,
    bedrooms,
    bathrooms,
    images,
    buttons,
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
                    <Link href={ `` }>
                      <Property data={ item } />
                    </Link>
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
