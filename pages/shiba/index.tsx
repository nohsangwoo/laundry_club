import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ShibaBox from './ShibaBox'

const ShibaContainer = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <ShibaBox />
      </Suspense>
    </div>
  )
}

export default ShibaContainer
