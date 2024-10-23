"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const Solution = () => {
  return (
    <LampContainer>
     
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br dark:text-gray-300  from-purple-600 to-purple-950 py-4 bg-clip-text text-center text-4xl font-mono font-bold tracking-tight text-transparent md:text-7xl"
        >
          Here&apos;s What <br /> We Can Do for You:
        </motion.h1>
    </LampContainer>
  );
};

export default Solution;
// dark:from-slate-500 dark:to-slate-700