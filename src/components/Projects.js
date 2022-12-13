import React from "react";
import ProjectsIntroWrapper from "./ProjectsIntro.js";

function Projects(){
    return (
        <div className="projects-wrapper">
            <h5 className="container-projects-title font-roboto-condensed-bold">Projects</h5>
            <div className="container-projects-grid">
                {ProjectsIntroWrapper()}
            </div>
        </div>    
    );
}

export default Projects;