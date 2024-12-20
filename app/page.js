"use client";
import Header from "./components/Header";
import Logo from "@/assets/logoWhite.svg";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Hero from "./sections/Hero";
const gerbil = localFont({
  src: "./assets/fonts/gerbil.otf",
  variable: "--font-gerbil",
});

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <div className={`${gerbil.variable} ${roboto.className}`}>
      {/* <Profile /> */}
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
      <Header data={{ Logo }} />
      <Hero />
      <footer className=''></footer>
    </div>
  );
}
