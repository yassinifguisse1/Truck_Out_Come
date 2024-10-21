"use client"

import React from 'react'
import { ArrowUpRight, Check } from 'lucide-react';
import UnderHero from './UnderHero';
import { NumberTickerDemo } from './NumberTickerDemo';


const StatCard = ({
  number,
  text,
  subtext = "",
  isHighlighted = false,
}: {
  number: number;
  text: string;
  subtext?: string;
  isHighlighted?: boolean;
}) => (
  <div
    className={`rounded-2xl p-6  ${
      isHighlighted
        ? "bg-blue-600 text-white dark:text-white md:col-span-2 "
        : "bg-white text-black dark:text-black"
    }`}
  >
    <div className="flex justify-between items-start  ">
      <div>
        <h3 className="text-4xl font-bold mb-2 dark:text-black">
          <NumberTickerDemo number={number} isHighlighted={isHighlighted}/>{" "}
        </h3>
        <p className="text-lg font-medium font-mono ">{text}</p>
        {subtext && (
          <p
            className={`text-sm mt-2 ${
              isHighlighted ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {subtext}
          </p>
        )}
      </div>
      {isHighlighted && (
        <ArrowUpRight className="w-6 h-6 text-white bg-blue-500 rounded-full p-1" />
      )}
    </div>
  </div>
);
const CardHoverEffect = () => {
  return (
    <div className=" md:px-8 -mt-[106px] lg:-mt-[90px] rounded-b-5xl container mx-auto w-full ">
      {/* <HoverEffect items={projects} /> */}
      <div className="bg-vio-900 bg-gray-900 border border-gray-800 p-6 rounded-3xl relative w-full z-40">
      {/* flex flex-col md:flex-row   border  gap-4 */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500  to-violet-500 transform scale-[0.80]  rounded-full blur-3xl" />

      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4  ">
        <StatCard 
          number= {150}
          text="Satisfied clients" 
          subtext="Our awesome clients are industry experts around the world" 
          isHighlighted={true} 
        />
        <StatCard number={2} text="Years Experience" />
        <StatCard number={20} text="Professional Designer" />
        <StatCard number={10} text="Digital Product" />
        
      </div>
      

    </div>
      {/* <NumberTickerDemo /> */}
      <UnderHero />
    </div>
  );
}

export default CardHoverEffect



export const projects = [
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Design",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Devlopments",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Markiting",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Strategy",

  }
];
