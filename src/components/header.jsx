import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import Navbar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [dark, setDark] = useState(false);
  function darkModeHandler(){
   setDark(!dark);
   document.body.classList.toggle("dark")
  }
  const [menu, setMenu] = useState(false);

  return (
    <>
    <header className='flex  justify-between items-center py-4 px-9 fixed top-0  right-0 left-0 '>
    <div className="w-30 ml-10">
      <a href="#" className="text-4xl lg:text-3xl h1 font-semibold dark:text-black md:text-2xl sm:text-3xl"> &lt;SS /&gt;</a>
    </div>
    <nav className="hidden lg:mx-6 md:mx-6 sm:px-6 lg:flex md:flex lg:items-center md:items-center lg:px-8 md:px-8 lg:gap-6 md:gap-6 sm:hidden">
      <ul className="flex gap-7 px-4">
        <li><a className="font-medium text-base transition-all ease-in a dark:text-black dark:hover:text-slate-600" href="#hero">Home</a></li>
        <li><a className="font-medium text-base transition-all ease-in a dark:text-black dark:hover:text-slate-600" href="#work">Work</a></li>
        <li><a className="font-medium text-base transition-all ease-in a dark:text-black dark:hover:text-slate-600" href="#testimonials">Testimonials</a></li>
        <li><a className="font-medium text-base transition-all ease-in a dark:text-black dark:hover:text-slate-600" href="#contact">Contact</a></li>
      </ul>
      
      <button onClick={()=> darkModeHandler()}>
      
      {
          dark && <IoMoon className="text-black  text-4xl pt-1" /> // render moon when dark is false
      }
      {
          
          !dark && <IoSunny className="text-white  text-4xl pt-1" /> // render sunny when dark is true
      }
    </button>
      <a href="#" className="nav-btn lg:text-base dark:bg-black dark:text-white dark:hover:bg-slate-600 md:text-xs  ">Download CV</a>

    </nav>
    <GiHamburgerMenu onClick={() => setMenu(!menu)} className="text-white text-3xl block md:hidden dark:text-black" />
      {menu ? <div className="transition-all ease duration-500 delay-0  absolute right-0 flex flex-col gap-10 top-0 h-screen bg-white dark:bg-black dark:text-white  w-80">
    <Navbar setMenu={setMenu}  />

    </div> : <div className="transition-all ease duration-500 delay-0  absolute right-[-100%] flex flex-col gap-10 top-0 h-screen bg-white dark:bg-black dark:text-white  w-80">
    <Navbar setMenu={setMenu}  />

    </div> }
    
    </header>
    
     </>
  )
}

export default Header