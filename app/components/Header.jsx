import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header({ data }) {
  const pages = [{ title: "Home", url: "/" }];
  return (
    <div>
      <div id='logo'>
        <Link href='/'>
          {<img src={data.Logo.src} className='max-w-full' />}
        </Link>
      </div>
      <nav>
        <ul>
          {pages &&
            pages.map((page, i) => (
              <li key={i}>
                <Link href={page.url}>{page.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
