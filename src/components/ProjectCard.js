import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import LazyImage from './LazyImage';

export default function ProjectCard({ isOrientationStart, project }) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center bg-dark-slate m-10 rounded-3xl p-5 duration-300 hover:bg-opacity-80 hover:scale-90'>
      <h1 className='text-white font-bold text-xl'>{project.title}</h1>
      <Transition
        show={isExpand}
        enter='transition duration-500 ease-in-out'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition duration-500 ease-in-out'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {(ref) => (
          <div
            ref={ref}
            className={`flex flex-col ${
              isOrientationStart ? 'md:flex-row' : 'md:flex-row-reverse'
            } w-full justify-center items-center`}
          >
            <div className='grid grid-cols-2 gap-4 max-w-sm p-6 rounded-xl'>
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
            <div className='text-black font-extralight text-lg p-10 bg-zinc-300 rounded-xl'>
              <p>{project.description}</p>
            </div>
          </div>
        )}
      </Transition>
      <i
        onClick={() => setIsExpand(!isExpand)}
        className={`fa-solid cursor-pointer fa-chevron-down text-4xl duration-500 hover:scale-110 hover:animate-bounce ${
          isExpand ? 'text-white' : 'text-orange'
        }`}
      />
    </div>
  );
}
