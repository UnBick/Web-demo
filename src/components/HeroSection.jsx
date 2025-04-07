import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import DemoForm from './DemoForm'
import BoyAnimation from './BoyAnimation'

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    const offset = window.innerWidth >= 768 ? 80 : 0 // 0px offset for mobile, 80px for desktop
    const elementPosition = featuresSection.getBoundingClientRect().top + window.pageYOffset
    
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content - Make it take full width on mobile */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-bold text-teal-400 animate-float tracking-tight">
              UnBick
              <span className="inline-block ml-3 text-lg md:text-2xl text-gray-400 font-normal">
                Educational Technology
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-7xl gradient-text animate-float">
            Empower Education with Smart Digital Ecosystems
          </h1>
          <div className="divider"></div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Integrated ERP Solutions, AI-Driven Tools, and Future-Ready Platforms
            <br />for Modern Educational Institutions
          </p>
          <div className="flex gap-6 pt-8">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-4 bg-teal-500 rounded-lg font-semibold hover-glow demo-button"
            >
              Schedule a Demo
            </button>
            <button 
              onClick={scrollToFeatures}
              className="px-8 py-4 glass-card"
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* Mobile 3D Boy */}
        <div className="md:hidden absolute inset-0 z-0 opacity-20">
          <Canvas
            camera={{ 
              position: [0, 0, 4],
              fov: 45,
            }}
            gl={{
              alpha: true,
              antialias: true,
            }}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
              <BoyAnimation 
                scale={[0.0012, 0.0012, 0.0012]} 
                position={[0.2, -0.8, 0]} 
                rotation={[0, -Math.PI / 6, 0]} 
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Desktop version of 3D Boy */}
        <div className="hidden md:block relative h-[600px]">
          <div className="absolute inset-0 left-[-10%] w-[120%]">
            <Canvas
              camera={{ 
                position: [0, 0, 4],
                fov: 45,
              }}
              gl={{
                alpha: true,
                antialias: true,
              }}
            >
              <ambientLight intensity={1.5} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={2}
              />
              <Suspense fallback={null}>
                <BoyAnimation 
                  scale={[0.0015, 0.0015, 0.0015]} 
                  position={[0.5, -1.2, 0]} 
                  rotation={[0, -Math.PI / 4, 0]} 
                />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  minPolarAngle={Math.PI / 2.2}
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      <DemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}