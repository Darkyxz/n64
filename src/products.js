import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function N64_Model(props) {
    const { nodes, materials } = useGLTF("/nintendo_64.gltf");
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tapitas_caset.geometry}
          material={materials["Material.013"]}
          position={[0.001, 1.9, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nintendobase.geometry}
          material={materials.Material}
          position={[0.001, 1.943, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NIN.geometry}
          material={materials.Material}
          position={[0.001, 1.939, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.botones.geometry}
          material={materials.Material}
          position={[0.001, 1.911, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector.geometry}
          material={materials["Material.001"]}
          position={[-0.375, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector001.geometry}
          material={materials["Material.001"]}
          position={[-0.153, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector002.geometry}
          material={materials["Material.001"]}
          position={[0.177, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector003.geometry}
          material={materials["Material.001"]}
          position={[0.399, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Material}
          position={[-0.701, 1.739, 0.591]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.Material}
          position={[-0.611, 1.727, -0.542]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.Material}
          position={[0.618, 1.727, -0.542]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials.Material}
          position={[0.709, 1.739, 0.577]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nin64L.geometry}
          material={materials.nin64L}
          position={[-0.006, 2.156, 0.775]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.start.geometry}
          material={materials["Material.006"]}
          position={[-1.942, 2.033, 0.075]}
          rotation={[0.059, 0.266, -0.015]}
          scale={0.826}
        />
        <group
          position={[-1.897, 2.024, 0.241]}
          rotation={[0.054, 0.267, -0.014]}
          scale={0.826}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A.geometry}
          material={materials["Material.007"]}
          position={[-1.801, 2.026, -0.09]}
          rotation={[0.029, 0.27, -0.162]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B.geometry}
          material={materials["Material.008"]}
          position={[-1.705, 2.014, -0.025]}
          rotation={[0.048, 0.26, -0.093]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1.geometry}
          material={materials["Material.010"]}
          position={[-1.721, 2.012, -0.156]}
          rotation={[0.035, 0.278, -0.131]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c2.geometry}
          material={materials["Material.010"]}
          position={[-1.632, 2.008, -0.096]}
          rotation={[-0.01, 0.262, -0.068]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c3.geometry}
          material={materials["Material.010"]}
          position={[-1.588, 2.001, -0.19]}
          rotation={[0.013, 0.27, -0.052]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c0.geometry}
          material={materials["Material.010"]}
          position={[-1.673, 2.006, -0.254]}
          rotation={[0.017, 0.264, -0.051]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control.geometry}
          material={materials["Material.004"]}
          position={[-1.976, 1.998, -0.05]}
          rotation={[0, 0.267, 0]}
          scale={0.28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pad.geometry}
          material={materials["Material.005"]}
          position={[-2.318, 2.012, 0.079]}
          rotation={[0, 0.267, 0]}
          scale={0.094}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.start001.geometry}
          material={materials["Material.006"]}
          position={[1.944, 2.033, -0.014]}
          rotation={[0.06, -0.342, 0.02]}
          scale={0.826}
        />
        <group
          position={[1.886, 2.024, 0.148]}
          rotation={[0.056, -0.342, 0.019]}
          scale={0.826}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A001.geometry}
          material={materials["Material.007"]}
          position={[2.154, 2.026, -0.068]}
          rotation={[0.03, -0.34, -0.144]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B001.geometry}
          material={materials["Material.008"]}
          position={[2.195, 2.014, 0.04]}
          rotation={[0.05, -0.348, -0.064]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1001.geometry}
          material={materials["Material.010"]}
          position={[2.257, 2.012, -0.077]}
          rotation={[0.035, -0.331, -0.11]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c2001.geometry}
          material={materials["Material.010"]}
          position={[2.296, 2.008, 0.024]}
          rotation={[-0.011, -0.347, -0.074]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c3001.geometry}
          material={materials["Material.010"]}
          position={[2.386, 2.001, -0.028]}
          rotation={[0.014, -0.339, -0.044]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c0001.geometry}
          material={materials["Material.010"]}
          position={[2.353, 2.006, -0.13]}
          rotation={[0.018, -0.345, -0.041]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control001.geometry}
          material={materials["Material.004"]}
          position={[1.987, 1.998, -0.136]}
          rotation={[0, -0.342, 0]}
          scale={0.28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pad001.geometry}
          material={materials["Material.005"]}
          position={[1.633, 2.012, -0.225]}
          rotation={[0, -0.342, 0]}
          scale={0.094}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caset_B.geometry}
          material={materials["Material.003"]}
          position={[0.001, 2.312, -0.47]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caset_F.geometry}
          material={materials["Material.003"]}
          position={[0.001, 2.312, -0.47]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smashstk.geometry}
          material={materials.smashstk}
          position={[-0.002, 2.39, -0.421]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.plywood}
          position={[-0.082, 0.4, -0.329]}
          scale={[3.433, 0.07, 1.616]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.plywood}
          position={[-0.082, 1.635, -0.329]}
          scale={[3.433, 0.07, 1.553]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.plywood}
          position={[-3.16, 1.015, -0.329]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.022, 0.07, 1.738]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.plywood}
          position={[3.033, 1.015, -0.329]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.022, 0.07, 1.738]}
        />
        <group position={[0, 3.577, -1.414]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials["Plastic Base 01"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/nintendo_64.gltf");
  export default function N64Model(props) {
    const { nodes, materials } = useGLTF("/nintendo_64.gltf");
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tapitas_caset.geometry}
          material={materials["Material.013"]}
          position={[0.001, 1.9, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nintendobase.geometry}
          material={materials.Material}
          position={[0.001, 1.943, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NIN.geometry}
          material={materials.Material}
          position={[0.001, 1.939, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.botones.geometry}
          material={materials.Material}
          position={[0.001, 1.911, 0.033]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector.geometry}
          material={materials["Material.001"]}
          position={[-0.375, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector001.geometry}
          material={materials["Material.001"]}
          position={[-0.153, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector002.geometry}
          material={materials["Material.001"]}
          position={[0.177, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.conector003.geometry}
          material={materials["Material.001"]}
          position={[0.399, 1.883, 0.797]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Material}
          position={[-0.701, 1.739, 0.591]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.Material}
          position={[-0.611, 1.727, -0.542]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.Material}
          position={[0.618, 1.727, -0.542]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials.Material}
          position={[0.709, 1.739, 0.577]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nin64L.geometry}
          material={materials.nin64L}
          position={[-0.006, 2.156, 0.775]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.start.geometry}
          material={materials["Material.006"]}
          position={[-1.942, 2.033, 0.075]}
          rotation={[0.059, 0.266, -0.015]}
          scale={0.826}
        />
        <group
          position={[-1.897, 2.024, 0.241]}
          rotation={[0.054, 0.267, -0.014]}
          scale={0.826}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A.geometry}
          material={materials["Material.007"]}
          position={[-1.801, 2.026, -0.09]}
          rotation={[0.029, 0.27, -0.162]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B.geometry}
          material={materials["Material.008"]}
          position={[-1.705, 2.014, -0.025]}
          rotation={[0.048, 0.26, -0.093]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1.geometry}
          material={materials["Material.010"]}
          position={[-1.721, 2.012, -0.156]}
          rotation={[0.035, 0.278, -0.131]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c2.geometry}
          material={materials["Material.010"]}
          position={[-1.632, 2.008, -0.096]}
          rotation={[-0.01, 0.262, -0.068]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c3.geometry}
          material={materials["Material.010"]}
          position={[-1.588, 2.001, -0.19]}
          rotation={[0.013, 0.27, -0.052]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c0.geometry}
          material={materials["Material.010"]}
          position={[-1.673, 2.006, -0.254]}
          rotation={[0.017, 0.264, -0.051]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control.geometry}
          material={materials["Material.004"]}
          position={[-1.976, 1.998, -0.05]}
          rotation={[0, 0.267, 0]}
          scale={0.28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pad.geometry}
          material={materials["Material.005"]}
          position={[-2.318, 2.012, 0.079]}
          rotation={[0, 0.267, 0]}
          scale={0.094}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.start001.geometry}
          material={materials["Material.006"]}
          position={[1.944, 2.033, -0.014]}
          rotation={[0.06, -0.342, 0.02]}
          scale={0.826}
        />
        <group
          position={[1.886, 2.024, 0.148]}
          rotation={[0.056, -0.342, 0.019]}
          scale={0.826}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A001.geometry}
          material={materials["Material.007"]}
          position={[2.154, 2.026, -0.068]}
          rotation={[0.03, -0.34, -0.144]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B001.geometry}
          material={materials["Material.008"]}
          position={[2.195, 2.014, 0.04]}
          rotation={[0.05, -0.348, -0.064]}
          scale={0.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C1001.geometry}
          material={materials["Material.010"]}
          position={[2.257, 2.012, -0.077]}
          rotation={[0.035, -0.331, -0.11]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c2001.geometry}
          material={materials["Material.010"]}
          position={[2.296, 2.008, 0.024]}
          rotation={[-0.011, -0.347, -0.074]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c3001.geometry}
          material={materials["Material.010"]}
          position={[2.386, 2.001, -0.028]}
          rotation={[0.014, -0.339, -0.044]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.c0001.geometry}
          material={materials["Material.010"]}
          position={[2.353, 2.006, -0.13]}
          rotation={[0.018, -0.345, -0.041]}
          scale={0.709}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.control001.geometry}
          material={materials["Material.004"]}
          position={[1.987, 1.998, -0.136]}
          rotation={[0, -0.342, 0]}
          scale={0.28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pad001.geometry}
          material={materials["Material.005"]}
          position={[1.633, 2.012, -0.225]}
          rotation={[0, -0.342, 0]}
          scale={0.094}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caset_B.geometry}
          material={materials["Material.003"]}
          position={[0.001, 2.312, -0.47]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caset_F.geometry}
          material={materials["Material.003"]}
          position={[0.001, 2.312, -0.47]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smashstk.geometry}
          material={materials.smashstk}
          position={[-0.002, 2.39, -0.421]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.738}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.plywood}
          position={[-0.082, 0.4, -0.329]}
          scale={[3.433, 0.07, 1.616]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.plywood}
          position={[-0.082, 1.635, -0.329]}
          scale={[3.433, 0.07, 1.553]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.plywood}
          position={[-3.16, 1.015, -0.329]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.022, 0.07, 1.738]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.plywood}
          position={[3.033, 1.015, -0.329]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.022, 0.07, 1.738]}
        />
        <group position={[0, 3.577, -1.414]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials["Plastic Base 01"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/nintendo_64.gltf");