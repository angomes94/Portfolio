import React, {useRef, useEffect} from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import { PROJECTDATA } from '../utils/data'

import ProjectCard from './ProjectCard'



export default function Projects() {

    const variants = {
        hidden: {
          scale: 0.8,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            damping: 8,
            stiffness: 200,
          },
        },
      };
      
      


    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);


    useEffect(() => {
        if (isInView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, isInView]);


    return (    
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} id='projects'>
        <h1 className = 'text-center text-black font-extrabold text-4xl pt-5 underline underline-offset-8decoration-orange'>Projects</h1>
        {Object.keys(PROJECTDATA).map((key, index) => {
            return ( <ProjectCard isOrientationStart={index % 2 === 0} project= {PROJECTDATA[key]} />)
        })}             
        </motion.div>
    )
}
