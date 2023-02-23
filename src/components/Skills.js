import React,{useRef,useEffect} from 'react'
import { motion, useAnimation, useInView } from "framer-motion";


export default function Skills() {

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: -100,
            transition: { duration: 0.4 }
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        },
    }


    const childrenLeft = {
        icon_visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }
        },
        icon_hidden_left: {
          opacity: 0,
          scale: 1,
          x: "-100vw",
          transition: { duration: 0.4, type: "spring", stiffness: 500, damping: 20 }
        }
      }


      const childrenRight =  {
        icon_visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }
        },
        icon_hidden_right: {
          opacity: 0,
          scale: 1,
          x: "+100vw",
          transition: { duration: 0.4, type: "spring", stiffness: 500, damping: 20 }
        }
      }

      

      const cardControls = useAnimation();
      const iconsControlsLeft = useAnimation();
      const iconsControlsRight = useAnimation();
      const ref = useRef(null);
      const isInView = useInView(ref);

    
      useEffect(() => {
        if (isInView) {
            cardControls.start("visible");
            iconsControlsLeft.start("icon_visible");
            iconsControlsRight.start("icon_visible");

        } else {
            cardControls.start("hidden");
            iconsControlsLeft.start("icon_hidden_left");
            iconsControlsRight.start("icon_hidden_right")
        }
      }, [cardControls, iconsControlsLeft, iconsControlsRight, isInView]);



    return (

        <div
        ref={ref} 
        id='skills' className=" flex flex-col justify-center items-center mx-5 md:mx-20">
            <h1 className=' text-black text-4xl font-extrabold underline underline-offset-4 pb-5 decoration-orange'>Skills</h1>
            <motion.div
                variants={container}
                initial="hidden"
                animate={cardControls}
             className=' grid grid-cols-2 md:grid-cols-4 bg-grey w-full gap-4 p-5 md:p-10 justify-items-center rounded-3xl text-6xl'>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white  p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-c-plain colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-react-original-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-javascript-plain colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-jquery-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-nextjs-original colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-androidstudio-plain colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-arduino-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-python-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-html5-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-raspberrypi-line colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-css3-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenRight} initial="icon_hidden_right" animate={iconsControlsRight} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-tailwindcss-plain colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-labview-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
                <motion.div variants={childrenLeft} initial="icon_hidden_left" animate={iconsControlsLeft} className="relative flex flex-col group bg-white p-10 rounded-3xl duration-500 ring-2 ring-orange focus:ring-8 hover:ring-8 ">
                    <i className="devicon-git-plain-wordmark colored duration-500 group-hover:animate-bounce"></i>
                </motion.div>
            </motion.div>
        </div>
    )
}
