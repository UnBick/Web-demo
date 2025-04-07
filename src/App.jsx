import HeroSection from './components/HeroSection'
import Services from './components/Services'
import FeatureShowcase from './components/FeatureShowcase'
import VisionSection from './components/VisionSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <main>
        <HeroSection />
        <Services />
        <FeatureShowcase />
        <VisionSection />
      </main>
      <Footer />
    </div>
  )
}