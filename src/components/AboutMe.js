import React, { useEffect, useRef } from 'react'
import LazyImage from './LazyImage'
import { motion, useAnimation, useInView } from "framer-motion";



export default function AboutMe() {

  const variants = {
    left_hidden: {
      x: "-100vw",
      transition: {  duration: 1 }
    },
    visible: {
      x: 0,
      transition: {  duration: 1 }
    },
    right_hidden: {
      x: "+100vw",
      transition: {  duration: 1 }
    }
  };


  const textControls = useAnimation();
  const imageControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      imageControls.start("visible");
    } else {
      textControls.start("right_hidden");
      imageControls.start("left_hidden");
    }
  }, [textControls, imageControls, isInView]);



  return (
    <div ref={ref} id='aboutme' className='flex flex-col md:flex-row w-full justify-center items-center'>
      <motion.div animate={imageControls} initial="left_hidden" variants={variants} className='flex-1 p-20 md:p-36 md:max-w-4xl'>
        <LazyImage className="rounded-full" src="https://angomes-portfolio-images.s3.eu-west-3.amazonaws.com/portrait.jpg" alt="Portrait" />
      </motion.div>
      <motion.p animate={textControls} initial="right_hidden" variants={variants} className='flex-1 p-10 md:pl-32 md:bg-zinc-300 md:rounded-l-full text-lg font-extralight'>
        Hi! My name is André and I've been coding since 2013, first I started with
        microcontrollers building 3D LED cubes and other electronic projects
        both in school, at work and some personal projects too. I've always
        had a big interest in tech and over the years I started to pivout more and more into programing,
        writing code is an amazing way to build creative apps and websites.
      </motion.p>

    </div>
  )
}
