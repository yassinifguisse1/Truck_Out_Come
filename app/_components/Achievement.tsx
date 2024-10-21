import NumberTicker from "@/components/ui/number-ticker";
import React from "react";

const Achievement = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row container mx-auto gap-8 py-12">
    <div className="flex items-center">
      <span className="font-mono text-4xl">+</span>{" "}
      <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
        <NumberTicker value={100} />
      </p>
      <span className="font-mono text-4xl ml-2">clients</span>
      <span className="ml-8 text-4xl hidden md:inline-block">|</span>
    </div>

    <div className="flex items-center mt-4 md:mt-0">
      <span className="font-mono text-4xl">+</span>{" "}
      <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white">
        <NumberTicker value={140} />
      </p>{" "}
      <span className="font-mono text-4xl ml-2">Websites</span>
    </div>
  </div>
  );
};

export default Achievement;
