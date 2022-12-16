import React from "react";
import {motion} from "framer-motion";
import {EnvelopeIcon} from '@heroicons/react/24/solid';
import Animation3D from "./Animation3D.js";

function Frontpage() {

    const animation = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0
        },
        button_hidden: {
            x: "+100vw"
        },
        button_visible:{
            x: 0
        }


    }


    return (    
        <div className="front-page-container">
        <Animation3D/>     
                    <motion.h1
                        className="font-roboto-condensed-light"
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            duration: 1
                        }}>Hi, my name is
                    </motion.h1>
                    <motion.h2
                        className="font-roboto-condensed-bold"
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            delay: 0.2,
                            duration: 1
                        }}>André Gomes, I'm a frontend webdeveloper.
                    </motion.h2>

                    <motion.h3
                        className="font-roboto-condensed-regular"
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeIn",
                            delay: 0.4,
                            duration: 1
                        }}>Started out in electronics but fell in love with coding.</motion.h3>
                    <motion.div
                        className="frontpage-button-motion"
                        variants={animation}
                        initial="button_hidden"
                        animate="button_visible"
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