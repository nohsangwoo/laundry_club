import React, { CSSProperties, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { style } from '@mui/system'

const First = () => {
  const [intensity, setIntensity] = useState(0.5)
  const [penumbra, setPenumbra] = useState(1)

  function Box(props) {
    const ref = useRef<any>()

    useFrame(() => {
      let rotation = ref.current.rotation

      //   rotation.y += 0.01 // y축으로 회전
      rotation.x += 0.01 // x축으로 회전
      //   rotation.z += 0.01 // z축으로 회전
    })

    return (
      <mesh ref={ref} {...props} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }

  return (
    <div style={{ background: '#1c1c' }}>
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={intensity} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-4.2, 0, 0]} />
        <Box position={[4.2, 0, 0]} />
      </Canvas>

      <div style={styles.buttonsContainer}>
        <div style={styles.buttonWrapper}>
          <h1>intensity ctrl</h1>
          <div>
            <button
              style={styles.button}
              onClick={() => setIntensity(prev => prev + 0.1)}
            >
              increase intensity
            </button>
            <button
              style={styles.button}
              onClick={() => setIntensity(prev => prev - 0.1)}
            >
              decrease intensity
            </button>
          </div>
        </div>
        <div style={styles.buttonWrapper}>
          <h1>Penumbra ctrl</h1>
          <div>
            <button
              style={styles.button}
              onClick={() => setPenumbra(prev => prev + 0.1)}
            >
              increase Penumbra
            </button>
            <button
              style={styles.button}
              onClick={() => setPenumbra(prev => prev - 0.1)}
            >
              decrease Penumbra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

type StylesType = {
  buttonsContainer: CSSProperties
  button: CSSProperties
  buttonWrapper: CSSProperties
}
const styles: StylesType = {
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid red',
  },
  buttonWrapper: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20rem',
    height: '15rem',
    padding: '20px',
  },
  button: {
    width: '150px',
    padding: '5px',
    background: 'transparent',
    border: '1px solid black',
    borderRadius: '10px',
    outline: 'none',
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default First
