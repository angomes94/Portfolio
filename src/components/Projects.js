import React from 'react'
import { PROJECTDATA } from '../utils/data'

import ProjectCard from './ProjectCard'



export default function Projects() {

    

    return (    
        <div id='projects'>
        <h1 className = 'text-center text-black font-extrabold text-4xl pt-5 underline underline-offset-8 decoration-orange'>Projects</h1>
        {Object.keys(PROJECTDATA).map((key, index) => {
            return (
                
                <ProjectCard isOrientationStart={index % 2 === 0} project= {PROJECTDATA[key]} />
               
                )         
        })}             
        </div>
    )
}
