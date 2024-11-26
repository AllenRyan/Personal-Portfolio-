import React from 'react'

const Work = () => {
  return (
   <section id="work" className='work flex flex-col items-center  pb-20 dark:bg-white md:px-10'>
      <div className="mt-20 skills-title">
        <h1 className="text-base">Works</h1>
        </div>
         <p className="mt-5 font-normal text-2xl text-[#D1D5DB] mb-20 dark:text-black">some of the noteworthy projects i have bult:</p>
     {/* first container  */}
     <div className='work-container lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col sm:items-center sm:justify-center rounded-xl'>
       <div className='showcase lg:w-[50%] md:w-[50%] sm:w-[90%] p-10 rounded-s-xl sm:mt-10'>
        <img className='lg:mt-0 md:mt-20' src="/images/1st.png" alt="wingie" />
       </div>

       <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] p-10'>
        <h1 className='h1 font-bold text-2xl'>Wingie</h1>
        <p className='mt-5 text-lg'>A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.</p>

       {/* skills contaier  */}
       <div className='flex  flex-wrap p-2'>
        <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>React</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>
        Typescript</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>React Bootstrap</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl lg:mr-20 md:mr-2'>
        <h1 className='text-sm font-semibold'>Firebase</h1>
       </div>
       <div className='lg:mt-3 work-skills p-1 px-3 rounded-xl mr-2 md:mt-5 sm:mt-5'>
        <h1 className='text-sm font-semibold'>Express.js</h1>
       </div>
       <div className='lg:mt-3 work-skills p-1 px-3 rounded-xl mr-2 md:mt-5 sm:mt-5'>
        <h1 className='text-sm font-semibold'>PostgreSQL</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl lg:mr-20 md:mr-2 sm:mr-2'>
        <h1 className='text-sm font-semibold'>Styled Components</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl '>
        <h1 className='text-sm font-semibold'>Redux</h1>
       </div>
        
        </div>
       
        <a target="_blank" class="self-start rounded-lg p-1.5  [&amp;_svg]:stroke-gray-500" href="https://www.wingie.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg></a>

       </div>
     </div>
     {/* second container  */}
     <div className='work-container lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse  rounded-xl mt-20'>
       <div className='showcase lg:w-[50%] md:w-[50%] sm:w-[100%] sm:mt-10 p-10 rounded-e-xl'>
            <img className='lg:mt-0 md:mt-20' src="/images/2nd.png" alt="fiskill" />
       </div>

       <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] p-10'>
        <h1 className='h1 font-bold text-2xl'>Fiskill</h1>
        <p className='mt-5 text-lg'>A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.</p>

       {/* skill container  */}
       <div className='flex  flex-wrap p-2 '>
        <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>React</h1>
       </div>
        <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>Next.js</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>
        Typescript</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>
        Tailwindcss</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>Meterial UI</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mt-5 sm:mt-5'>
        <h1 className='text-sm font-semibold'>Redux Toolkit</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>React Query</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>Express.js</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl mr-2'>
        <h1 className='text-sm font-semibold'>PostgreSQL</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl mr-2 sm:mt-5'>
        <h1 className='text-sm font-semibold'>FireBase</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl mr-2 sm:mt-5'>
        <h1 className='text-sm font-semibold'>AWS Simplify</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl mr-2 sm:mt-5'>
        <h1 className='text-sm font-semibold'>Cypress</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl '>
        <h1 className='text-sm font-semibold'>StoryBook</h1>
       </div>
        
        </div>
       
        <a target="_blank" class="self-start rounded-lg p-1.5  [&amp;_svg]:stroke-gray-500" href="https://www.fiskil.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg></a>
       </div>
     </div>
     {/* third container  */}
     <div className='work-container lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col rounded-xl mt-10'>
       <div className='showcase lg:w-[50%] md:w-[50%] sm:w-[100%] p-10 rounded-s-xl'>
            <img className='md:mt-20' src="/images/3rd.png" alt="pepehousing" />
       </div>

       <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] p-10'>
        <h1 className='h1 font-bold text-2xl'>Pepehousing</h1>
        <p className='mt-5 text-lg'>A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.</p>

       {/* skills contaier  */}
       <div className='flex   flex-wrap p-2'>
        <div className='mt-5 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mr-1 sm:mr-1'>
        <h1 className='text-sm font-semibold'>React</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mr-1 sm:mr-1'>
        <h1 className='text-sm font-semibold'>Next.js</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mr-1 sm:mr-1'>
        <h1 className='text-sm font-semibold'>Typescript</h1>
       </div>
       <div className='mt-5 work-skills p-1 px-3 rounded-xl lg:mr-20 md:mr-1 sm:mr-1'>
        <h1 className='text-sm font-semibold'>tailwindcss</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mr-2 sm:mr-2 sm:mt-5'>
        <h1 className='text-sm font-semibold'>Redux toolkit</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl lg:mr-2 md:mr-2 sm:mr-2 sm:mt-5'>
        <h1 className='text-sm font-semibold'>React Query</h1>
       </div>
       <div className='mt-3 work-skills p-1 px-3 rounded-xl lg:mr-20 md:mr-2'>
        <h1 className='text-sm font-semibold'>StoryBook</h1>
       </div>
        </div>
       
        <a className='mt-10'  target="_blank" class=" self-start rounded-lg p-1.5  [&amp;_svg]:stroke-gray-500" href="https://pepehousing.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg></a>

       </div>
     </div>
     
   </section>
  )
}

export default Work