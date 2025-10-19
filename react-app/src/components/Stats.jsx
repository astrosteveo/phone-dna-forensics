import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Stats.css'

const statsData = [
  {
    number: "181",
    label: "Apps Removed",
    sublabel: "(31.6% Reduction)",
    color: "#00ff41"
  },
  {
    number: "763 MB",
    label: "RAM Freed",
    sublabel: "(Measurable Freedom)",
    color: "#ffff00"
  },
  {
    number: "2.85 GB",
    label: "Swap Freed",
    sublabel: "(44.7% Reduction)",
    color: "#00ff41"
  },
  {
    number: "54.3%",
    label: "Original Bloatware",
    sublabel: "(Parasitic DNA)",
    color: "#ff4444"
  },
  {
    number: "28.5%",
    label: "Genetic Transformation",
    sublabel: "(Significant Mutation)",
    color: "#ffff00"
  },
  {
    number: "135%",
    label: "October 13 Battery Drain",
    sublabel: "(The Incident)",
    color: "#ff4444"
  }
]

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="stats">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        📊 THE NUMBERS DON'T LIE
      </motion.h2>

      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 30px ${stat.color}`,
              borderColor: stat.color
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="stat-number"
              style={{ color: stat.color }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
            >
              {stat.number}
            </motion.div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sublabel">{stat.sublabel}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stats
