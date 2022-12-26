import React from "react";
import { dataExpandableCard } from "../data/data";
import {motion} from "framer-motion";



function ProjectCardExpandedView(props) {

  const project = dataExpandableCard.find(item => item.id === props.projectId);

  if (project) {
    return (
        <motion.div className="container-project"
                initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
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
      </motion.div>
    );
}

  return null;
}

export default ProjectCardExpandedView;

