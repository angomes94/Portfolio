import React from "react";
import {motion} from "framer-motion";
import Animation3D from "./Animation3D.js";

function Frontpage() {

    const variants = {
        left_hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0
        },
        right_hidden: {
            x: "+100vw"
        },
    }

    return (    
        <div className="front-page-container">
        <Animation3D/>
        <motion.div className="front-page-text-wrapper"
        variants={variants}
                        initial="left_hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            duration: 1
                        }}>     
                    <h1 className="font-roboto-condensed-light">Hi, my name is</h1>
                    <h2 className="font-roboto-condensed-bold"> <span className="frontpage-span">André Gomes</span>, I'm a Programmer.</h2>
                    <h3 className="font-roboto-condensed-regular">Started out in electronics but fell in love with coding.</h3>          
        </motion.div>
        </div>
    )
}

export default Frontpage;