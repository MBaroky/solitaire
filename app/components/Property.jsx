import { BedDouble, Expand, MapPin, ShowerHead } from "lucide-react";
import Link from "next/link";
import React from "react";
import PropGallery from "./PropGallery";
function Property({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='grid grid-cols-2'>
        <PropGallery data={ data.images } />
      </div>
      <div className='p-8 gap-6 flex flex-col text-dark'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-2xl font-gerbil'>AED { data.price.toLocaleString("en", { useGrouping: true }) }</h2>
          <h5 className='capitalize'>{ data.propertyType.name }</h5>
        </div>
        <p className='text-neutral-500'>{ data.excerpt }</p>
        <div className='flex flex-row gap-3'>
          <MapPin className='w-8' /> { data.propertyArea.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }
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
              href={ button.url ? button.url : "" }
              className='bg-gold w-full text-white p-3 text-center'
              key={ i }>
              { button.text }
            </Link>
          )) }
        </div>
        <div className="sr-only">
          {data.tags?.map((tag, i) => (
            <span key={i}>{tag.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Property;
