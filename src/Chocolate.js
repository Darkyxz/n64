import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function N64Model(props) {
  const { nodes, materials } = useGLTF('/nintendo64.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.tapitas_caset.geometry} material={materials['Material.013']} position={[0, 0.303, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.nintendobase.geometry} material={materials.Material} position={[0, 0.36, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.NIN.geometry} material={materials.Material} position={[0, 0.354, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.botones.geometry} material={materials.Material} position={[0, 0.317, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.conector.geometry}
        material={materials['Material.001']}
        position={[-0.509, 0.279, 1.035]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.conector001.geometry}
        material={materials['Material.001']}
        position={[-0.209, 0.279, 1.035]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.conector002.geometry}
        material={materials['Material.001']}
        position={[0.239, 0.279, 1.035]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.conector003.geometry}
        material={materials['Material.001']}
        position={[0.539, 0.279, 1.035]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Circle.geometry} material={materials.Material} position={[-0.952, 0.084, 0.756]} />
      <mesh castShadow receiveShadow geometry={nodes.Circle001.geometry} material={materials.Material} position={[-0.83, 0.068, -0.78]} />
      <mesh castShadow receiveShadow geometry={nodes.Circle002.geometry} material={materials.Material} position={[0.836, 0.068, -0.78]} />
      <mesh castShadow receiveShadow geometry={nodes.Circle003.geometry} material={materials.Material} position={[0.959, 0.084, 0.737]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nin64L.geometry}
        material={materials.nin64L}
        position={[-0.009, 0.649, 1.005]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/nintendo64.gltf')
