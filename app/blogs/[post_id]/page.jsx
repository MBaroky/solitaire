"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Welcome from "@/posts/welcome.mdx";

function Post({ params }) {
  const [post_id, setPost_id] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    async function post_id() {
      const id = (await params).post_id;
      setPost_id(id);
    }
    post_id();
  }, []);
  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        setData(
          posts.filter(post => post.post_id === parseInt(post_id))[0]
        );
        console.log(
          posts.filter(post => post.post_id === parseInt(post_id))
        );
      });
  }, [post_id]);
  return (
    <div>
      <div className='w-full bg-background'>
        <div className='w-full max-w-container mx-auto py-5'>
          <Link className='text-dark flex flex-row' href={`/Blog`}>
            <MoveLeft /> Back
          </Link>
        </div>
        {data && (
          <div className='w-full'>
            <div
              className='hero-bg bg-center bg-cover min-h-[30vw] before:bg-gradient-to-t before:from-dark before:from-30% before:to-transparent before:h-[60%] before:w-full before:absolute before:bottom-0 before:left-0 relative pt-[15vw] leading-loose flex flex-col justify-end'
              style={{
                backgroundImage: `url(/images/posts/${data.image})`,
              }}>
              <div className='w-full max-w-container mx-auto z-10 relative p-8'>
                <h3 className='text-heading-2 font-gerbil text-white'>
                  {data.title}
                </h3>
              </div>
            </div>
            <div className='w-full max-w-container mx-auto'>
              <Welcome />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
