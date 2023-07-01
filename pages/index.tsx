import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>BANKS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0F4D92] to-[#4E6C4E]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="text-5xl  tracking-tight text-white sm:text-[5rem] text-center">
            <h1 className="text-[#4CAF50] justify-center font-audiowide">BANKS</h1>  
            {/* <span className="font-roboto font-text-[hsl(280,100%,70%)]">Commercial Doors and Glass</span> */}
          </div>
          <Image alt={"door"} src={"/doorabstract.png"} width={500} height={100}/>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/consulting"
            >
              <h3 className="text-2xl font-bold">Consulting →</h3>
              <div className="text-lg">
                Get expert advice on your commercial door and glazing projects.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/repair-service"
            >
              <h3 className="text-2xl font-bold">Repair Service →</h3>
              <div className="text-lg">
                High-quality repairs to keep your doors and windows at their best.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/new-projects"
            >
              <h3 className="text-2xl font-bold">New Projects →</h3>
              <div className="text-lg">
                Collaborate with us on your new commercial doors and glazing projects.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
