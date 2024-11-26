import { VscGithubAlt } from "react-icons/vsc";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";


const Hero = () => {
  return (
    <main id="hero" className="dark:bg-white lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row lg:justify-between md:justify-between  flex flex-col-reverse items-center justify-center  py-28 px-20">
        <div className="lg:w-[70%] md:w-[70%] sm:w-[65%]">
          <h1 className="lg:text-6xl h1 font-bold mt-12 dark:text-black md:text-4xl sm:text-4xl text-4xl">Hi, I'm Abrar 👋</h1>
          <p className="text-[15px] lg:w-[95%] mt-5 dark:text-black md:w-[100%] w-[100%]">I'm a full stack developer (React.js & Node.js ) with a focus on creating (and occasionaly design) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even tough I have been creating web applicatins for over 7 years, I still love it as if it was something new.</p>
          <div className="mt-8 flex items-center gap-1">
          <svg className="dark:fill-black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            <p className="dark:text-black">Abbottabad, Pakistan</p>
          </div>
          <div className="ml-1 mt-2 flex items-center gap-1">
          <svg className="dark:fill-green" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <p className="dark:text-black">Available for new projects</p>
          </div>
          <div className="ml-1 mt-8 flex items-center gap-4">
          <VscGithubAlt className=" text-2xl dark:fill-black"/>
          <CiTwitter  className="text-3xl dark:fill-black"/>
          <FaFigma className="text-2xl dark:fill-black"/>
          </div>
        </div>
        <div className="ml-10 md:mt-10 sm:mb-32">
            <img src="/public/images/column.png" alt="hero-img" />
        </div>
    </main>
  )
}

export default Hero