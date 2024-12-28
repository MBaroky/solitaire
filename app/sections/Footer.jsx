"use client";
import Social from "@/components/Social";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer({ data }) {
  const [contactInfo, setContactInfo] = useState({});
  const [footerMenu, setFooterMenu] = useState([]);
  useEffect(() => {
    //create the abort controller
    let controller = new AbortController();
    fetch("/api/contact-info", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setContactInfo(data);
        console.log(data["connections"]);
      });
    //abort the request when the component umounts
    return () => controller?.abort();
  }, []);
  useEffect(() => {
    //create the abort controller
    let controller = new AbortController();
    fetch("/api/menus", { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setFooterMenu(data.footerMenu);
      });
    //abort the request when the component umounts
    return () => controller?.abort();
  }, []);

  return (
    <div className='w-full'>
      {[...Array(4)].map((e, i) => (
        <div
          key={i}
          className={`mb-3 bg-dark w-full`}
          style={{ height: `${i * 2.5 + (i + 1) * 2.5}px` }}></div>
      ))}
      <div className='w-full bg-dark py-16'>
        <div className='max-w-container px-8 mx-auto w-full flex flex-col justify-center items-center'>
          <Link href={"/"} className='w-auto inline-block'>
            <img width={`240`} src={data.Logo.src} />
          </Link>
          <div className='w-full grid gap-10 grid-cols-1 md:grid-cols-4 text-white mt-14 [&_h4]:mb-3 [&_h4]:font-bold [&_h4]:before:content-["|"] [&_h4]:before:me-2'>
            <div>
              <h4> Contact Us</h4>
              <ul>
                {contactInfo.connections &&
                  Object.entries(contactInfo["connections"]).map(
                    ([key, value]) => (
                      <li key={key}>
                        <Link href={key + ":" + value}>{value}</Link>
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div>
              <h4> Find Us</h4>
              <p>{contactInfo?.address}</p>
            </div>
            <div>
              <h4> Quick Lnks</h4>
              <ul>
                {footerMenu?.map((menuItem, i) => (
                  <li key={i}>
                    <Link href={menuItem.url}>{menuItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4> Follow Us</h4>
              <Social data={contactInfo.social} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
