import { ContactShadows, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Watch from './watch'

const WatchBox = () => {
  return (
    <div className=" flex h-[500px] cursor-grab flex-row border border-black bg-[#185adb]">
      <div className="flex w-[41%] flex-col items-center justify-center font-sans text-[3.5rem] font-light text-white">
        <div>Check out our best and</div>
        <div>the cheapest watches</div>
      </div>
      <div className="flex w-[50%] flex-col items-center justify-center">
        <Canvas
          style={{ height: '500px' }}
          // className="canvas-new"
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

          {/* 오브젝트를를 마우스로 클릭해서 잡고 조절할 수 있는 기능 */}
          {/* 오브젝트가 들어있는 컴포넌트의 상단을 감싸서 해결한다. */}
          <PresentationControls
            global
            snap={{ mass: 4, tension: 1500 }} // 원래 위치로 돌아옴. mass:둔탁함의 정도?, tension:마우스로 잡고 드래그할 때 물체가 떨리는 정도
            config={{ mass: 2, tension: 500 }} // 마우스로 잡고 드래그할 때 물체가 떨리는 정도
            polar={[-Math.PI / 3, Math.PI / 2]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            rotation={[0, 0.3, 0]}
          >
            <Watch
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
      <div>emptfy box</div>
    </div>
  )
}

export default WatchBox
