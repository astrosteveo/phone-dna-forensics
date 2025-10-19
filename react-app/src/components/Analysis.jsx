import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Analysis.css'

const Analysis = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="analysis">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        🔬 ANALYSIS SCRIPTS & DATA
      </motion.h2>

      <motion.div
        className="analysis-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="analysis-grid">
          <motion.div
            className="analysis-item"
            whileHover={{ scale: 1.05, borderColor: "#00ff41" }}
          >
            <div className="code-file">meta_forensic_analysis.py</div>
            <div className="code-description">Complete DNA analysis comparing before/after genetic transformation</div>
          </motion.div>

          <motion.div
            className="analysis-item"
            whileHover={{ scale: 1.05, borderColor: "#00ff41" }}
          >
            <div className="code-file">ram_analysis.py</div>
            <div className="code-description">Memory liberation metrics: 763 MB of measurable freedom</div>
          </motion.div>

          <motion.div
            className="analysis-item"
            whileHover={{ scale: 1.05, borderColor: "#00ff41" }}
          >
            <div className="code-file">analyze_debloat.py</div>
            <div className="code-description">Before/after comparison: 181 apps removed, 28.5% transformation</div>
          </motion.div>
        </div>

        <motion.div
          className="github-links"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/astrosteveo/phone-dna-forensics"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #ffff00" }}
            whileTap={{ scale: 0.95 }}
          >
            ⭐ Star on GitHub
          </motion.a>

          <motion.a
            href="https://github.com/astrosteveo/phone-dna-forensics/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button secondary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff41" }}
            whileTap={{ scale: 0.95 }}
          >
            🔀 Fork & Analyze Your Device
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Analysis
