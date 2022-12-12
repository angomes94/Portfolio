import React from "react";
import ProjectsIntroWrapper from "./ProjectsIntro.js";

function Projects(){
    return (    
          <div className="container-projects-grid">
            {ProjectsIntroWrapper()}
          </div>
      );
    }

export default Projects;