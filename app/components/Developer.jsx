import { BedDouble, Expand, MapPin, ShowerHead } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Developer({ data }) {
    return (
        <div className='flex flex-col bg-background'>
            <div className='relative w-full aspect-video'>
                <img
                    className='aspect-video object-cover relative z-[1]'
                    src={ `images/developers/${data?.image}` }
                />
                <div className='absolute w-full h-full left-0 top-0 bg-slate-200 rounded-md animate-pulse z-0'></div>
            </div>
            <div className='p-5 relative'>
                <img className='aspect-square bg-white rounded-full absolute mr-5 max-w-[120px] right-0 top-0 -mt-[60px] z-[2] object-contain' src={`images/developers/${data?.logo}`} alt="" />
                <h3 className='font-gerbil text-xl capitalize'>
                    { data?.name }
                </h3>
                <p className='text-neutral-500 mt-3'>
                    { data?.excerpt }
                </p>
            </div>
        </div>
    )
}

export default Developer