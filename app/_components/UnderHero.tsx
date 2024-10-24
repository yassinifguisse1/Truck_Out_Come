import React from "react";
import { MeteorsDemo } from "../../app/_components/MeteorsDemo";
import { useTranslations } from "next-intl";

// const cards =[
//     {title : "Do it Yourself?" , description : "I don't know what to write so I'll just paste something cool here. One more sentence because lorem ipsum is just unacceptable. Won't ChatGPT the shit out of this."},
//     {title : "Hire Someone?" , description :"Finding the right person is like finding a needle in a haystack. And even if you do, training them takes time and it isn't cheap. and it's rather a hard process."},
//     {title : "Bring in an Agency?" , description : "Unless you've got a big budget, your account will probably end up in the hands of someone inexperienced. It's frustrating and risky, and you deserve better."}
// ]
const UnderHero = () => {
  const tUnderHero = useTranslations("UnderHero");
  const tFirstCards = useTranslations("FirstCards");

  const firstLine = tUnderHero("firstLine")
  const secondLine = tUnderHero("secondLine")
  const thirdLine = tUnderHero("thirdLine")
  const lastLine = tUnderHero("lastLine")

  const cards = [
    { title: tFirstCards("title_1"), description: tFirstCards("content_1") },
    { title: tFirstCards("title_2"), description: tFirstCards("content_2") },
    { title: tFirstCards("title_3"), description: tFirstCards("content_3") },
  ];

  return (
    <section className="py-16 rounded-b-[100px] relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-mono font-bold mb-8 text-center text-purple-950 dark:text-white">{firstLine}</h2>
            <p className="font-mono font-bold text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto py-8 text-purple-950 dark:text-white">
            {secondLine}
            </p>
            <h3 className="text-3xl lg:text-4xl font-mono font-semibold mb-6 text-center text-purple-950 dark:text-white">
              {thirdLine}
            </h3>
            <h4 className="text-3xl lg:text-4xl font-mono font-semibold mb-4 text-center text-purple-950 dark:text-white">
            {lastLine}
            </h4>
            <div >
              <MeteorsDemo items={cards}/>
            </div>
          </div>
    </section>
  );
};

export default UnderHero;
