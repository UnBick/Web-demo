import { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function BoyAnimation({ scale = [0.0015, 0.0015, 0.0015], position = [0, -1, 0], rotation = [0, 0, 0] }) {
  const modelRef = useRef()
  const mixerRef = useRef()

  // Load model with animations
  const { scene, animations } = useLoader(
    GLTFLoader, 
    '/models/02- School.Boy.Animation/ca461a8fbd03469aadaa1a4757cfc13b_Textured.gltf'
  )
  
  // Load texture
  const baseTexture = useLoader(
    TextureLoader, 
    '/models/02- School.Boy.Animation/010a2efaaa4c48d89fbbeb509c6b49d8_RGB_char_diff.png'
  )
  baseTexture.flipY = false
  baseTexture.encoding = THREE.sRGBEncoding

  useEffect(() => {
    // Initialize animation mixer
    mixerRef.current = new THREE.AnimationMixer(scene)

    // Find and set up animations
    const idleAnim = animations.find(a => a.name === 'ConceptStance')
    const walkAnim = animations.find(a => a.name === 'Walk') || animations.find(a => a.name === 'Walk4sketchfab')
    const runAnim = animations.find(a => a.name === 'Run') || animations.find(a => a.name === 'Run4sketchfab')

    // Start with idle animation
    if (idleAnim) {
      const action = mixerRef.current.clipAction(idleAnim)
      action.play()
    }

    // Enhanced material setup
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: baseTexture,
          transparent: false,
          side: THREE.FrontSide,
          metalness: 0,
          roughness: 4,
          envMapIntensity: 1,
          depthWrite: true,
          depthTest: true
        })

        // Handle multiple materials
        if (child.material.length > 1) {
          child.material = child.material[0]
        }

        child.material.needsUpdate = true
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    // Mouse interaction handlers
    const handleMouseMove = () => {
      if (walkAnim) {
        mixerRef.current.stopAllAction()
        const action = mixerRef.current.clipAction(walkAnim)
        action.fadeIn(0.5).play()
      }
    }

    const handleMouseLeave = () => {
      if (idleAnim) {
        mixerRef.current.stopAllAction()
        const action = mixerRef.current.clipAction(idleAnim)
        action.fadeIn(0.5).play()
      }
    }

    const handleDemoHover = () => {
      if (runAnim) {
        mixerRef.current.stopAllAction()
        const action = mixerRef.current.clipAction(runAnim)
        action.fadeIn(0.5).play()
      }
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.querySelector('.demo-button')?.addEventListener('mouseenter', handleDemoHover)
    document.querySelector('.demo-button')?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.querySelector('.demo-button')?.removeEventListener('mouseenter', handleDemoHover)
      document.querySelector('.demo-button')?.addEventListener('mouseleave', handleMouseLeave)
      mixerRef.current?.stopAllAction()
    }
  }, [scene, animations, baseTexture])

  useFrame((state, delta) => {
    mixerRef.current?.update(delta)
  })

  return (
    <group
      position={position}
      rotation={rotation}
    >
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
    </group>
  )
}