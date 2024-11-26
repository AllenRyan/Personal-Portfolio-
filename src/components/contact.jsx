import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center work pb-20 dark:bg-white'>
 <div className="mt-14 skills-title">
        <h1 className="text-base">Get in touch</h1>
        </div>
        <p className="w-[90%] lg:w-[50%] md:w-[50%] sm:w-[80%] text-center mt-5 font-normal text-2xl text-[#D1D5DB] mb-10 dark:text-black">What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>

        <h1 className='text-3xl mt-22 flex justify-center items-center gap-5 h1 font-semibold lg:text-4xl md:text-4xl sm:text-4xl dark:text-black'><CiMail className='text-3xl dark:text-black' />
            reachsagarshah@gmail.com</h1>
            <h1 className='mt-5 flex justify-center items-center gap-2 h1 font-semibold text-4xl dark:text-black'>
            <CiPhone /> +91 8980500565
            </h1>
    </section>
  )
}

export default Contact