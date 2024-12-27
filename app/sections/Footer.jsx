import Link from "next/link";
import React from "react";

function Footer({ data }) {
  return (
    <div className='w-full'>
      {[...Array(4)].map((e, i) => (
        <div
          className={`mb-3 bg-dark w-full`}
          style={{ height: `${i * 2.5 + (i + 1) * 2.5}px` }}></div>
      ))}
      <div className='w-full bg-dark py-16'>
        <div className='max-w-container mx-auto w-full flex flex-col justify-center items-center'>
          <Link href={"/"} className='w-auto inline-block'>
            <img width={`240`} src={data.Logo.src} />
          </Link>
          <div className='w-full grid gap-10 grid-cols-1 md:grid-cols-4 text-white mt-14'>
            <div>
              <h4>Contact Us</h4>
            </div>
            <div>
              <h4>Find Us</h4>
            </div>
            <div>
              <h4>Quick Lnks</h4>
            </div>
            <div>
              <h4>Follow Us</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
