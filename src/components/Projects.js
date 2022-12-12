import React from "react";
import ProjectsIntro from "./ProjectsIntro.js"

function Projects(){
    return (    
          <div className="container-projects-grid">
            {ProjectsIntro.map(project => project)}
          </div>
      );
    }

export default Projects;