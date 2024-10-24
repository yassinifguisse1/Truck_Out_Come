import React from 'react'

import { MeteorsDemo } from '../../app/_components/MeteorsDemo';
import { BarChart, Diamond, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';




const Test = () => {
  const tSecondCards = useTranslations("Test");


  const cards =[
    {icon: <Rocket className="mr-2" />,title : tSecondCards("title_1"), description : tSecondCards("content_1")},
    {icon: <BarChart className="mr-2" /> ,title : tSecondCards("title_2"), description :tSecondCards("content_2")},
    {icon: <Diamond className="mr-2" /> ,title : tSecondCards("title_3"), description : tSecondCards("content_3")}
]
  return (
          <div>
              <MeteorsDemo items={cards}/>
          </div> 
  )
}

export default Test