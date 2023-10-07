import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MarioModel(props) {
  const { nodes, materials } = useGLTF('/mario-model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap__CapMT.geometry}
        material={materials.CapMT}
        position={[2.38, 1.8, -0.95]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CapHair__HairMT.geometry}
        material={materials.HairMT}
        position={[2.38, 1.72, -0.95]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyeball__EyeMT.geometry}
        material={materials['EyeBallMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyeball__EyePupilLeftMT.geometry}
        material={materials['EyePupilLeftMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyeball__EyePupilRightMT.geometry}
        material={materials['EyePupilRightMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyelidLeft__EyeMT.geometry}
        material={materials['EyeMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyelidRight__EyeMT.geometry}
        material={materials['EyeMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face__FaceMT.geometry}
        material={materials['FaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mario__BodyMT.geometry}
        material={materials.BodyMT}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_brow_l__HairMT.geometry}
        material={materials['HairFaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_brow_r__HairMT.geometry}
        material={materials['HairFaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_mustache__HairMT.geometry}
        material={materials['HairFaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_tongue__FaceMT.geometry}
        material={materials['FaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_tooth_bottom__FaceMT.geometry}
        material={materials['FaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mario_tooth_up__FaceMT.geometry}
        material={materials['FaceMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MarioHandL__HandMT.geometry}
        material={materials['HandMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MarioHandR__HandMT.geometry}
        material={materials['HandMT.001']}
        position={[2.3, 1.72, -0.8]}
        rotation={[0, -0.5, 0]}
        scale={0.0085}
      />
      <group position={[-8.391, 112.998, 0]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone001} />
      </group>
      <group position={[7.399, 112.998, 0]}>
        <primitive object={nodes.Bone_1} />
        <primitive object={nodes.Bone001_1} />
      </group>
    </group>
  )
}

useGLTF.preload('/mario-model.gltf')
