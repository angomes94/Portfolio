import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const data = [
    {
        id: 0,
        title: "Led Cube 8x8x8",
        intro: "Led Cube with 512Led's programed in C to create 3D animations"
    }, {
        id: 1,
        title: "Led Cube 4x4x4",
        intro: "Portable batery powered Led Cube with 64Led's programed in C to create 3D anim" +
                "ations"
    }, {
        id: 2,
        title: "HV Capacitors Test Bech",
        intro: "3 HV converters using a mix of DC + AC voltage to stress test HV capacitors"
    }, {
        id: 3,
        title: "Remote control panel",
        intro: "Control panel used to view a variety of charts updated in realtime using Labvi" +
                "ew"
    }, {
        id: 4,
        title: "Step Motor Interface",
        intro: "Remote controled Step Motor interface using PWM signals to turn a 3-phase HV v" +
                "aric"
    }, {
        id: 5,
        title: "Active Filters",
        intro: "High frequency Voltage filters to atenuate voltage noise"
    }, {
        id: 6,
        title: "MusicPad",
        intro: "Android App that simulates a DJ Music Pad built using Java and XML"
    }, {
        id: 7,
        title: "Smart Motor Home",
        intro: "Solar system and battery bank full controled by Raspberry pi"
    }, {
        id: 8,
        title: "Automated Tarding Algorithms",
        intro: "Complex trading algorithms programed in MQL4"
    }
];

function ProjectsIntroWrapper() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleClick = (e) => {
            // Check if the target of the click is not within the expanded card, and if the
            // expanded card is currently visible
            if (!e.target.closest('.expanded-card') && isExpanded) {
                setIsExpanded(false);
            }
        }
        document.addEventListener('click', handleClick);
        return() => {
            document.removeEventListener('click', handleClick);
        }
    }, [isExpanded]);

    // Function to toggle the expanded card and set the selected project
    const toggleExpandedCard = (id) => {
        setSelectedProject(id);
        setIsExpanded(!isExpanded);
    }

    const ProjectsIntro = data.map(project => (
        <motion.div
            whileHover={{
                scale: 1.1
            }}
            key={project.id}
            className="project-cell"
            onClick={() => toggleExpandedCard(project.id)}>
            <h1 className="project-title font-roboto-bold">
                {project.title}
            </h1>
            <p className="project-intro font-montserrat-extralight">
                {project.intro}</p>
        </motion.div>
    ));

    return (
        <React.Fragment>
            {
                isExpanded && <motion.div className="expanded-card">
                        <h1 className="expanded-title font-roboto-bold">
                            {selectedProject.title}
                        </h1>
                        <p className="expanded-intro font-montserrat-extralight">
                            {selectedProject.intro}
                        </p>
                        <IconButton onClick={toggleExpandedCard} className="close-button">
                            <CloseIcon/>
                        </IconButton>
                    </motion.div>
            }
            {ProjectsIntro}
        </React.Fragment>
    );
}

export default ProjectsIntroWrapper;