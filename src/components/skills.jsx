
const Skills = () => {
  return (
    <section id="skills" className='flex flex-col items-center skills pb-20 dark:bg-white'>
        <div className="mt-14 skills-title">
        <h1 className="text-base">Skills</h1>
        </div>
        <p className="mt-5 font-normal text-xl text-[#D1D5DB] dark:text-black">The skills, tools and technologies I am really good at:</p>
        <div className="grid grid-cols-3 gap-10 lg:grid md:grid sm:grid lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-2 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-8  lg:gap-10 md:gap-10 sm:gap-1  mt-14 place-items-center md:px-10 sm:px-4">
     <div className="flex justify-center items-center flex-col gap-1">
    <img className="w-50" src="https://sagarshah.dev/_next/static/media/icon-javascript.d5945e90.svg" alt="js-icon" />
     <p className="dark:text-black">Javascript</p>
    </div>
   <div className="flex justify-center items-center flex-col gap-1">
    <img src="https://sagarshah.dev/_next/static/media/icon-typescript.0f2fa2a9.svg" alt="js" />
    <p className="dark:text-black">Typescript</p>
   </div>
   <div className="flex justify-center items-center flex-col gap-1">
   <img src="https://sagarshah.dev/_next/static/media/icon-react.f09634b9.svg" alt="React" />
   <p className="dark:text-black">React</p>
   </div>
   <div className="flex justify-center items-center flex-col gap-1">
    <img src="https://sagarshah.dev/_next/static/media/icon-nextjs.3f6cd734.svg" alt="next" />
    <p className="dark:text-black">Next.js</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-nodejs.e9fdb7cb.svg" alt="node" />
      <p className="dark:text-black">Node.js</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img className="dark:bg-black" src="https://sagarshah.dev/_next/static/media/icon-express-light.82eecf92.svg" alt="express" />
      <p className="dark:text-black">Express.js</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-nest.c237a14e.svg" alt="nest" />
      <p className="dark:text-black">Nest.js</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img className="dark:bg-black" src="https://sagarshah.dev/_next/static/media/icon-socket-light.2218bc41.svg" alt="socket" />
      <p className="dark:text-black">Socket.io</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-postgresql.37b474b1.svg" alt="postgre" />
      <p className="dark:text-black">PostgreSQL</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-mongodb.e1664f55.svg" alt="mongodb" />
      <p className="dark:text-black">MongoDB</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-sass.9a084d16.svg" alt="scss" />
      <p className="dark:text-black">Sass/Scss</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-tailwindcss.6649f603.svg" alt="tailwindcss" />
      <p className="dark:text-black">Tailwindcss</p>
    </div>
    <div>
      <img src="https://sagarshah.dev/_next/static/media/icon-figma.d571d8e2.svg" alt="figma" />
      <p className="dark:text-black">Figma</p>
    </div>
    <div>
      <img className="dark:bg-black" src="https://sagarshah.dev/_next/static/media/icon-cypress-light.e9bb28b3.svg" alt="cypress" />
      <p className="dark:text-black">Cypress</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-storybook.aa1d1fcc.svg" alt="storybook" />
      <p className="dark:text-black">StoryBook</p>
    </div>
    <div className="flex justify-center items-center flex-col gap-1">
      <img src="https://sagarshah.dev/_next/static/media/icon-git.e364d254.svg" alt="git" />
      <p className="dark:text-black">Git</p>
    </div>

 
   </div>
    </section>
  )
}

export default Skills