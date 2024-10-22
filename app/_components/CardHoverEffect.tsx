"use client"
import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import UnderHero from './UnderHero';

import { NumberTickerDemo } from './NumberTickerDemo';


const StatCard = ({
  number,
  text,
  subtext = "",
  isHighlighted = false,
}: {
  number: string;
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
        <h3 className="text-4xl font-bold mb-2 ">
        
            {number}
       
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
    <div className=" md:px-8  rounded-b-5xl container mx-auto w-full ">
    
      <UnderHero />
    </div>
  );
}

export default CardHoverEffect


