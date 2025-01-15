"use client"
import React, { useState } from 'react'

function PropGallery({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = data.map(item => `images/properties/${item}`);

    const openLightbox = (index) => {
        setIsOpen(true);
        setPhotoIndex(index);
    };

    const closeLightbox = () => setIsOpen(false);

    const showPrevImage = (e) => {
        e.stopPropagation();
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setPhotoIndex((photoIndex + 1) % images.length);
    };

    return (
        <>
            <div>
                <img
                    className='aspect-[0.65] object-cover'
                    src={ images[0] }
                    alt=''
                    onClick={ () => openLightbox(0) }
                />
            </div>
            <div>
                <img
                    className='aspect-[1.3] object-cover'
                    src={ images[1] }
                    alt=''
                    onClick={ () => openLightbox(1) }
                />
                <img
                    className='aspect-[1.3] object-cover'
                    src={ images[2] }
                    alt=''
                    onClick={ () => openLightbox(2) }
                />
            </div>
            { isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]" onClick={ closeLightbox }>
                    <button className="absolute top-2 right-4 text-white text-6xl" onClick={ closeLightbox }>×</button>
                    <button className="absolute left-4 text-white text-8xl" onClick={ showPrevImage }>‹</button>
                    <img src={ images[photoIndex] } className="max-w-[90%] max-h-[90%]" alt='' onClick={ (e) => e.stopPropagation() } />
                    <button className="absolute right-4 text-white text-8xl" onClick={ showNextImage }>›</button>
                </div>
            ) }
        </>
    )
}

export default PropGallery