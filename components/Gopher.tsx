'use client'
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Mesh, Color } from 'three'

function RobotModel() {
  const gltf = useGLTF('/static/images/robot_logo.glb')
  const meshRef = useRef<Mesh>(null!)

  useEffect(() => {
    if (meshRef.current) {
      gltf.scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material.metalness = 0.8
          child.material.roughness = 0.2

          child.material.emissive = new Color(0x444444)
          child.material.emissiveIntensity = 0.5
        }
      })

      meshRef.current.scale.setScalar(0.38)
      meshRef.current.position.set(0, 0.1, 0)
      meshRef.current.rotation.x = -0.2
    }
  }, [gltf])

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

export default function Gopher() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ maxHeight: '200px', maxWidth: '400px' }}
    >
      <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1} />
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
        <OrbitControls minDistance={1} />
      </Canvas>
    </div>
  )
}
