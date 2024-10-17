"use client"; // Enabling client-side behavior

import Navbar from "../_components/Navbar";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Solution from "../_components/Solution";
import Different from "../../app/_components/Different";
import Test from "../../app/_components/Test";
import CardHoverEffect from "../../app/_components/CardHoverEffect";
import Hero from "../_components/Hero";
import { VortexDemo } from "../_components/VortexDemo";
// import { useState, useEffect } from 'react';

export default function Home() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <>
      {/* {isClient ? ( */}
      <main className="relative flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start ">
        {/* Wrap the sections or components you want to load lazily in Suspense */}
        {/* Hero section with full screen height */}
        <section className="w-full h-screen flex items-center justify-center">
          <section className="absolute inset-0 top-0 w-full h-screen">
            {/* Flickering grid as background for both navbar and hero */}
            <FlickeringGrid
              className="absolute inset-0 top-0 w-full rounded-b-[100px]"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            {/* Navbar */}
            <Navbar />
            {/* Hero section */}
            <Hero />
          </section>
        </section>
        <div className="-mt-10 flex items-center justify-center w-full">
          <div className="bg-white dark:bg-black w-full rounded-b-[100px]">
            <CardHoverEffect />
          </div>
        </div>
        <Solution />
        <div className="-mt-24 flex items-center justify-center container">
          <Test />
        </div>
        <div className="flex items-center justify-center container w-full">
          <Different />
        </div>
        <VortexDemo />


      </main>
      {/* // ) : (
      //   <div className="flex items-center justify-center min-h-screen mx-auto">
      //        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid">
                
      //        </div>
      // </div>
      // )} */}
    </>
  );
}
