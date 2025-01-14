import { BedDouble, Expand, MapPin, ShowerHead } from "lucide-react";
import Link from "next/link";
import React from "react";
function Property({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='grid grid-cols-2'>
        <div>
          <img
            className='aspect-[0.65] object-cover'
            src={ `images/properties/${data.images[0]}` }
            alt=''
          />
        </div>
        <div>
          <img
            className='aspect-[1.3] object-cover'
            src={ `images/properties/${data.images[1]}` }
            alt=''
          />
          <img
            className='aspect-[1.3] object-cover'
            src={ `images/properties/${data.images[2]}` }
            alt=''
          />
        </div>
      </div>
      <div className='p-8 gap-6 flex flex-col text-dark'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-2xl font-gerbil'>AED { data.price }</h2>
          <h5 className='capitalize'>{ data.propertyType }</h5>
        </div>
        <p className='text-neutral-500'>{ data.excerpt }</p>
        <div className='flex flex-row gap-3'>
          <MapPin className='w-8' /> { data.propertyArea }
        </div>
        <div className='flex flex-row gap-3'>
          <BedDouble className='w-8' /> { data.bedrooms } Bedrooms
        </div>
        <div className='flex flex-row gap-3'>
          <ShowerHead className='w-8' /> { data.bathrooms } Bathrooms
        </div>
        <div className='flex flex-row gap-3'>
          <Expand className='w-8' />{ " " }
          { data.size.toLocaleString("en", { useGrouping: true }) } sq.
          ft.
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          { data.buttons.map((button, i) => (
            <Link
              href={ button.url }
              className='bg-gold w-full text-white p-3 text-center'
              Key={ i }>
              { button.text }
            </Link>
          )) }
        </div>
      </div>
    </div>
  );
}

export default Property;
