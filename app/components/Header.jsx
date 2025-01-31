"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { parse } from 'cookie';

import Burger from "./Burger";
import { ChevronDown, CircleUserRound, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";

function Header({ data }) {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDate(new Date().toISOString());
  }, []);

  const checkAuthStatus = () => {
    const cookies = parse(document.cookie || '');
    const token = cookies.token;

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      checkAuthStatus();
    }
  }, [typeof document !== 'undefined' ? document.cookie : null]);

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (response.ok) {
      setIsLoggedIn(false);
      router.push('/');
    } else {
      console.error('Failed to log out');
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLoading, setLoading] = useState(false);
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
    return () => {
      document.removeEventListener("click", () => {
        setIsOpen(false);
      });
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    //create the abort controller
    let controller = new AbortController();
    fetch("/api/menus", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setPages(data.mainMenu);
        setLoading(false);
      });
  }, []);
  const menuItemStyles = "font-gerbil pb-3 px-8";

  const menuRef = useRef();
  return (
    <div
      id='main-header'
      className='w-full items-center bg-dark py-3 px-12 flex flex-row justify-between z-[999] relative'>
      <div className="sr-only">{ date }</div>
      <div id='logo'>
        <Link className='outline-none' href='/'>
          { <img src={ data.Logo.src } className='max-w-full' /> }
        </Link>
      </div>
      <div className="flex flex-row gap-2 justify-between">
        {isLoggedIn ? (
          <div className="group relative">
            <Link className='w-full flex flex-nowrap text-white' href={ `/Account` }>
             <CircleUserRound className="mr-2" /> My Account
            </Link>
            <button onClick={ handleLogout } className='absolute top-full left-0 text-white group-hover:block hidden w-full h-full bg-dark pt-2 min-h-10'>
              logout
            </button>
          </div>
        ) : (
          <></>
        )}
        <nav className='' ref={ menuRef }>
          <div className='relative z-20 bg-dark'>
            <Burger isOpen={ isOpen } handleClick={ handleClick } />
          </div>
          { isOpen && (
            <ul className='animate-in slide-in-from-top absolute right-0 top-full min-w-[350px] bg-dark py-8 text-white'>
              { isLoading ? (
                <Loader />
              ) : (
                pages?.map((page, i) => (
                  <li className={ `${menuItemStyles} group` } key={ i }>
                    <Link className='w-full block' href={ page.url }>
                      { page.title }{ " " }
                      { page.submenu && (
                        <ChevronDown className='inline ' />
                      ) }
                    </Link>
                    { page.submenu && (
                      <ul className='hidden group-hover:block md:absolute md:right-full md:top-0 py-8 bg-dark min-w-full'>
                        { page.submenu?.map((submenuItem, i) => (
                          <li key={ i } className={ menuItemStyles }>
                            <Link
                              className='w-full block'
                              href={ submenuItem.url }>
                              { submenuItem.title }
                            </Link>
                          </li>
                        )) }
                      </ul>
                    ) }
                  </li>
                ))
              ) }
              <hr className='mx-8 my-3 bg-slate-400 border-gold  h-[0.5px]' />
              <li className={ menuItemStyles }>
                <Link className='w-full block' href={ `/Login` }>
                  Log in
                </Link>
              </li>

            </ul>
          ) }
        </nav>
      </div>
    </div>
  );
}

export default Header;
