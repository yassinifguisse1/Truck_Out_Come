"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function CanvasRevealEffectDemo() {
  const t = useTranslations("Hero");

  const firstLine = t("firstLine");
  const btncontent = t("button");

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto rounded-b-[100px] ">
        <Card title={firstLine} button={btncontent}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-violet-900 "
            colors={[[	0, 0, 0]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  button,
  children,
}: {
  title: string;
  button:string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] dark:bg-darkPurple w-full mx-auto  h-screen relative  "
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <h2 className="text-center dark:text-white text-xl dark:opacity-20 opacity-50 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-4 transition duration-200">
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={title}
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
          />
        </h2>
        <Button className="mt-16 md:p-6 md:text-xl flex items-center justify-center mx-auto dark:bg-white bg-purple-950">
          {button}
        </Button>
      </div>
    </div>
  );
};



export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
