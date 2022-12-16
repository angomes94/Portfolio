import {useEffect, useRef}  from "react";
import ProjectsIntroWrapper from "./ProjectsIntro.js";
import { motion, useInView, useAnimation} from "framer-motion"


function Projects(){

    const variants = {
        left_hidden: {
          x: "-100vw",
          transition: {ease: "easeIn", duration: 1}
        },
        visible: {
          x: 0,
          transition: {ease: "easeIn", duration: 1}
        },
        grid_hidden: {
          y: "-100vh",
          opacity: 0,
          transition: {type: "spring", duration: 1}
        },
        grid_visible:{
            opacity:1,
            y:0,
            transition:{ type: "spring", duration:1}
        }
      };

  const textControls = useAnimation();
  const gridControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);


  useEffect(() => {

    if(isInView){
        textControls.start("visible");
        gridControls.start("grid_visible");
    }else {
        textControls.start("left_hidden");
        gridControls.start("grid_hidden");
    }

  }, [textControls, gridControls, isInView]);


    return (
        <div ref={ref} id="projects" className="projects-wrapper">
            <motion.h5 animate={textControls} initial = "left_hidden" variants ={variants} className="container-projects-title font-roboto-condensed-bold">Projects</motion.h5>
            <motion.div animate={gridControls} initial = "grid_hidden" variants ={variants} className="container-projects-grid">
                {ProjectsIntroWrapper()}
            </motion.div>
        </div>    
    );
}

export default Projects;