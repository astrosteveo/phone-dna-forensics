import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, Code } from 'lucide-react'
import './Analysis.css'

const scriptsData = [
  {
    filename: 'meta_forensic_analysis.py',
    description: 'Complete DNA analysis comparing before/after genetic transformation',
    path: '/phone-dna-forensics/meta_forensic_analysis.py'
  },
  {
    filename: 'ram_analysis.py',
    description: 'Memory liberation metrics: 763 MB of measurable freedom',
    path: '/phone-dna-forensics/ram_analysis.py'
  },
  {
    filename: 'analyze_debloat.py',
    description: 'Before/after comparison: 181 apps removed, 28.5% transformation',
    path: '/phone-dna-forensics/analyze_debloat.py'
  }
]

const Analysis = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedScript, setSelectedScript] = useState(null)
  const [scriptContent, setScriptContent] = useState('')
  const [loading, setLoading] = useState(false)

  const openScript = async (script) => {
    setLoading(true)
    setSelectedScript(script)
    try {
      const response = await fetch(script.path)
      const text = await response.text()
      setScriptContent(text)
    } catch (error) {
      setScriptContent('# Error loading script\n# File not found or unable to fetch')
    }
    setLoading(false)
  }

  const closeModal = () => {
    setSelectedScript(null)
    setScriptContent('')
  }

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
          {scriptsData.map((script, index) => (
            <motion.div
              key={index}
              className="analysis-item"
              whileHover={{ scale: 1.05, borderColor: "#00ff41" }}
              onClick={() => openScript(script)}
              style={{ cursor: 'pointer' }}
            >
              <div className="code-file">
                <Code size={20} style={{ marginRight: '8px' }} />
                {script.filename}
              </div>
              <div className="code-description">{script.description}</div>
            </motion.div>
          ))}
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

      {/* Script Modal */}
      <AnimatePresence>
        {selectedScript && (
          <motion.div
            className="script-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="script-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="script-modal-header">
                <div className="script-modal-title">
                  <Code size={24} style={{ color: '#00ff41' }} />
                  <h3>{selectedScript.filename}</h3>
                </div>
                <button className="script-close-btn" onClick={closeModal}>
                  <X size={28} />
                </button>
              </div>

              <div className="script-modal-description">
                {selectedScript.description}
              </div>

              <div className="script-code-container">
                {loading ? (
                  <div className="loading-spinner">Loading forensic code...</div>
                ) : (
                  <pre className="script-code">
                    <code>{scriptContent}</code>
                  </pre>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Analysis
