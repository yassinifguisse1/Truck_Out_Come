import React from 'react'
import { Phone , Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap'>
        <p className=' flex flex-col justify-center items-center font-mono gap-y-2'><span className='h-6 w-6'><Phone /></span> +48 880962581</p>
        <p className=' flex flex-col justify-center items-center font-mono gap-y-2'><span className='h-6 w-6'><Mail /></span> info@trackoutcome.agency</p>
    </div>
  )
}

export default ContactInfo