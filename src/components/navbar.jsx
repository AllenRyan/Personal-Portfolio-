import React from 'react'
import { useState } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({setMenu}) => {
    const [dark, setDark] = useState(false);
    function darkModeHandler(){
     setDark(!dark);
     document.body.classList.toggle("dark")
    }
   function crossMenu(){
      setMenu(false)
   }
  return (
    <nav>
        <div>
        <IoMdClose onClick={crossMenu} className='text-3xl absolute right-2 top-2 cursor-pointer' />

        </div>
        <ul className='flex flex-col gap-5 mt-10 p-5'>
            <li><a className='text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-[#D1D5DB]' href='#'>About</a></li>
            <li><a className='text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-[#D1D5DB]' href='#work'>Work</a></li>
            <li><a className='text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-[#D1D5DB]' href='#testimonials'>Testimonials</a></li>
            <li><a className='text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-[#D1D5DB]' href='#contact'>Contact</a></li>
            <hr />
            <div className='flex justify-between p-5'>
                <h1 className='text-black dark:text-[#D1D5DB]'>Switch Theme</h1>
            <button onClick={()=> darkModeHandler()}>
            {
          
          dark && <IoSunny className="text-black dark:text-[#D1D5DB]   text-2xl pt-1" /> // render sunny when dark is true
      }
      {
          !dark && <IoMoon className="dark:text-white  text-black text-2xl pt-1" /> // render moon when dark is false
      }
      
    </button>
            </div>

        </ul>
        <a href="#" className="ml-20 nav-btn lg:text-lg  dark:bg-white  dark:hover:bg-slate-600 md:text-xs  ">Download CV</a>
    </nav>
  )
}

export default Navbar