"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import Burger from "./Burger";
import { ChevronDown, LoaderCircle } from "lucide-react";
import { usePathname } from "next/navigation";

function Header({ data }) {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  // close menu on navigation
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  // close menu on clicking away
  useEffect(() => {
    document.addEventListener("click", e => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);
  useEffect(() => {
    //create the abort controller
    let controller = new AbortController();
    fetch("/api/menus", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setPages(data.mainMenu);
        setLoading(false);
      });
    //abort the request when the component umounts
    return () => controller?.abort();
  }, []);
  const menuItemStyles = "font-gerbil pb-3 px-8";

  const menuRef = useRef();
  return (
    <div
      id='main-header'
      className='w-full items-center bg-dark py-3 px-12 flex flex-row justify-between z-[999] relative'>
      <div id='logo'>
        <Link className='outline-none' href='/'>
          {<img src={data.Logo.src} className='max-w-full' />}
        </Link>
      </div>
      <nav className='' ref={menuRef}>
        <div className='relative z-20 bg-dark'>
          <Burger isOpen={isOpen} handleClick={handleClick} />
        </div>
        {isOpen && (
          <ul className='animate-in slide-in-from-top absolute right-0 top-full min-w-[350px] bg-dark py-8 text-white'>
            {isLoading ? (
              <LoaderCircle className='animate-spin repeat-infinite' />
            ) : (
              pages.map((page, i) => (
                <li className={`${menuItemStyles} group`} key={i}>
                  <Link className='w-full block' href={page.url}>
                    {page.title}{" "}
                    {page.submenu && (
                      <ChevronDown className='inline ' />
                    )}
                  </Link>
                  {page.submenu && (
                    <ul className='hidden group-hover:block md:absolute md:right-full md:top-0 py-8 bg-dark min-w-full'>
                      {page.submenu?.map((submenuItem, i) => (
                        <li key={i} className={menuItemStyles}>
                          <Link
                            className='w-full block'
                            href={submenuItem.url}>
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
            )}
            <hr className='mx-8 my-3 bg-slate-400 border-gold  h-[0.5px]' />
            <li className={menuItemStyles}>
              <Link className='w-full block' href={`/`}>
                Log in
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Header;
