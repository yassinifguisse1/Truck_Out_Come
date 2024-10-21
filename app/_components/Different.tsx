"use client"
import React from 'react'

import { MeteorsDemo } from './MeteorsDemo'
import LetterPullup from '@/components/ui/letter-pullup'

const cards =[
  { title : "We Win When You Win" , description : "Think of us as your dedicated and innovative marketing partner, not just another vendor. We take your success personally and strive for lasting results."},
  {title : "We're Here in Poland, Ready to Help" , description :"Not a call center. Not outsourced. We're real, local, and ready to sit down and discuss your needs face-to-face if that's what you want."},
  {title : "Focused on What Matters" , description : "We’re experienced, trusted specialists. By working with industries we deeply understand, we confidently promise real, measurable, and sustainable results."}
]

const Different = () => {
  return (
    <section className="py-10 flex flex-col items-center container mx-auto w-full">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center">
          <LetterPullup words={"OK... But What Makes Us Different?"} delay={0.05} />
        </h2>

       
        <div>
          <MeteorsDemo items={cards}/>
        </div> 
    </section>
  );
}

export default Different











 