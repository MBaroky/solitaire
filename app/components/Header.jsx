import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Burger from "./Burger";

function Header({ data }) {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pages")
      .then(res => res.json())
      .then(data => {
        setPages(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      id='main-header'
      className='w-full items-center bg-dark py-3 px-12 flex flex-row justify-between z-10 relative'>
      <div id='logo'>
        <Link href='/'>
          {<img src={data.Logo.src} className='max-w-full' />}
        </Link>
      </div>
      <nav className=''>
        <div className='relative z-20 bg-dark'>
          <Burger isOpen={isOpen} handleClick={handleClick} />
        </div>
        {isOpen && (
          <ul className='animate-in slide-in-from-top absolute right-0 top-full min-w-[350px] bg-dark p-8 text-white'>
            {isLoading
              ? "Menu is here"
              : pages.map((page, i) => (
                  <li className='font-gerbil pb-3' key={i}>
                    <Link href={page.url}>{page.title}</Link>
                  </li>
                ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Header;
