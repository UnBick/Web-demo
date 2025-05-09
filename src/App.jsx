import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import FeatureShowcase from './components/FeatureShowcase'
import VisionSection from './components/VisionSection'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import NavButton from './components/NavButton'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
        <Routes>
          <Route path="/" element={
            <main>
              <NavButton />
              <HeroSection />
              <Services />
              <FeatureShowcase />
              <VisionSection />
            </main>
          } />
          <Route path="/products" element={
            <main>
              <NavButton />
              <ProductDetails />
            </main>
          } />
          <Route path="/contact" element={
            <>
              <NavButton />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}