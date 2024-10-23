"use client"; // Enabling client-side behavior

import Navbar from "../_components/Navbar";
import Solution from "../_components/Solution";
import Different from "../../app/_components/Different";
import Test from "../../app/_components/Test";
import CardHoverEffect from "../../app/_components/CardHoverEffect";
import Hero from "../_components/Hero";
import { VortexDemo } from "../_components/VortexDemo";
import { CanvasRevealEffectDemo } from "../_components/CanvasRevealEffectDemo";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start ">
        <section className="w-full relative min-h-screen flex flex-col">
          <div className="absolute inset-0">
           
            <CanvasRevealEffectDemo />
          </div>

          <Navbar />

          <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-7xl mx-auto">
              <div>
                <Hero />
              </div>
            </div>
          </div>
        </section>

        <div className=" flex items-center justify-center w-full  ">
          <div
            className="w-full rounded-t-[100px] rounded-b-[100px] "
         
          >
            <CardHoverEffect />
          </div>
        </div>
        {/* Solution section */}
        <div className=" w-full flex items-center justify-center  rounded-t-[100px]">
            <Solution />
        </div>

        <div className=" flex items-center justify-center container">
          <Test />
        </div>
        <div className="flex items-center justify-center  w-full rounded-[100px]">
          <Different />
        </div>
        <VortexDemo />
      </main>
    </>
  );
}
