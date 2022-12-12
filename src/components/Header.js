import React from "react";
import {motion} from "framer-motion"

function Header() {
    return (<motion.header
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ease: "easeIn", duration:1}}>
        <a className="font-roboto-condensed-light">About me</a>
        <a className="font-roboto-condensed-light">Projects</a>
        <a className="font-roboto-condensed-light">Contact</a>
    </motion.header>);
}

export default Header;