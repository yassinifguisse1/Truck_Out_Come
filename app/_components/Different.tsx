"use client"
import React from 'react'

import { MeteorsDemo } from './MeteorsDemo'
import { useTranslations } from 'next-intl';



const Different = () => {
  const tHeader = useTranslations("HeaderOfDeffrent");
  const header = tHeader('header')
  const tDeffrentCards = useTranslations("DeffrentCards");
  const cards =[
    { title : tDeffrentCards("title_1"), description : tDeffrentCards("content_1")},
    {title : tDeffrentCards("title_2"), description :tDeffrentCards("content_2")},
    {title : tDeffrentCards("title_3") , description : tDeffrentCards("content_3")}
  ]
  return (
    <section className="py-10 flex flex-col items-center container mx-auto w-full">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center dark:text-gray-300 text-black">
        {header}
        </h2>
        <div>
          <MeteorsDemo items={cards}/>
        </div> 
    </section>
  );
}

export default Different











 