import React from "react";
import { dataExpandableCard } from "../data/data";


function ProjectCardExpandedView(props) {
  // Find the project with the matching id
  const project = dataExpandableCard.find(item => item.id === props.projectId);

  // If a project was found, display its expanded card
  if (project) {
    return (
        <div className="container-project">
         <h7 className = "font-roboto-bold">{project.title} <span className="font-montserrat-thin">{project.date}</span></h7>
            <div className="wrapper-project">
                <p className="description font-montserrat-extralight">{project.description}</p>
                <div className="space"></div>
                <div className="wrapper-images">
                    <img src={project.img1} alt="Project image1"/>
                    <img src={project.img2} alt="Project image2"/>
                    <img src={project.img3} alt="Project image3"/>
                    <img src={project.img4} alt="Project image4"/>
            </div>
        </div>
      </div>
    );
}
  // Otherwise, return null
  return null;
}

export default ProjectCardExpandedView;

