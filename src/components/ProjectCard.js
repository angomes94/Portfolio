import React, { useState } from 'react';
import LazyImage from './LazyImage';

export default function ProjectCard({ isOrientationStart, project }) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center bg-dark-slate m-10 rounded-3xl p-5 duration-300 hover:bg-opacity-80 hover:scale-90'>
      <h1 className='text-white font-bold text-xl'>{project.title} {isExpand && <span className=' text-lg font-thin'> {" - " + project.date} </span>}</h1>
      <div
        className={`flex flex-col transition-all duration-500 ease-in-out ${isOrientationStart ? 'md:flex-row' : 'md:flex-row-reverse'
          } justify-center items-center ${isExpand ? ' h-[62rem] md:h-[42rem] opacity-100' : ' h-0 opacity-0 overflow-hidden'
          }`}>
        <div className={` grid grid-cols-2 ${project.id === 6 || project.id === 7 ? "max-w-sm" : "max-w-lg"}  gap-4 p-6 rounded-xl`}>
          <LazyImage
            className='rounded-xl border-4 border-orange'
            src={project.img1}
            alt='Project image 1'
          />
          <LazyImage
            className='rounded-xl border-4 border-orange'
            src={project.img2}
            alt='Project image 2'
          />
          <LazyImage
            className='rounded-xl border-4 border-orange'
            src={project.img3}
            alt='Project image 3'
          />
          <LazyImage
            className='rounded-xl border-4 border-orange'
            src={project.img4}
            alt='Project image 4'
          />
        </div>
        <div className='text-black font-extralight text-lg p-10 md:max-w-lg bg-zinc-300 rounded-xl'>
          <p>{project.description}</p>
        </div>
      </div>
      <i
        onClick={() => setIsExpand(!isExpand)}
        className={`fa-solid cursor-pointer ${isExpand ? 'text-white fa-chevron-up' : 'text-orange rotate-0 fa-chevron-down'
          } text-4xl duration-500 hover:scale-110 hover:animate-bounce `}
      />
    </div>
  );
}
