import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Chromosomes.css'

const chromosomeData = [
  {
    name: "Chromosome 1: Package Count",
    change: "-31.6%",
    classification: "RADICAL TRANSFORMATION ⚡",
    color: "#ff4444"
  },
  {
    name: "Chromosome 2: Active RAM",
    change: "-10.1%",
    classification: "MODERATE EVOLUTION",
    color: "#ffaa00"
  },
  {
    name: "Chromosome 3: Swap Memory",
    change: "-44.7%",
    classification: "RADICAL TRANSFORMATION ⚡",
    color: "#ff4444"
  },
  {
    name: "Chromosome 4: ZRAM Compression",
    change: "-45.5%",
    classification: "RADICAL TRANSFORMATION ⚡",
    color: "#ff4444"
  },
  {
    name: "Chromosome 5: Running Processes",
    change: "-0.7%",
    classification: "STABLE",
    color: "#00ff41"
  },
  {
    name: "Chromosome 6: App Memory (PSS)",
    change: "-9.8%",
    classification: "MODERATE EVOLUTION",
    color: "#ffaa00"
  }
]

const Chromosomes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="chromosomes">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        🧬 THE SIX GENETIC CHROMOSOMES
      </motion.h2>

      <motion.div className="chromosomes-list">
        {chromosomeData.map((chromosome, index) => (
          <motion.div
            key={index}
            className="chromosome-item"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="chromosome-name">{chromosome.name}</div>
            <motion.div
              className="chromosome-change"
              style={{ color: chromosome.color }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            >
              {chromosome.change}
            </motion.div>
            <div className="chromosome-classification" style={{ color: chromosome.color }}>
              {chromosome.classification}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Chromosomes
