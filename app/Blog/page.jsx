"use client";
import Loader from "@/components/Loader";
import Pagination, { PaginationItem } from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import useScreenSize from "@/lib/useScreenSize";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
// TODO: filter
// TODO: sorting
// [x]: pagination
function Blog() {
  const screenSize = useScreenSize();
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setAllPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className='w-full bg-background'>
      <div className='w-full max-w-container mx-auto'>
        <Suspense>
          <SearchBar handler={setPosts} data={allPosts} />
        </Suspense>
        {loading ? (
          <div className='py-5'>
            <Loader />
          </div>
        ) : (
          <>
            {posts && (
              <Pagination
                className={`grid md:grid-cols-3 grid-cols-2 gap-5 my-5`}
                perPage={screenSize.width > 767 ? 3 : 2}>
                {posts?.map((post, i) => {
                  return (
                    <PaginationItem key={i}>
                      <Link href={`/Blog/${post.slug}`}>
                        <div className='relative w-full aspect-video'>
                          <img
                            className='aspect-video object-cover relative z-10'
                            src={`images/posts/${post.img}`}
                          />
                          <div className='absolute w-full h-full left-0 top-0 bg-slate-200 rounded-md animate-pulse z-0'></div>
                        </div>
                        <div className='p-8'>
                          <h3 className='font-gerbil text-xl'>
                            {post.title}
                          </h3>
                          <p className='text-neutral-500 mt-3'>
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    </PaginationItem>
                  );
                })}
              </Pagination>
            )}
            {/* <ul className='grid md:grid-cols-3 grid-cols-1 gap-5 my-5'>
              {posts?.map((post, i) => {
                return (
                  <li className='border border-l-neutral-300' key={i}>
                    <Link href={`/Blog/${post.slug}`}>
                      <img
                        className='aspect-video object-cover'
                        src={`images/posts/${post.img}`}
                      />
                      <div className='p-8'>
                        <h3 className='font-gerbil text-xl'>
                          {post.title}
                        </h3>
                        <p className='text-neutral-500 mt-3'>
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;
