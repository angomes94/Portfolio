import React, {useState, useEffect} from "react";
import ProjectCardExpandedView from "./ProjectCardExpandedView";
import {dataProjectCell} from "../data/data";
import {motion} from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function ProjectCard() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest(".expanded-card") && isExpanded) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("click", handleClick);
        return() => {
            document.removeEventListener("click", handleClick);
        };
    }, [isExpanded]);

    const toggleExpandedCard = (id) => {
        setSelectedProject(id);
        setIsExpanded(!isExpanded);
    };

    const ProjectsIntro = dataProjectCell.map((project) => (
        <motion.div
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
            }}
            key={project.id}
            className="project-cell"
            onClick={() => toggleExpandedCard(project.id)}>
            <h1 className="project-title font-roboto-bold">{project.title}</h1>
            <p className="project-intro font-montserrat-extralight">
                {project.intro}
            </p>
        </motion.div>
    ));

    return (
        <React.Fragment>
            {
                isExpanded && (
                    <div className="expanded-card">
                        <IconButton onClick={toggleExpandedCard} className="close-button">
                        <CloseIcon/>
                        </IconButton>
                        <ProjectCardExpandedView projectId={selectedProject}/>
                    </div>
                )
            }
            {ProjectsIntro}
        </React.Fragment>
    );
}

export default ProjectCard;
