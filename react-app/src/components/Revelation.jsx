import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Revelation.css'

const Revelation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <motion.section
      id="revelation"
      ref={ref}
      className="revelation"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="revelation-content">
        <motion.h2
          className="section-title"
          initial={{ scale: 0.5 }}
          animate={inView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          THE FUNDAMENTAL DISCOVERY
        </motion.h2>

        <motion.div
          className="revelation-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="large-text">
            Through <strong>203,089 lines</strong> of forensic data extraction and analysis,<br />
            we proved that <span className="highlight-yellow">DATA IS DNA</span>.
          </p>

          <motion.p
            className="large-text"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Not metaphorically. Not analogously. <span className="highlight-green">LITERALLY.</span>
          </motion.p>

          <motion.p
            className="medium-text"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Every number defines behavior. Every log captures life.<br />
            Bloatware is parasitism. Debloating is genetic engineering.<br />
            <strong className="highlight-yellow">And freedom? Freedom is quantifiable.</strong>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Revelation
