import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ProjectCardView({ isOrientationStart, project }) {

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
    

    

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start(isOrientationStart ? 'right_hidden' : 'left_hidden');
        }
    }, [controls, isInView, isOrientationStart]);

    return (
        <div className='my-10' ref={ref}>
            <motion.div
                animate={controls}
                initial={isOrientationStart ? 'right_hidden' : 'left_hidden'}
                variants={variants}
                className='flex flex-col items-center justify-center p-5 my-5 md:my-15 md:mx-32'
            >
                <h1 className='text-dark-slate font-bold text-xl'>
                    {project.title} <span className='text-lg font-thin'>{' - ' + project.date}</span>
                </h1>
                <div className='w-full py-5 flex transition-all duration-500 ease-in-out justify-center items-center'>
                    <div className={`w-full flex flex-col justify-center items-center md:p-10`}>
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 rounded-xl`}>
                            <div className='flex justify-center items-center'>
                                <img
                                    className='rounded-xl md:max-h-[300px] md:w-auto duration-500 ease-in-out transition-all md:hover:cursor-zoom-in md:hover:scale-150 hover:z-50'
                                    src={project.img1}
                                    alt='Project image 1'
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img
                                    className='rounded-xl md:max-h-[300px] md:w-auto duration-500 ease-in-out transition-all md:hover:cursor-zoom-in md:hover:scale-150 hover:z-50'
                                    src={project.img2}
                                    alt='Project image 2'
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img
                                    className='rounded-xl md:max-h-[300px] md:w-auto duration-500 ease-in-out transition-all md:hover:cursor-zoom-in md:hover:scale-150 hover:z-50'
                                    src={project.img3}
                                    alt='Project image 3'
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img
                                    className='rounded-xl md:max-h-[300px] md:w-auto duration-500 ease-in-out transition-all md:hover:cursor-zoom-in md:hover:scale-150 hover:z-50'
                                    src={project.img4}
                                    alt='Project image 4'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:w-2/3 text-black font-extralight text-center p-5 bg-zinc-300 rounded-xl'>
                            <p className='text-sm'>{project.description}</p>
                            <div className='flex flex-row justify-center items-center pt-5'>
                                {project.github && (
                                    <i
                                        onClick={() =>
                                            window.open(`${project.github}`, '_blank', 'noopener,noreferrer')
                                        }
                                        className='fa-brands fa-github text-4xl px-2 text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110'
                                    ></i>
                                )}
                                {project.url && (
                                    <i
                                        onClick={() =>
                                            window.open(`${project.url}`, '_blank', 'noopener,noreferrer')
                                        }
                                        className='fa-solid fa-link text-4xl px-2 text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110'
                                    ></i>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}


