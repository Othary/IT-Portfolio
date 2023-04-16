import React from 'react';
import onePiece from '../assets/postman.png';
const Contacts = () => {

  return (
    <> 
        <div name='contact' className='w-full max-h-full bg-[#ffffff] dark:bg-[#272736] overflow-hidden'>
            <div className='max-w-[1200px] h-9 lg:h-11 rounded-2xl mx-auto text-center mb-5 bg-gradient-to-r  from-white dark:from-[#1c4348] via-[#39838F] dark:via-[#39838F] to-white dark:to-[#1c4348]'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-white inline border-b-[4px] lg:border-b-[6px] border-white px-5 rounded-2xl'>CONTACT</h2>
            </div>
            <div className='relative max-w-[1200px] mx-auto  bg-[#404167] rounded-t-2xl flex justify-center items-center'>
                <form method='POST' action="https://getform.io/f/857b9972-3ece-4abb-a0b5-5f6815204b04" className='flex flex-col w-[400px] md:w-[500px] px-4 mt-4 sm:mt-4 xl:mt-0'>
                    <div className=' pb-6 text-center'>
                        <p className='text-gray-300 pt-5 text-sm sm:base lg:text-lg xl:text-xl'>If you have any questions submit the form below</p>
                    </div>
                    <input className=' p-2 bg-[#f0eded] rounded-t-xl' type="text" name='name' placeholder='Name' required/>
                    <input className='my-4 p-2 bg-[#f0eded]' type="email" name='email' placeholder='Email' required />
                    <textarea className='bg-[#f0eded] p-2  rounded-b-xl' name="message" id="" rows="10" placeholder='Message' required></textarea>
                    <button className='text-black hover:text-white base text-xl bg-[#D4CECE] hover:bg-[#39838F] px-6 pt-1 pb-2 mt-5 mb-[120px]  lg:mb-5 mx-auto flex items-center rounded-full cursor-pointer transition duration-500 ease-in-out'>Submit</button>            
               </form>  
               <div className='absolute right-2 bottom-0 block w-[14vh] h-[14vh]  border-[#D4CECE] rounded-2xl border-b-4 sm:border-b-[6px] border-r-4 sm:border-r-[6px] mb-2'></div>

               <div className='absolute bottom-1 lg:bottom-5 right-1 lg:right-2 inline-block align-middle mx-auto w-[37%] min-[464px]:w-[33%] sm:w-[30%] md:w-[25%] lg:w-[20%]'>
                    <img className='inline-block align-middle min-h-full py-[5px]' src={onePiece} alt="next work example"/>
                </div>
           
            </div> 
        </div>
    </>
    
  )
}


export default Contacts