import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const First = () => {
  function Box(props) {
    const ref = useRef()

    return (
      <mesh {...props}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }
  return (
    <div>
      <h1 className="text-[3rem] font-bold">
        hello this is my very first three js application!
      </h1>
      <Canvas style={{ width: '400px' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />
        <Box position={[-4.2, 0, 0]} />
        <Box position={[4.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default First
