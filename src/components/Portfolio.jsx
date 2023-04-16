import React from 'react';
import ProjectImg1 from '../assets/01ProjectImg.jpg';
import ProjectImg2 from '../assets/02ProjectImg.jpg';


// TODO open description on mouse over
const projects = [
    {   
        key: 0,
        img: ProjectImg1,
        title: 'Dream Splash',
        desc: 'Personal Photography Website',
        descPlus1: 'The site is built for the price clarification and promotion purposes of my photo hobby. ',
        descPlus2: 'The main feature is a personally made carousel component with profound use of Tailwind and React inside of jsx.',
        code: 'https://github.com/Othary/PortfolioPV',
        live: 'https://dream-splash.com/',

    },
    {   
        key: 1,
        img: ProjectImg2,
        title: 'IT Portfolio',
        desc: 'You are right here buddy, no description needed :)'  ,
        descPlus1: 'The site is built to keep the history of my works in one place and sell myself as a diamond quality talent.',
        descPlus2: '...and to highlight my humbleness obviously.',
        code: 'https://github.com/Othary/IT-Portfolio',
        live: 'http://twopiece.work/'
    },
];

const Portfolio = () => {


    const listProjects = projects.map((project, i) => (
        <div key={i} className='relative max-w-[590px] max-h-[900px] bg-gradient-to-b  from-[#F0EDED] dark:from-[#404167] to-[#dbd8d8] dark:to-[#333452] sm:to-[#F0EDED] sm:dark:to-[#404167] rounded-2xl p-10 sm:p-[20px] sm:mb-5 mt-5 sm:mt-0 overflow-hidden '>            
        {/* <div key={i} className='relative max-w-[590px] max-h-[900px] bg-[#F0EDED] rounded-2xl p-10 sm:p-[20px] mb-5 overflow-hidden'>             */}
            <img className='dark:border-2 dark:border-[#c0c0c2] rounded-lg overflow-hidden' src={project.img} alt="next work example"/>
            <div className='text-center mt-3 '>
                <h2 className='text-2xl font-bold text-[#404167] dark:text-[#c0c0c2] mb-3'>{project.title}</h2>
                <h3 className='text-xl font-semibold text-[#404167] dark:text-[#c0c0c2] mb-3'>{project.desc}</h3>                
                <h3 className='text-xl text-[#404167] dark:text-[#c0c0c2] mb-3'>{project.descPlus1}</h3>
                <h3 className='text-xl text-[#404167] dark:text-[#c0c0c2] mb-4'>{project.descPlus2}</h3>
                <h3 className='text-xl italic  text-[#404167] dark:text-[#c0c0c2] mb-[50px]'>For additional details see the code source.</h3>
                <div className='absolute bottom-0 left-[50%] -translate-x-[50%] flex item-center gap-5 px-[20%] mt-1 '>
                    <a className='w-[100px] text-white dark:text-black dark:hover:text-white base text-xl bg-[#404167] dark:bg-[#D4CECE]  hover:bg-[#39838F] px-4 pt-1 pb-1 my-3 mx-auto  rounded-full cursor-pointer transition duration-500 ease-in-out' href={project.code} target="_blank" rel="noreferrer">Code</a>
                    <a className='w-[100px] text-white dark:text-black dark:hover:text-white base text-xl bg-[#404167] dark:bg-[#D4CECE]  hover:bg-[#39838F] px-4 pt-1 pb-2 my-3 mx-auto  rounded-full cursor-pointer transition duration-500 ease-in-out' href={project.live} target="_blank" rel="noreferrer">Live</a>
                </div>
            </div>            
        </div>
    )
    // return (
    //     <li>{listProjects}</li>
    // )
        
    );

    return (
        
        <div name='portfolio' className='bg-white dark:bg-[#272736] pb-5 sm:pb-0'>
            <div className='max-w-[1200px] h-9 lg:h-11 rounded-2xl mx-auto text-center mb-5 bg-gradient-to-r  from-white dark:from-[#1c4348] via-[#39838F] dark:via-[#39838F] to-white dark:to-[#1c4348]'>
                <h2 className=' text-lg sm:text-xl lg:text-2xl font-bold text-white inline border-b-[4px] lg:border-b-[6px] border-white px-5 rounded-2xl'>PROJECTS </h2>
            </div>
            
            <div className='relative max-w-[1200px] mx-auto  bg-white dark:bg-[#272736] sm:grid grid-cols-2 gap-5'>    
                {/* <div className='absolute left-2 top-2 block w-[14vh] h-[14vh]  border-[#39838F] rounded-2xl border-t-[6px] border-l-[6px]'></div>         */}
                {listProjects}
            </div>
        </div>
        
    )
}

export default Portfolio