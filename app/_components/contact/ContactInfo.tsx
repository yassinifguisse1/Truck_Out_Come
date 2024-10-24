import React from 'react'
import { Phone , Mail , MapPin} from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap'>
        <p className='border flex flex-col justify-center items-center font-mono gap-y-2'><span className='h-6 w-6'><Phone /></span> 123-456-7890</p>
        <p className='border flex flex-col justify-center items-center font-mono gap-y-2'><span className='h-6 w-6'><Mail /></span> info@company.com</p>
        <p className='border flex flex-col justify-center items-center font-mono gap-y-2 '><span className='h-6 w-6'><MapPin /></span> 123 Main St, Anytown, USA 12345</p>
    </div>
  )
}

export default ContactInfo