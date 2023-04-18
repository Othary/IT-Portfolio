import React from 'react';
import {Link} from 'react-scroll';
import {FaLinkedin} from 'react-icons/fa';


const NavBar = () => {
  return (
    <div className='fixed z-10 w-full bg-gradient-to-b from-white via-white dark:from-[#272736] dark:via-[#272736] pb-5' >
        <div className='relative max-w-[800px] md:max-w-[1200px] h-[50px] sm:h-[60px] lg:h-[76px] mx-auto bg-[#404167] rounded-b-2xl flex justify-center items-center mb-5'>
            <ul className=' flex justify-center items-center w-full space-x-1 sm:space-x-3 pr-10 sm:pr-5 sm:pl-5 my-2'>
                <li><Link className='text-black hover:text-white  text-sm sm:text-base lg:text-lg xl:text-xl bg-[#D4CECE] hover:bg-[#39838F] px-2 min-[420px]:px-4  sm:px-6  pt-0.5 sm:pt-1 pb-1 sm:pb-2 my-2 mx-auto flex items-center rounded-full cursor-pointer transition duration-500 ease-in-out' spy={true} to="home" smooth={true} duration={500}>About</Link></li>  
                <li><Link className='text-black hover:text-white text-sm sm:text-base lg:text-lg xl:text-xl bg-[#D4CECE]  hover:bg-[#39838F] px-2 min-[420px]:px-4 sm:px-6  pt-0.5 sm:pt-1 pb-1 sm:pb-2 my-3 mx-auto flex items-center rounded-full cursor-pointer transition duration-500 ease-in-out' offset={-96} spy={true} to="bio" smooth={true} duration={500}>Bio</Link></li> 
                <li><Link className='text-black hover:text-white text-sm sm:text-base lg:text-lg xl:text-xl bg-[#D4CECE]  hover:bg-[#39838F] px-2 min-[420px]:px-4 sm:px-6  pt-0.5 sm:pt-1 pb-1 sm:pb-2 my-3 mx-auto flex items-center rounded-full cursor-pointer transition duration-500 ease-in-out' offset={-96} spy={true} to="portfolio" smooth={true} duration={500}>Projects</Link></li>
                <li><Link className='text-black hover:text-white text-sm sm:text-base lg:text-lg xl:text-xl bg-[#D4CECE]  hover:bg-[#39838F] px-2 min-[420px]:px-4 sm:px-6  pt-0.5 sm:pt-1 pb-1 sm:pb-2 my-3 mx-auto flex items-center rounded-full cursor-pointer transition duration-500 ease-in-out' offset={-96} spy={true} to="contact" smooth={true} duration={500}>Contact</Link></li>
              
                <li  className='absolute right-[6px] mb-0 social-icon'> 
                    <a className='flex justify-between items-center w-full text-[#D4CECE] hover:text-[#39838F] hover:bg-[#D4CECE] pl-2 sm:pl-4 pr-[6px] sm:pr-2 py-1 sm:py-2 mb-1 border-[#D4CECE] rounded-2xl
                    border-b-4 sm:border-b-[6px] border-r-4 sm:border-r-[6px] transition duration-500 ease-in-out' href="https://www.linkedin.com/in/sergey-ivannikov-22b557160/"  target="_blank" rel="noreferrer">
                        <FaLinkedin className='h-[30px] lg:h-[45px] w-[30px] lg:w-[45px]' size={20}/>
                    </a>
                  </li>
            </ul>

        </div>
        
    </div>
  )
}

export default NavBar