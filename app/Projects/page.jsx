"use client"
import Loader from '@/components/Loader';
import Pagination, { PaginationItem } from '@/components/Pagination';
import Project from '@/components/Project';
import PropertyBar from '@/components/PropertyBar';
import useScreenSize from '@/lib/useScreenSize';
import React, { useEffect, useState } from 'react'

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState();
    const screenSize = useScreenSize();
    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                if (isMounted) {
                    setProjects(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
                    console.log(data);
                }
            } catch (error) {
                if (isMounted) {
                    console.error(error.message);
                }
            }
        };

        fetchProjects();
        setLoading(false);
        return () => {
            isMounted = false;
        };
    }, [])
    return (
        <div>
            {
                projects &&
                <PropertyBar lease="" setPropsList={ setProjects } setLoading={setLoading} apiSource={'projects'}  />

            }
            { loading ? (<div className='py-5' > <Loader /> </div>):(


            <div className='w-full bg-background'>
                <div className='w-full max-w-container mx-auto'>
                    <div className='grid grid-cols-1 gap-5 my-5'>
                        { projects?.length > 0 ? (
                            <Pagination
                            className={`grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 my-5`}
                perPage={
                  screenSize.width < 350
                    ? 1
                    : screenSize.width < 767
                    ? 2
                    : 6
                }>
                                { projects?.map((project) => {
                                    return (
                                        <PaginationItem key={ project.id }>
                                            <Project data={ project } />
                                        </PaginationItem>
                                    );
                                }) }
                            </Pagination>
                        ) : <div className="text-xl text-center py-5">No projects found</div> }
                    </div>
                </div>
            </div>
            ) }
        </div>
    )
}

export default Projects