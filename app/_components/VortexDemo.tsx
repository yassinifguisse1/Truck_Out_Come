import React from "react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function VortexDemo() {
  const t = useTranslations("VortexDemo");
  const firstLine = t("firstLine")
  const secondLine = t("secondLine")
  const thirdLine = t("thirdLine")
  const button = t("button")

  return (
    <div className="w-full mx-auto rounded-t-[100px] rounded-b-[100px]   overflow-hidden py-16">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white font-mono text-3xl md:text-6xl font-bold text-center">
          {firstLine}
        </h2>
        <p className="text-white font-mono font-semibold text-lg md:text-3xl max-w-2xl mt-6 text-center ">
          {secondLine}
        </p>
        <h3 className="text-white font-mono font-semibold text-md  md:text-2xl max-w-xl mt-6 text-center ">
          {thirdLine}
        </h3>
        <Link href="/contact">
          <Button className="text-lg hover:bg-white bg-white text-black font-mono mt-10">{button}</Button>
        </Link>
      </Vortex>
    </div>
  );
}
