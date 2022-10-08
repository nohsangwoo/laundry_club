import { ContactShadows, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Shiba from './Shiba'

const ShibaBox = () => (
  <div>
    <div>haha it's shiba!!</div>
    <Canvas
      style={{ width: '100%', height: '1000px' }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
      />
      <PresentationControls
        global
        snap={{ mass: 4, tension: 1500 }} // 원래 위치로 돌아옴. mass:둔탁함의 정도?, tension:마우스로 잡고 드래그할 때 물체가 떨리는 정도
        config={{ mass: 2, tension: 500 }} // 마우스로 잡고 드래그할 때 물체가 떨리는 정도
        polar={[-Math.PI / 3, Math.PI / 2]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        rotation={[0, 0.3, 0]}
      >
        <Shiba
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          scale={0.003}
        />
      </PresentationControls>
      <ContactShadows
        rotation-X={Math.PI / 2}
        position={[0, -1.4, 0]}
        opacity={0.75}
        width={10}
        height={10}
        blur={2.6}
        far={2}
      />
    </Canvas>
  </div>
)

export default ShibaBox
