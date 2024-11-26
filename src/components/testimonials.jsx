import React from 'react'
import Card from "./card.jsx"

const Testimonials = () => {
  return (
    <section id='testimonials' className="flex flex-col gap-5 items-center  experience lg:flex md:flex lg:flex-col md:flex-col flex-wrap  lg:items-center md:items-center  pb-20 dark:bg-white md:px-10 sm:flex sm:gap-5 sm:justify-center sm:items-center sm:flex-col">
       <div className="mt-20 skills-title">
        <h1 className="text-base">Testimonials</h1>
        </div>
    <p className="lg:mt-10 md:mt-10 sm:mt-1 font-normal text-2xl text-[#D1D5DB] mb-5 dark:text-black">Nice things people have said about me:</p>
    <div className='lg:flex lg:flex-row md:flex md:flex-row md:justify-center  lg:gap-8 md:flex-wrap md:gap-4 sm:flex sm:flex-wrap sm:gap-5  sm:items-center'>
    <Card img="/images/avatar-krisztian.png" text="Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development." name="Krisztian Gyuris" info="Founder - inboxgenie.io"
    />
   <Card img="/images/avatar-eugen.png" text="Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team." name="Eugen Esanu" info="Founder - shosho.design" />
   <Card   img="/images/avatar-dummy.svg" text="Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge." name="Joe Matkin" info="freelancer" />
    </div>
   
    </section>

  )
}

export default Testimonials