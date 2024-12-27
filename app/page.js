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
import Footer from "./sections/Footer";
// import { Form } from "./sections/Form";

export default function Home() {
  return (
    <main className=''>
      <Header data={{ Logo }} />
      <Hero />
      <Who />
      <Featured />
      <Know />
      <Services />
      <Why />
      <SuccessStories />
      <Contact />
      {/* <Form /> */}
      <Footer data={{ Logo }} />
    </main>
  );
}
