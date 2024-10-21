import React from "react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white font-mono text-2xl md:text-6xl font-bold text-center">
          Let&apos;s Solve This Together.
        </h2>
        <p className="text-white font-mono text-sm md:text-2xl max-w-xl mt-6 text-center">
          Ready for marketing that works like a knife through butter?
        </p>
        <h3 className="text-white font-mono text-sm md:text-2xl max-w-xl mt-6 text-center font-semibold ">
          Get Your Free Marketing Consultation Today
        </h3>
        <Button className="text-lg font-mono mt-10">YES, I WANT THAT!</Button>
      </Vortex>
    </div>
  );
}
