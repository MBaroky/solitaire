import { BedDouble, Expand, MapPin, ShowerHead } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Project({ data }) {
    return (
        <div className='flex flex-col'>
            <div className='relative w-full aspect-video'>
                <img
                    className='aspect-video object-cover relative z-[1]'
                    src={ `images/projects/${data?.images[0]}` }
                />
                <div className="absolute font-gerbil text-lg text-dark bg-background left-0 bottom-0 z-[1] py-2 px-5">
                    AED { data.price}
                </div>
                <div className="absolute text-sm text-white bg-neutral-950/50 right-5 top-5 z-[1] px-3 leading-6">
                    { data.date}
                </div>
                <div className='absolute w-full h-full left-0 top-0 bg-slate-200 rounded-md animate-pulse z-0'></div>
            </div>
            <div className='p-5'>
                <h3 className='font-gerbil text-xl'>
                    { data?.title }
                </h3>
                <p className='text-neutral-500 mt-3'>
                    { data?.excerpt }
                </p>
            </div>
            <div className='p-5 gap-6 flex flex-col text-dark w-full flex-grow'>

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
                <hr />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full flex-grow'>
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
                    { data.tags?.map((tag, i) => (
                        <span key={ i }>{ tag.name }</span>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Project