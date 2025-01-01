"use client";
import { MoveUpRight, Search } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let controller = new AbortController();
    fetch("api/posts", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
    return () => controller?.abort();
  }, []);
  return (
    <div className='w-full bg-background'>
      <div className='w-full max-w-container mx-auto'>
        <form
          action=''
          className='flex flex-row py-5 items-stretch min-w-full'>
          <label
            className='bg-white border-0 items-center flex flex-row flex-grow gap-3'
            htmlFor=''>
            <Search />
            <input
              className='bg-transparent border-0 flex-grow outline-none'
              placeholder='Search'
              type='text'
            />
          </label>
          <button
            type='submit'
            className='bg-gold aspect-square p-2 text-white'>
            <MoveUpRight />
          </button>
        </form>
        <ul className='grid md:grid-cols-3 grid-cols-1 gap-5 my-5'>
          {posts?.map((post, i) => (
            <li className='border border-l-neutral-300' key={i}>
              <Link href=''>
                <img
                  className='aspect-video object-cover'
                  src={`images/posts/${post.image}`}
                />
              </Link>
              <div className='p-8'>
                <h3 className='font-gerbil text-xl'>{post.title}</h3>
                <p className='text-neutral-500 mt-3'>{post.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blog;
