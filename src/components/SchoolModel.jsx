import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function SchoolModel() {
  const modelRef = useRef()
  const { scene } = useGLTF('/models/02- School.Boy.Animation/ca461a8fbd03469aadaa1a4757cfc13b.gltf')

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[0.8, 0.8, 0.8]}
      position={[0, -1, 0]}
    />
  )
}
