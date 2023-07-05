import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar";

const ToolsPage = () => {
  const toolItems = [
    {
      name: "Measurement Converter",
      icon: "ruler.png",
      href: "/",
      developed: true,
    },
    { name: "Product Catalog", icon: "catalogue.png", href: "/tools" },
    { name: "Installation Guides", icon: "guide.png", href: "/tools" },
    // ... rest of the tools
  ];

  return (
    <>
      <Head>
        <title>Tools</title>
        <meta name="description" content="Collection of useful tools" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#0F4D92] to-[#4E6C4E]">
        <NavigationBar />

        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-16">
          <h1 className="text-5xl text-white">Tools</h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {/* {toolItems.map((tool, index) => (
              <Link key={index} href={tool.href}>
                <p
                  className={`flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 ${
                    tool.developed ? "" : "coming-soon"
                  }`}
                >
                  <img src={`${tool.icon}`} alt={`${tool.name} Icon`} />
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                </p>
              </Link>
            ))} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ToolsPage;
