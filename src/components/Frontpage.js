import React from "react";
import {motion} from "framer-motion";
import {EnvelopeIcon} from '@heroicons/react/24/outline';
import Animation3D from "./Animation3D.js";

function Frontpage() {

    const animation = {
        hidden: {
            x: "-100vw"
        },
        visible: {
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
                        initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <EnvelopeIcon className="frontpage-button-email" />
                        <p>Email me!</p>
                    </motion.div>
                </div>
            

    )
}

export default Frontpage;