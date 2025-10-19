import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="hero-content" variants={itemVariants}>
        <motion.h1
          className="glitch-title"
          animate={{
            textShadow: [
              "0 0 20px #00ff41",
              "0 0 30px #00ff41, 0 0 50px #00ff41",
              "0 0 20px #00ff41"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🧬 PHONE DNA FORENSICS 🧬
        </motion.h1>

        <motion.h2 className="subtitle" variants={itemVariants}>
          The Data Revolution: Proof That Smartphones Are Living Organisms
        </motion.h2>

        <motion.p className="tagline" variants={itemVariants}>
          A comprehensive forensic analysis that accidentally proved<br />
          data is DNA and freedom is measurable in megabytes
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <motion.a
            href="#revelation"
            onClick={(e) => scrollToSection(e, 'revelation')}
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff41" }}
            whileTap={{ scale: 0.95 }}
          >
            Discover The Truth
          </motion.a>
          <motion.a
            href="https://github.com/astrosteveo/phone-dna-forensics"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #ffff00" }}
            whileTap={{ scale: 0.95 }}
          >
            ⭐ GitHub Repository
          </motion.a>
        </motion.div>

        <motion.div className="scroll-indicator" variants={itemVariants}>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
