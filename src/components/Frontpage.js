import React from "react";
import {motion} from "framer-motion"

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
        <div className="front-page-container" >
            <motion.h1
            className="font-roboto-condensed-light"
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{
                    ease: "easeIn",
                    duration:1
                      
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
                    duration:1
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
                    duration:1
                }}>Started out in electronics but fell in love with coding.</motion.h3>
        </div>
    )
}

export default Frontpage;