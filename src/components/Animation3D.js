import React from 'react'
import {motion} from "framer-motion";
import {Canvas} from '@react-three/fiber'
import Blob from '../components/blob'

export default function App() {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.5
            }}
            className="blob">
            <Canvas
                camera={{
                    position: [0.0, 0.0, 8.0]
                }}>
                <Blob/>
            </Canvas>
        </motion.div>
    )
}
