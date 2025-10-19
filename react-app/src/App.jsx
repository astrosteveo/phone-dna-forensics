import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { Activity, Home } from 'lucide-react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Revelation from './components/Revelation'
import Chromosomes from './components/Chromosomes'
import Visualizations from './components/Visualizations'
import Stories from './components/Stories'
import Analysis from './components/Analysis'
import Footer from './components/Footer'
import Dashboard from './Dashboard'
import './App.css'

function MainSite({ particlesInit, particlesConfig }) {
  return (
    <div className="app">
      <div style={{position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '10px', zIndex: 99999}}>
        DEBUG: MAIN SITE RENDERING
      </div>
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="particles"
        />
      )}

      <div className="content">
        <Hero />
        <Revelation />
        <Stats />
        <Chromosomes />
        <Visualizations />
        <Stories />
        <Analysis />
        <Footer />
      </div>

      {/* Floating Dashboard Button */}
      <Link to="/dashboard" className="floating-dashboard-btn">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 255, 65, 0.3)",
              "0 0 40px rgba(0, 255, 65, 0.6)",
              "0 0 20px rgba(0, 255, 65, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="floating-btn-content"
        >
          <Activity size={24} />
          <span>Open Pro Dashboard</span>
        </motion.div>
      </Link>
    </div>
  )
}

function App() {
  const [particlesInit, setParticlesInit] = useState(false)
  const location = useLocation()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setParticlesInit(true)
    })
  }, [])

  const particlesConfig = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#00ff41",
      },
      links: {
        color: "#00ff41",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  // Check if we're on the dashboard route
  const isDashboard = location.pathname === '/dashboard'

  console.log('Current location:', location.pathname, 'isDashboard:', isDashboard)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainSite particlesInit={particlesInit} particlesConfig={particlesConfig} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Back Home Button (only on dashboard) */}
      {isDashboard && (
        <Link to="/" className="floating-home-btn">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="floating-btn-content small"
          >
            <Home size={20} />
          </motion.div>
        </Link>
      )}
    </>
  )
}

export default App
