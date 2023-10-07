import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BrowModel(props) {
  const { nodes, materials } = useGLTF('/bowser-model-v2.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HairModel__BodyMT001.geometry}
        material={materials.BodyMT}
        position={[-2.5, 1.72, -0.7]}
        rotation={[0.012, 0.5, 0]}
        scale={0.0025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Koopa__BodyMT001.geometry}
        material={materials.BodyMT}
        position={[-2.5, 1.72, -0.7]}
        rotation={[0.012, 0.5, 0]}
        scale={0.0025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Koopa__EyeMT002.geometry}
        material={materials.EyeMT}
        position={[-2.5, 1.72, -0.7]}
        rotation={[0.012, 0.5, 0]}
        scale={0.0025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Koopa__EyeMT003.geometry}
        material={materials['Material.001']}
        position={[-2.5, 1.72, -0.7]}
        rotation={[0.012, 0.5, 0]}
        scale={0.0025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KoopaEye__EyeMT001.geometry}
        material={materials.EyeMT}
        position={[-2.5, 1.72, -0.7]}
        rotation={[0.012, 0.5, 0]}
        scale={0.0025}
      />
    </group>
  )
}

useGLTF.preload('/bowser-model-v2.gltf')
