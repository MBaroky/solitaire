import Contact from "@/sections/Contact";
import React from "react";
import sectionBg from "@/assets/images/contact-section-bg.jpeg";

function ContactPage() {
  return (
    <div className='w-full bg-background flex flex-col lg:flex-row justify-stretch'>
      <div
        className=' bg-cover bg-center basis-1/3 min-h-80 '
        style={{
          backgroundImage: `url(${sectionBg.src})`,
        }}></div>
      <Contact layout={"vertical"} />
    </div>
  );
}

export default ContactPage;
