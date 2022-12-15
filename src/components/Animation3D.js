import React from 'react'
import {Canvas} from '@react-three/fiber'
import Blob from '../components/blob'

export default function App() {
    return (
        <div className='container-blob'>
            <Canvas
                camera={{
                    position: [0.0, 0.0, 8.0]
                }}>
                <Blob/>
            </Canvas>
        </div>
    )
}
