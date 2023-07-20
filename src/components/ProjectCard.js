import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

export default function ProjectCard({ isOrientationStart, project }) {
  const [isExpand, setIsExpand] = useState(false);
  const [height, setHeight] = useState("");

  useEffect(() => {

    switch (project.id) {
      case 0:
        setHeight("h-[150rem]")
        break;
      case 1:
        setHeight("h-[150rem]")
        break;
      case 2:
        setHeight("h-[150rem]")
        break;
      case 3:
        setHeight("h-[150rem]")
        break;
      case 4:
        setHeight("h-[150rem]")
        break;
      case 5:
        setHeight("h-[150rem]")
        break;
      case 6:
        setHeight("h-[150rem]")
        break;
      case 7:
        setHeight("h-[150rem]")
        break;
      case 8:
        setHeight("h-[150rem]")
        break;
      case 9:
        setHeight("h-[150rem]")
        break;
      case 10:
        setHeight("h-[150rem]")
        break;
      case 11:
        setHeight("h-[150rem]")
        break;

      default:
        setHeight("h-[150rem]")
        break;
    }


  }, [project.id])


  return (
    <div className='flex flex-col items-center justify-center bg-dark-slate m-10 rounded-3xl p-5 duration-300 hover:bg-opacity-80'>
      <h1 className='text-white font-bold text-xl'>{project.title} {isExpand && <span className=' text-lg font-thin'> {" - " + project.date} </span>}</h1>
      <div className={` w-full py-5 flex transition-all duration-500 ease-in-out justify-center items-center ${isExpand ?  ' opacity-100' : ' h-0 opacity-0 overflow-hidden'}`}>
        <div className={` w-full flex flex-col md:flex-row justify-center items-center md:p-10 ${isOrientationStart ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className={` grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 md:p-10 rounded-xl  `}>
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
          <div className='flex flex-col text-black font-extralight text-center p-5 bg-zinc-300 rounded-xl'>
            <p className='w-96'>{project.description}</p>
            <div className='flex flex-row justify-center items-center pt-5'>
            {project.github && <i onClick={() => window.open(`${project.github}`, '_blank', 'noopener,noreferrer')} className="fa-brands fa-github text-4xl px-2  text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110"></i>}
            {project.url && <i onClick={() => window.open(`${project.url}`, '_blank', 'noopener,noreferrer')} className=" fa-solid fa-link text-4xl px-2 text-center cursor-pointer duration-300 hover:scale-110 focus:scale-110"></i> }
            </div>
          </div>
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
