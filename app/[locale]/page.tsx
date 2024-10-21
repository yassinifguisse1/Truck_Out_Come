"use client"; // Enabling client-side behavior

import Navbar from "../_components/Navbar";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Solution from "../_components/Solution";
import Different from "../../app/_components/Different";
import Test from "../../app/_components/Test";
import CardHoverEffect from "../../app/_components/CardHoverEffect";
import Hero from "../_components/Hero";
import { VortexDemo } from "../_components/VortexDemo";

export default function Home() {


  return (
    <>
      <main className="relative flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start ">
      <section className="w-full relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <FlickeringGrid
            className="absolute inset-0 w-full h-full rounded-b-[50px] sm:rounded-b-[100px]"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        
        <Navbar />
        
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="relative z-10">
              <Hero />
            </div>
          </div>
        </div>
      </section>

        <div className="-mt-10 flex items-center justify-center w-full ">
          <div className="bg-white dark:bg-black w-full rounded-b-[100px] ">
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
    </>
  );
}
