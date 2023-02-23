import React from 'react'
import {motion} from "framer-motion"

export default function Header() {
  return (
    <motion.div
    initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeIn",
                duration: 1.5
            }}
    
    className='flex w-full items-center justify-center bg-transparent py-10'> 
       <div className='flex flex-row items-center justify-center bg-dark-slate text-black font-light text-xs p-5 md:text-xl md:p-10 rounded-full'>
        <a href='#aboutme' className=' text-center w-16 md:w-28 py-2 duration-300 bg-white rounded-full hover:scale-105 hover:text-orange'>About me</a>
        <a href='#skills' className=' text-center w-16  md:w-28 py-2 mx-2 duration-300 bg-white rounded-full hover:scale-105 hover:text-orange'>Skills</a>
        <a href='#projects' className='text-center w-16 md:w-28 py-2 mr-2 duration-300 bg-white rounded-full hover:scale-105 hover:text-orange'>Projects</a>
        <a href='#contact' className=' text-center w-16 md:w-28 py-2 duration-300 bg-white rounded-full hover:scale-105 hover:text-orange'>Contacts</a>
        </div>  
    </motion.div>
  )
}
