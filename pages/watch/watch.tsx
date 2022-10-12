import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { BufferGeometry } from 'three'
import styled from 'styled-components'

const Annotation = styled.div`
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
`
// import "../public/";
export default function Watch(props) {
  const ref = useRef()

  const { nodes, materials } = useGLTF('/models/watch-v1.glb')

  console.log('nodes', nodes)
  console.log('materials', materials)
  useFrame(state => {
    const t = state.clock.getElapsedTime()
    // @ts-ignore
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    // @ts-ignore
    ref.current.rotation.y = Math.sin(t / 4) / 8
    // @ts-ignore
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    // @ts-ignore
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <>
      <group ref={ref} {...props} dispose={null}>
        <Html
          scale={100}
          rotation={[Math.PI / 2, 0, 0]}
          position={[180, -350, -180]}
          transform
        >
          <Annotation className=" border bg-[#1c1c] px-[10px] py-[5px]">
            600$
          </Annotation>
        </Html>
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Object006_watch_0.geometry as BufferGeometry}
          material={materials.watch}
        />
      </group>
    </>
  )
}
