import { useGLTF, Html } from '@react-three/drei'
import { useState } from 'react'
import * as THREE from 'three'

export default function DashboardDemo() {
  const { nodes, materials } = useGLTF('/models/dashboard.glb')
  const [activePanel, setActivePanel] = useState(null)

  // Fallback geometry if model fails to load
  const fallbackGeometry = new THREE.PlaneGeometry(4, 2.25) // 16:9 ratio

  const PanelData = {
    students: { title: "Student Management", stats: "900 Students | 95% Attendance" },
    finance: { title: "Fee Management", stats: "₹1.5L Daily Collection" },
    staff: { title: "Staff Portal", stats: "25 Teachers | 98% Satisfaction" }
  }

  return (
    <group position={[0, -15, 0]} rotation={[0, -Math.PI/4, 0]}>
      {/* Main Dashboard */}
      {nodes.dashboard ? (
        <mesh
          geometry={nodes.dashboard.geometry}
          material={materials.metal}
          position={[0, 1.5, 0]}
          castShadow
        />
      ) : (
        <mesh
          geometry={fallbackGeometry}
          material={new THREE.MeshStandardMaterial({ color: '#2d3a5e' })}
          position={[0, 1.5, 0]}
        >
          <Html center>
            <div className="bg-white/80 p-4 rounded-lg">
              <h3 className="text-lg font-bold">Dashboard Preview</h3>
              <p className="text-sm">Loading 3D model...</p>
            </div>
          </Html>
        </mesh>
      )}

      {/* Interactive Panels */}
      {Object.keys(PanelData).map((panel, index) => (
        <mesh
          key={panel}
          geometry={nodes[`panel_${index + 1}`]?.geometry || fallbackGeometry}
          position={[-2 + index * 2, 1.2, -0.5]}
          onClick={() => setActivePanel(panel)}
          material={new THREE.MeshStandardMaterial({
            color: activePanel === panel ? '#4ecdc4' : '#2d3a5e',
            emissive: activePanel === panel ? '#4ecdc4' : '#1e293b',
            emissiveIntensity: 0.8
          })}
        >
          <Html distanceFactor={10}>
            <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm shadow-xl">
              <h3 className="text-lg font-bold text-primary">
                {PanelData[panel].title}
              </h3>
              <p className="text-sm text-gray-600">
                {PanelData[panel].stats}
              </p>
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  )
}