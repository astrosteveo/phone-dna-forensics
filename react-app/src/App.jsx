import { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import Hero from './components/Hero'
import Stats from './components/Stats'
import Revelation from './components/Revelation'
import Chromosomes from './components/Chromosomes'
import Visualizations from './components/Visualizations'
import Stories from './components/Stories'
import Analysis from './components/Analysis'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [particlesInit, setParticlesInit] = useState(false)

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

  return (
    <div className="app">
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
    </div>
  )
}

export default App
