import React from 'react'
import { PROJECTDATA } from '../utils/data'

import ProjectCardView from './ProjectCardView';



export default function Projects() {


    return (
        <div id='projects' className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-center text-black font-extrabold text-4xl my-5 underline underline-offset-8 decoration-orange'>Some of my Work</h1>
            <div className='flex flex-col p-4' >
                {Object.keys(PROJECTDATA).map((key, index) => {
                    return (<ProjectCardView key={index} isOrientationStart={index % 2 === 0} project={PROJECTDATA[key]} />)
                })}
            </div>
        </div>
    )
}
