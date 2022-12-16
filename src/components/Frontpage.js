import React from "react";
import {motion} from "framer-motion";
import {EnvelopeIcon} from '@heroicons/react/24/solid';
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
                    <motion.h1
                        className="font-roboto-condensed-light"
                        variants={variants}
                        initial="left_hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            duration: 1
                        }}>Hi, my name is
                    </motion.h1>
                    <motion.h2
                        className="font-roboto-condensed-bold"
                        variants={variants}
                        initial="left_hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            delay: 0.2,
                            duration: 1
                        }}>André Gomes, I'm a frontend webdeveloper.
                    </motion.h2>

                    <motion.h3
                        className="font-roboto-condensed-regular"
                        variants={variants}
                        initial="left_hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            delay: 0.4,
                            duration: 1
                        }}>Started out in electronics but fell in love with coding.</motion.h3>
                    <motion.div
                        className="frontpage-button-motion"
                        variants={variants}
                        initial="right_hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            delay: 0.2,
                            duration: 1
                        }}>
                        <EnvelopeIcon className="frontpage-button-email" />
                    </motion.div>
                </div>
            

    )
}

export default Frontpage;