import React from 'react'

function Area({ data }) {
    return (
        <div className='flex flex-col bg-background'>
            <div className='relative w-full aspect-video'>
                <img
                    className='aspect-video object-cover relative z-[1]'
                    src={ `images/Areas/${data?.image}` }
                />
                <div className='absolute w-full h-full left-0 top-0 bg-slate-200 rounded-md animate-pulse z-0'></div>
            </div>
            <div className='p-5 relative'>
                <h3 className='font-gerbil text-xl capitalize'>
                    { data?.name }
                </h3>
            </div>
        </div>
    )
}

export default Area