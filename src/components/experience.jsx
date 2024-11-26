

const Experience = () => {
  return (
    <section className='flex flex-col  items-center lg:flex md:flex lg:flex-col md:flex-col lg:items-center md:items-center experience pb-20 dark:bg-white sm:flex sm:flex-col sm:items-center'>
       <div className="mt-14 skills-title">
        <h1 className="text-base">Experince</h1>
        </div>
        <p className="ml-10 mt-5 font-normal text-xl text-[#D1D5DB] mb-10 dark:text-black">Here is a Quick summary of my most recent experiences:</p>

        <div className="p-10 container lg:p-8 md:p-8 rounded-xl lg:flex lg:flex-row lg:items-start md:flex md:flex-row md:items-start  lg:justify-between   md:gap-10 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4">
         <div>
            <img className="mb-5 lg:w-80 md:w-80 lg:mt-0 md:mt-0 sm:mt-5 sm:w-40" src="https://sagarshah.dev/_next/static/media/logo-upwork.5f1fcd5c.svg" alt="upwork" />
         </div>
         <div className=" self-end md:ml-16 md:px-10 sm:px-10 sm:ml-32">
            <h1 className="h1 font-semibold text-xl">Independent Freelancer</h1>
            <ul className="flex flex-col list-disc">
            <li className="mt-3 w-[95%] text-lg sm:w-[80%]">Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.</li>
            <li className="mt-2 lg:w-[103%] md:w-[103%] sm:w-[80%] text-lg">Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.</li>
            </ul>
           
         </div>
        <div className="mr-1">
            <p className="text-base w-36 sm:pb-5">Nov-2021 - Present</p>
        </div>
        </div>
    {/* second container  */}
    <div className="p-10 container lg:p-8 md:p-8 rounded-xl lg:flex lg:flex-row md:flex md:flex-row lg:items-start md:items-start lg:justify-between   md:gap-10 sm:flex sm:flex-col sm:items-center sm:gap-4 mt-10">
         <div>
            <img className="mb-5 lg:w-80 md:w-60 sm:w-40 md:mt-0 lg:mt-0 sm:mt-5" src="https://sagarshah.dev/_next/static/media/logo-greenapex-light.fae848d5.svg" alt="greenapex" />
         </div>
         <div className=" self-end md:ml-16 md:px-10">
            <h1 className="h1 font-semibold text-xl">Team Lead</h1>
            <ul className="flex flex-col list-disc md:w-[120%] sm:w-[120%]">
            <li className="mt-3  text-lg">Acted as team lead in different projects.</li>
            <li className="mt-1  text-lg">Brainstormed new ideas & gathered requirements for internal projects.</li>
            <li className="mt-1 text-lg">Designed architecture of different projects (frontend + backend).</li>
            <li className="mt-1 text-lg">Worked on enterprise-level projects for a variety of clients.</li>
            <li className="mt-1 text-lg">Handled sprint planning & task distribution.</li>
            </ul>
           
         </div>
        <div className="mr-1">
            <p className="text-base w-36 sm:pb-5">Jul 2017 - Oct 2021</p>
        </div>

        </div>
        {/* third container  */}
    <div className="p-10 container lg:p-8 md:p-8 sm:p-4 rounded-xl lg:flex lg:flex-row lg:justify-between md:flex  md:flex-row md:justify-between  mt-10 md:gap-10 sm:flex sm:flex-col sm:items-center sm:gap-5">
         <div>
            <img className="mb-5 lg:w-42 md:w-42 sm:w-48" src="https://sagarshah.dev/_next/static/media/logo-dotnpixel-light.45ddeea7.svg" alt="dotnpixel" />
         </div>
         <div className=" lg:self-end md:self-end">
            <h1 className="pb-1 h1 font-semibold text-xl">FullStack Developer</h1>
            <ul className="flex flex-col list-disc">
              <li>Worked as a full stack developer (React / Laravel).</li>
            </ul>
           
         </div>
        <div className="mr-1">
            <p className="text-base sm:pb-5">Dec 2015 - May 2017</p>
        </div>

        </div>

    </section>
    );
  
}

export default Experience