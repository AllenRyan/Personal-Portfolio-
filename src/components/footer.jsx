import React from 'react'
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <section className='footer h-20 flex justify-center'>
        <p className='flex items-center gap-2'> <MdCopyright className='text-2xl'/> 2024 | Designed and coded with ❤️️ by Abrar Khan</p>
    </section>
  )
}

export default Footer