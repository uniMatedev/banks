import { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "./components/NavigationBar";
import LengthConverter from "./components/LengthConverter";

const ConversionPage: NextPage<{ value: number; unit: string }> = ({
  value,
  unit,
}) => {
  // List of common units for conversion
  const units = ["feet", "inches", "yards", "meters", "centimeters"];

  return (
    <>
      <Head>
        <title>Convert Measure Banks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0F4D92] to-[#4E6C4E]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-16">
          <NavigationBar />

          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Convert Measure
          </h1>
          <LengthConverter />
          
        </div>
      </main>
    </>
  );
};

export default ConversionPage;
