import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer } from '@react-three/drei'
import N64Model from './Chocolate'
import BrowModel from './browser'
import MarioModel from './mario'
import Model from './n64'
import { easing } from 'maath'
import CustomEffects from './Effects'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [5, 0.8, 18], fov: 35 }}>
      <directionalLight position={[4, 7, 2]} intensity={3} />

      <CameraRig>
        <group position={[0, -2, 0]}>
          <Center top>
            <Model />
            <BrowModel />
            <MarioModel />
          </Center>

          <AccumulativeShadows temporal frames={100} color="purple" colorBlend={0.5} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
            <RandomizedLight intensity={Math.PI} amount={8} radius={7} ambient={0.5} position={[-5, 8, 10]} bias={0.001} />
          </AccumulativeShadows>
        </group>
      </CameraRig>
      <OrbitControls target={[0, 0.3, 0]} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment>
        <Lightformer intensity={40} color={'purple'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
        <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
        <Lightformer intensity={60} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
      </Environment>

      <CustomEffects />
    </Canvas>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 4, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}
