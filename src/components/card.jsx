import React from 'react'
const Card = ({img, text, name, info}) => {
  return (
   <section className='card lg:min-w-[300px] md:w-auto  rounded-xl p-12 lg:flex  lg:flex-col md:flex  md:flex-col lg:justify-center lg:items-center md:justify-center md:items-center sm:flex sm:flex-col sm:items-center sm:w-[120%] w-[100%] mb-5 flex flex-col items-center'>
    <img className='w-20' src={img} alt="pic" />
    <p className='pt-8 w-64 '>{text}</p>
    <h1 className='h1 font-semibold text-lg pt-5'>{name}</h1>
    <p>{info}</p>
    
   </section>
  )
}

export default Card