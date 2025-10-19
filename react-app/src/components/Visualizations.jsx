import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X } from 'lucide-react'
import './Visualizations.css'

const visualizationsData = [
  {
    image: "/phone-dna-forensics/dna_revelation.png",
    title: "The DNA Double Helix Transformation",
    description: "Visual proof of genetic mutation"
  },
  {
    image: "/phone-dna-forensics/debloat_comparison.png",
    title: "Before/After Debloat Success Report",
    description: "181 apps removed, 31.6% reduction"
  },
  {
    image: "/phone-dna-forensics/ram_comparison.png",
    title: "RAM Liberation: 763 MB of Freedom",
    description: "Measurable freedom in megabytes"
  },
  {
    image: "/phone-dna-forensics/presidential_forensics_visual.png",
    title: "Presidential-Level Forensic Evidence",
    description: "203,089 lines of pure truth"
  }
]

const Visualizations = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (viz) => {
    setSelectedImage(viz)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section ref={ref} className="visualizations">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        📊 VISUAL EVIDENCE
      </motion.h2>

      <div className="visualizations-grid">
        {visualizationsData.map((viz, index) => (
          <motion.div
            key={index}
            className="viz-card"
            initial={{ opacity: 0, y: 100, rotateY: 90 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 100, rotateY: 90 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 0 50px rgba(0, 255, 65, 0.5)"
            }}
            onClick={() => openModal(viz)}
            style={{ cursor: 'pointer' }}
          >
            <div className="viz-image-container">
              <img src={viz.image} alt={viz.title} className="viz-image" />
            </div>
            <div className="viz-caption">
              <h3>{viz.title}</h3>
              <p>{viz.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={32} />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
              <div className="modal-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Visualizations
