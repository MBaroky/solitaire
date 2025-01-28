"use client"
import Developer from '@/components/Developer';
import Loader from '@/components/Loader';
import Pagination, { PaginationItem } from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import useScreenSize from '@/lib/useScreenSize';
import React, { Suspense, useEffect, useState } from 'react'

function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [allDevelopers, setAllDevelopers] = useState([]);
    const [loading, setLoading] = useState();
    const screenSize = useScreenSize();
    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        const fetchMethod = async () => {
            try {
                const response = await fetch('/api/developers');
                const data = await response.json();
                if (isMounted) {
                    setDevelopers(data);
                    setAllDevelopers(data);
                    console.log(data);
                }
            } catch (error) {
                if (isMounted) {
                    console.error(error.message);
                }
            }
        };

        fetchMethod();
        setLoading(false);
        return () => {
            isMounted = false;
        };
    }, [])
  return (
    <div>

                    <div className='w-full max-w-container mx-auto'>

        <Suspense>
          <SearchBar handler={setDevelopers} data={allDevelopers} />
        </Suspense>
        <hr />
                    </div>
            { loading ? (<div className='py-5' > <Loader /> </div>) : (


                <div className='w-full bg-background'>
                    <div className='w-full max-w-container mx-auto'>
                        <div className='grid grid-cols-1 gap-5 my-5'>
                            { developers?.length > 0 ? (
                                <Pagination
                                    className={ `grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 my-5` }
                                    perPage={
                                        screenSize.width < 350
                                            ? 1
                                            : screenSize.width < 767
                                                ? 2
                                                : 6
                                    }>
                                    { developers?.map((developer) => {
                                        return (
                                            <PaginationItem key={ developer.id }>
                                                <Developer data={ developer } />
                                            </PaginationItem>
                                        );
                                    }) }

                                </Pagination>
                            ) : <div className="text-xl text-center py-5">No Developers found</div> }
                        </div>
                    </div>
                </div>
            ) }
    </div>
  )
}

export default Developers