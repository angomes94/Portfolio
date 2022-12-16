import {useEffect, useRef}  from "react";
import Portrait from "../images/portrait.jpg"
import { motion, useInView, useAnimation} from "framer-motion"

function AboutMe() {

    const variants = {
        left_hidden: {
          x: "-100vw",
          transition: {ease: "easeIn", duration: 1}
        },
        visible: {
          x: 0,
          transition: {ease: "easeIn", duration: 1}
        },
        right_hidden: {
          x: "+100vw",
          transition: {ease: "easeIn", duration: 1}
        }
      };

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      imageControls.start("visible");
    } else {
      textControls.start("left_hidden");
      imageControls.start("right_hidden");
    }
  }, [textControls, imageControls, isInView]);




    return (
        <div ref={ref} id="aboutme" className="about-me-container">
        <div  className="about-me-wrapper">
            <motion.div animate={textControls} initial = "left_hidden" variants ={variants} className="about-me-text">
                <h4 className="font-roboto-condensed-bold">About Me</h4>
                <p className="font-roboto-condensed-regular">Hi! My name is André and I've been programming since 2013, first I started
                    coding microcontrollers and building 3D led cubes and other electronic projects
                    both in school, at work and some personal projects too. I can build . I always
                    had a big interest in tech and writing code is one of the lowest barrier ways to
                    get creative and build things
                </p>               
            </motion.div>
            <div className="space">
                </div>
            <motion.div animate={imageControls} initial = "right_hidden" variants ={variants}> 
            <img className="img-portrait" src={Portrait} alt="portrait"/>
            </motion.div> 
            </div>
        </div>
    );

}

export default AboutMe;