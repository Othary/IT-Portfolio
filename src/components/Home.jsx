import React from 'react';
import myPhoto from '../assets/me.png';
import onePiece from '../assets/onePiece.png';
 
const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-[#ffffff] dark:bg-[#272736] pt-[70px] sm:pt-[80px] lg:pt-[96px] overflow-hidden'>        
            {/*About Container */}
      <div  className='max-w-[1200px] relative bg-[#F0EDED] dark:bg-[#404167]  rounded-2xl mx-auto flex mb-5'>
        <div className='absolute left-2 top-2 block w-[14vh] h-[14vh]  border-[#39838F] rounded-2xl border-t-4 sm:border-t-[6px] border-l-4 sm:border-l-[6px]'></div>
        
        <div className=' justify-center'>

          <div className='w-full  flex-1 pl-7 md:pr-10 pr-7 pt-7 md:pt-10 '>
            <p className='text-[#404167] dark:text-[#c0c0c2] text-sm sm:text-lg mb-0 sm:mb-[1vh] '>Hi, my name is</p>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-[2vh] text-[#39838F]'>Sergey</h1>
            <h2 className=' text-base min-[440px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-[2vh] text-[#404167] dark:text-[#c0c0c2] clear-left'>I am an Auckland based <br/> Front-End Web Developer</h2>
            
            <p className='w-[60%] min-[586px]:w-[55%] sm:w-[55%]  lg:w-[55%] 2xl:w-[50%] text-[#404167] dark:text-[#c0c0c2] text-lg xl:text-xl mb-2 sm:mb-[2vh]  '>I have expertise in creating dynamic and responsive websites using Javascript and React.</p> 
            <p className='min-[540px]:w-[65%] md:w-[60%] lg:w-[55%] 2xl:w-[50%] text-[#404167] dark:text-[#c0c0c2]  text-lg xl:text-xl mb-2 sm:mb-[2vh] '> As a task-oriented professional, I possess outstanding planning, organizing and interpersonal skills.<br/></p> 
            <p className='min-[747px]:w-[70%] md:w-[65%] lg:w-[55%] 2xl:w-[50%] text-[#404167] dark:text-[#c0c0c2]  text-lg xl:text-xl mb-2 sm:mb-[2vh] '>Outside of my professional life, I am a lifelong learner with insatiable curiosity for all things new.</p> 
            <p className='min-[942px]:w-[65%] lg:w-[60%] 2xl:w-[50%] text-[#404167] dark:text-[#c0c0c2]  text-lg xl:text-xl mb-5 '>I find great pleasure in music and partner Latin dancing, pursuing artistic photography, woodcarving, surf-, snow-, kite-boarding and trying new things</p>             
          </div>

          <div className='absolute w-1/2 -right-5 lg:-right-10 top-0 min-[400px]:top-10 lg:bottom-1 lg:top-1 flex-1 flex justify-center items-center overflow-hidden'>
            <img className='w-full p-0 sm:p-4 md:p-6 lg:p-8 xl:p-10 float-right ' src={myPhoto} alt="Monkey D. Luffy"/>
          </div>
          
        </div>
      </div>

{/* BIO */}
      <div name='bio' className='max-w-[1200px] h-9 lg:h-11 rounded-2xl mx-auto text-center mb-5 bg-gradient-to-r from-white dark:from-[#1c4348] via-[#39838F] dark:via-[#39838F] to-white dark:to-[#1c4348]'>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-white inline border-b-[4px] lg:border-b-[6px] border-white px-5 rounded-2xl'>BIO</h2>
      </div>
      
      <div className='max-w-[1200px]  bg-[#404167] rounded-2xl mx-auto pb-2 flex  justify-center  mb-5'>
        <div className='w-full min-h-[24vh] relative '>
          <div className='w-[55%] sm:w-[45%] md:w-[35%] lg:w-[25%] pl-7 '>
            <img className=' float-left bottom-0  object-contain h-full py-[5px] mr-2' src={onePiece} alt="next work example"/>
          </div>
          <div className=' text-white dark:text-[#c0c0c2] '>
            <p className='text-[#D4CECE] dark:text-[#c0c0c2] text-lg xl:text-xl pb-4 pt-2 sm:pt-4 md:pt-7 lg:pt-10 pl-7 pr-7 md:pr-12  '>Starting from my adolescent temptations of hacking video games and creating bots for MMORPG into automatization of all possible management processes in construction, <br/><br/> I decided to use my knack for computer technologies and my passion to mess with code to pave my way into global net
            <br/><br/>  With also over five years of photography and Photoshop experience, I have sharpened my eye and have a strong attention to details</p>
          </div>
          <div className='absolute right-2 bottom-0 block w-[14vh] h-[14vh] border-[#D4CECE] rounded-2xl border-b-4 sm:border-b-[6px] border-r-4 sm:border-r-[6px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Home

