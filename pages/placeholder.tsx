import React from "react";
import Head from "next/head";
import NavigationBar from "./components/NavigationBar";

const PlaceholderPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="This page is under development" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#0F4D92] to-[#4E6C4E]">
        <NavigationBar />

        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-16">
          <h1 className="text-5xl text-white">Coming Soon</h1>
          <p className="text-xl text-white text-center">
            This page is currently under development. Please check back later.
          </p>
        </div>
      </main>
    </>
  );
};

export default PlaceholderPage;
