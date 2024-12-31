import React from "react";
import topImage from "@/assets/images/about-page-1.jpg";
import bottomImage from "@/assets/images/about-page-2.jpg";
import aboutHeroBg from "@/assets/images/about-hero-bg.png";
import aboutBottomBg from "@/assets/images/about-bottom-bg.png";

function About() {
  const missonVision = [
    {
      title: "Our Mission",
      content: `Our mission is to transform the real estate experience by
            offering unmatched service, tailored solutions, and a
            commitment to excellence. We believe that every client’s
            vision is unique, and we aim to deliver customized
            strategies that align with individual goals, ensuring
            optimal results and long-term value.`,
    },
    {
      title: "Our Vision",
      content: `We envision a world where real estate is accessible, transparent, and fulfilling. By leveraging our expertise and local market knowledge, we strive to be the trusted partner for clients seeking not only a property but a place that resonates with their lifestyle and aspirations.`,
    },
  ];
  return (
    <div className='w-full'>
      <div className='bg-dark py-8 w-full text-white relative'>
        <div
          className='absolute right-0 bottom-5 w-[50%] h-full  bg-no-repeat bg-contain bg-right-bottom'
          style={{
            backgroundImage: `url(${aboutHeroBg.src})`,
          }}></div>
        <div className='w-full max-w-container justify-stretch mx-auto flex gap-8 px-0'>
          <div className='md:basis-2/3 px-12 pt-12'>
            <h1 className='text-heading-1 font-gerbil'>About Us</h1>
            <h3 className='font-bold text-xl leading-8'>
              Solitaire Crest Properties: Crafting Excellence in Real
              Estate
            </h3>
            <p>
              At Solitaire Crest Properties, we bring a fresh approach
              to real estate with a focus on quality, integrity, and
              client satisfaction. With years of expertise in
              residential, commercial, and investment properties, we
              understand the complexities of real estate and are
              dedicated to providing a seamless experience for our
              clients. Our team of industry experts is committed to
              guiding you through every step of your real estate
              journey, from selecting the perfect property to
              maximizing the value of your investments.
            </p>
          </div>
          <div className=' md:basis-1/3'>
            <span className='bg-white w-[90px] absolute right-0 top-0 h-full'></span>
            <img
              src={topImage.src}
              className='md:-mb-36 relative z-10'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='bg-background text-dark w-full p-12'>
        {missonVision?.map((item, i) => (
          <div
            key={i}
            className='border-dark border p-12 pt-24 mb-12'>
            <h2 className='text-heading-2 font-gerbil leading-loose'>
              {item.title}
            </h2>
            <p>{item.content}</p>
          </div>
        ))}
        <div className='bg-white p-12 pt-24 mb-12'>
          <h2 className='text-heading-2 font-gerbil leading-loose'>
            Our Values
          </h2>
          <p className='leading-6'>
            <strong>Integrity:</strong> <br /> We uphold honesty and
            transparency in every transaction, ensuring our clients
            are well-informed and empowered. <br />
            <strong>Excellence:</strong> <br /> From our services to
            our properties, we aim for excellence in every detail,
            setting high standards in the real estate industry. <br />
            <strong>Client-Centric Approach:</strong> <br /> Your
            needs and goals are at the heart of everything we do. We
            listen, advise, and execute with your best interests in
            mind. Innovation: By staying at the forefront of industry
            trends and technologies, we provide innovative solutions
            that add value to your real estate experience.
          </p>
        </div>
      </div>
      <div className='bg-gold text-white ms-12 px-12 relative pt-8 pb-48'>
        <h2 className='font-gerbil text-heading-2 leading-loose'>
          Why Choose Solitaire Crest Properties?
        </h2>
        <p className='max-w-[600px]'>
          We believe in long-lasting relationships with our clients.
          Over the years, we have helped thousands of homeowners,
          investors, and businesses achieve their real estate dreams.
          Read our Success Stories to see how we've transformed our
          clients’ experiences into success.
        </p>
        <div className=' w-full right-0 bottom-4  bg-no-repeat bg-bottom absolute'>
          {" "}
          <img src={aboutBottomBg.src} alt='' className='w-full' />
        </div>
      </div>
      <img
        src={bottomImage.src}
        alt=''
        className='max-w-sm mb-12 -mt-24 z-10 relative'
      />
    </div>
  );
}

export default About;
