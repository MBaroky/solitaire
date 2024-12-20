"use client";
import Image from "next/image";
import Header from "./components/Header";
import Logo from "@/assets/logoWhite.svg";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Profile } from "./pages/Profile";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className=''>
      <Head>
        <title> Solitaire Realstate</title>
      </Head>
      <Profile />
      <Header data={{ Logo }} />
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
      <footer className=''></footer>
    </div>
  );
}
