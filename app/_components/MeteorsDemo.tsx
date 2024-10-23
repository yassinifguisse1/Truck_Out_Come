import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";
import React from "react";
interface CardProps {
  items: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
}
// bg-violet-400
export function MeteorsDemo({ items }: CardProps) {
  return (
    <div className="flex flex-col md:flex-row container mx-auto gap-8 z-0">
      {items.map((item, idx) => (
         <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{
           delay: 0.3,
           duration: 0.8,
           ease: "easeInOut",
         }}
         className=" w-full relative " key={idx}>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500  to-violet-500 transform scale-[0.80]  rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-100 dark:bg-darkPurple border border-violet-950  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-mono flex items-center font-bold text-xl text-purple-950 dark:text-white mb-4 relative z-2">
              <span>{item.icon}</span> 
              {item.title}
            </h1>

            <p className="font-mono font-normal text-base text-slate-500 mb-4 relative z-0">
              {item.description}
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
