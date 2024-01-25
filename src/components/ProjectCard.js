import React, { useState } from 'react';
import LazyImage from './LazyImage';

export default function ProjectCard({ isOrientationStart, project }) {
  const [isExpand, setIsExpand] = useState(false);


  return (
    <div className='flex flex-col items-center justify-center bg-dark-slate m-10 rounded-3xl p-5 duration-300 active:bg-opacity-80 hover:bg-opacity-80'>
      <h1 className='text-white font-bold text-xl'>{project.title} {isExpand && <span className=' text-lg font-thin'> {" - " + project.date} </span>}</h1>
      <div className={` w-full py-5 flex transition-all duration-500 ease-in-out justify-center items-center ${isExpand ? ' opacity-100' : ' h-0 opacity-0 overflow-hidden'}`}>
        <div className={` w-full flex flex-col md:flex-row justify-center items-center md:p-10 ${isOrientationStart ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className={` grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 md:pb-0 ${isOrientationStart ? "md:pr-10" : "md:pl-10" } rounded-xl `}>
            <div className=' duration-500 ease-in-out transition-all  md:hover:cursor-zoom-in md:hover:scale-150'>
              <LazyImage
                className='rounded-xl border-4 border-orange md:max-h-[300px] md:w-auto '
                src={project.img1}
                alt='Project image 1'
              />
            </div>
            <div className='  duration-500 ease-in-out transition-all  md:hover:cursor-zoom-in md:hover:scale-150 '>
              <LazyImage
                className='rounded-xl border-4 border-orange  md:max-h-[300px] md:w-auto '
                src={project.img2}
                alt='Project image 2'
              />
            </div>
            <div className='  duration-500 ease-in-out transition-all  md:hover:cursor-zoom-in md:hover:scale-150'>
              <LazyImage
                className='rounded-xl border-4 border-orange md:max-h-[300px] md:w-auto  '
                src={project.img3}
                alt='Project image 3'
              />
            </div>
            <div className='  duration-500 ease-in-out transition-all  md:hover:cursor-zoom-in md:hover:scale-150'>
              <LazyImage
                className='rounded-xl border-4 border-orange  md:max-h-[300px]  md:w-auto'
                src={project.img4}
                alt='Project image 4'
              />
            </div>
          </div>
          <div className='flex flex-col text-black font-extralight text-center p-5 bg-zinc-300 rounded-xl'>
            <p className='md:w-96'>{project.description}</p>
            <div className='flex flex-row justify-center items-center pt-5'>
              {project.github && <i onClick={() => window.open(`${project.github}`, '_blank', 'noopener,noreferrer')} className="fa-brands fa-github text-4xl px-2  text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110"></i>}
              {project.url && <i onClick={() => window.open(`${project.url}`, '_blank', 'noopener,noreferrer')} className=" fa-solid fa-link text-4xl px-2 text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110"></i>}
            </div>
          </div>
        </div>
      </div>
      <i
        onClick={() => setIsExpand(!isExpand)}
        className={`fa-solid cursor-pointer p-2 ${isExpand ? 'text-white fa-chevron-up' : 'text-orange rotate-0 fa-chevron-down'
          } text-4xl duration-500 hover:animate-bounce active:animate-bounce`}
      />
    </div>
  );
}
