"use client";
import Header from "./components/Header";
import Logo from "@/assets/logoWhite.svg";
import Hero from "./sections/Hero";
import Who from "./sections/Who";
import Featured from "./sections/Featured";
import Know from "./sections/Know";
import Services from "./sections/Services";
import Why from "./sections/Why";
import SuccessStories from "./sections/SuccessStories";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className={``}>
      {/* <Profile /> */}
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
      <Header data={{ Logo }} />
      <Hero />
      <Who />
      <Featured />
      <Know />
      <Services />
      <Why />
      <SuccessStories />
      <Contact />
      <footer className=''></footer>
    </div>
  );
}
