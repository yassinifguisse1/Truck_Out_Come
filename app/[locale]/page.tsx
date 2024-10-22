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
            {/* <FlickeringGrid
              className="absolute inset-0 w-full h-full rounded-b-[50px] sm:rounded-b-[100px]"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            /> */}
            <CanvasRevealEffectDemo 

            />
          </div>

          <Navbar />

          <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-7xl mx-auto">
              <div >
                <Hero />
              </div>
            </div>
          </div>
        </section>

        <div className=" flex items-center justify-center w-full  ">
          <div
            className="w-full rounded-t-[100px] rounded-b-[100px] "
            // style={{
            //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1287.44 643.72" preserveAspectRatio="none"><rect fill="white" width="1287.44" height="643.72"/><path d="M 0 -64.372 L 0 -64.37 L 85.83 -32.19 L 257.488 -64.37 L 257.488 -64.37 L 343.32 -18.37 L 514.976 -64.37 L 514.976 -64.37 L 604.98 -32.19 L 772.4639999999999 -64.37 L 772.4639999999999 -64.37 L 858.29 -5.37 L 1029.952 -64.37 L 1029.952 -64.37 L 1115.78 -32.19 L 1287.44 -64.37 L 1287.44 -64.37 L 1396.44 -32.19 L 1544.928 -64.37 V 643.72 H 0 V -64.37 Z" fill="%23C252FA"/><path d="M 0 0 L 0 0.00 L 126.00 40.00 L 257.488 0.00 L 257.488 0.00 L 364.49 32.19 L 514.976 0.00 L 514.976 0.00 L 600.81 32.19 L 772.4639999999999 0.00 L 772.4639999999999 0.00 L 960.46 32.19 L 1029.952 0.00 L 1029.952 0.00 L 1204.95 58.00 L 1287.44 0.00 L 1287.44 0.00 L 1443.44 32.19 L 1544.928 0.00 V 643.72 H 0 V 0.00 Z" fill="%23b04dea"/><path d="M 0 64.372 L 0 64.37 L 85.83 110.37 L 257.488 64.37 L 257.488 64.37 L 356.49 96.56 L 514.976 64.37 L 514.976 64.37 L 600.81 102.37 L 772.4639999999999 64.37 L 772.4639999999999 64.37 L 858.29 120.37 L 1029.952 64.37 L 1029.952 64.37 L 1148.95 101.37 L 1287.44 64.37 L 1287.44 64.37 L 1373.27 124.37 L 1544.928 64.37 V 643.72 H 0 V 64.37 Z" fill="%239e48da"/><path d="M 0 128.744 L 0 128.74 L 172.00 170.74 L 257.488 128.74 L 257.488 128.74 L 343.32 189.74 L 514.976 128.74 L 514.976 128.74 L 680.98 160.93 L 772.4639999999999 128.74 L 772.4639999999999 128.74 L 906.46 160.93 L 1029.952 128.74 L 1029.952 128.74 L 1120.95 160.93 L 1287.44 128.74 L 1287.44 128.74 L 1405.44 160.93 L 1544.928 128.74 V 643.72 H 0 V 128.74 Z" fill="%238c43ca"/><path d="M 0 193.11599999999999 L 0 193.12 L 110.00 225.30 L 257.488 193.12 L 257.488 193.12 L 344.49 247.12 L 514.976 193.12 L 514.976 193.12 L 691.98 225.30 L 772.4639999999999 193.12 L 772.4639999999999 193.12 L 858.29 240.12 L 1029.952 193.12 L 1029.952 193.12 L 1115.78 234.12 L 1287.44 193.12 L 1287.44 193.12 L 1373.27 227.12 L 1544.928 193.12 V 643.72 H 0 V 193.12 Z" fill="%237a3eba"/><path d="M 0 257.488 L 0 257.49 L 91.00 320.49 L 257.488 257.49 L 257.488 257.49 L 416.49 289.67 L 514.976 257.49 L 514.976 257.49 L 627.98 301.49 L 772.4639999999999 257.49 L 772.4639999999999 257.49 L 879.46 318.49 L 1029.952 257.49 L 1029.952 257.49 L 1115.78 289.67 L 1287.44 257.49 L 1287.44 257.49 L 1373.27 310.49 L 1544.928 257.49 V 643.72 H 0 V 257.49 Z" fill="%236839aa"/><path d="M 0 321.86 L 0 321.86 L 85.83 367.86 L 257.488 321.86 L 257.488 321.86 L 356.49 354.86 L 514.976 321.86 L 514.976 321.86 L 690.98 372.86 L 772.4639999999999 321.86 L 772.4639999999999 321.86 L 858.29 354.05 L 1029.952 321.86 L 1029.952 321.86 L 1115.78 375.86 L 1287.44 321.86 L 1287.44 321.86 L 1417.44 354.05 L 1544.928 321.86 V 643.72 H 0 V 321.86 Z" fill="%2356349a"/><path d="M 0 386.23199999999997 L 0 386.23 L 153.00 418.42 L 257.488 386.23 L 257.488 386.23 L 343.32 434.23 L 514.976 386.23 L 514.976 386.23 L 600.81 439.23 L 772.4639999999999 386.23 L 772.4639999999999 386.23 L 907.46 441.23 L 1029.952 386.23 L 1029.952 386.23 L 1152.95 425.23 L 1287.44 386.23 L 1287.44 386.23 L 1373.27 418.42 L 1544.928 386.23 V 643.72 H 0 V 386.23 Z" fill="%23442f8a"/><path d="M 0 450.604 L 0 450.60 L 113.00 482.79 L 257.488 450.60 L 257.488 450.60 L 343.32 514.60 L 514.976 450.60 L 514.976 450.60 L 600.81 482.79 L 772.4639999999999 450.60 L 772.4639999999999 450.60 L 858.29 482.79 L 1029.952 450.60 L 1029.952 450.60 L 1188.95 483.60 L 1287.44 450.60 L 1287.44 450.60 L 1468.44 482.79 L 1544.928 450.60 V 643.72 H 0 V 450.60 Z" fill="%23332a7a"/><path d="M 0 514.976 L 0 514.98 L 191.00 547.16 L 257.488 514.98 L 257.488 514.98 L 358.49 547.16 L 514.976 514.98 L 514.976 514.98 L 600.81 564.98 L 772.4639999999999 514.98 L 772.4639999999999 514.98 L 876.46 559.98 L 1029.952 514.98 L 1029.952 514.98 L 1120.95 559.98 L 1287.44 514.98 L 1287.44 514.98 L 1405.44 559.98 L 1544.928 514.98 V 643.72 H 0 V 514.98 Z" fill="%2321246a"/><path d="M 0 579.348 L 0 579.35 L 107.00 611.53 L 257.488 579.35 L 257.488 579.35 L 344.49 611.53 L 514.976 579.35 L 514.976 579.35 L 600.81 611.53 L 772.4639999999999 579.35 L 772.4639999999999 579.35 L 858.29 621.53 L 1029.952 579.35 L 1029.952 579.35 L 1115.78 631.53 L 1287.44 579.35 L 1287.44 579.35 L 1373.27 600.35 L 1544.928 579.35 V 643.72 H 0 V 579.35 Z" fill="%23101f5a"/></svg>')`,
            //   backgroundSize: "cover", // Adjust based on how you want the SVG to fit
              
            // }}
          >
            <CardHoverEffect />
          </div>
        </div>
        {/* Solution section */}
        <div className=" w-full flex items-center justify-center  ">
          <Solution />
        </div>

        <div className=" flex items-center justify-center container">
          <Test />
        </div>
        <div
          className="flex items-center justify-center  w-full rounded-[100px]"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1287.44 643.72" preserveAspectRatio="none"><rect width="1287.44" height="643.72" fill="white"/><circle cx="1738.044" cy="965.58" r="1287.44" fill="%238742d9" stroke="none" stroke-width="10"/></svg>')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Set the height based on the SVG viewBox
            
          }}
        >
          <Different />
        </div>
        <VortexDemo />
      </main>
    </>
  );
}
