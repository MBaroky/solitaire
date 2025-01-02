"use client";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// TODO: filter
// TODO: sorting
// TODO: pagination
function Blog() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setAllPosts(data);
      });
  }, []);
  return (
    <div className='w-full bg-background'>
      <div className='w-full max-w-container mx-auto'>
        <SearchBar handler={setPosts} data={allPosts} />
        <ul className='grid md:grid-cols-3 grid-cols-1 gap-5 my-5'>
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
        </ul>
      </div>
    </div>
  );
}

export default Blog;
