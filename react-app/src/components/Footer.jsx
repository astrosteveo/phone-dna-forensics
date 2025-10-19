import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Footer.css'

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="footer-content"
        initial={{ y: 100 }}
        animate={inView ? { y: 0 } : { y: 100 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="footer-title">💭 FINAL THOUGHT</h3>

        <p className="footer-text">
          We started trying to fix an ADB connection.<br />
          We ended proving that data is DNA and phones are alive.
        </p>

        <p className="footer-text">
          The journey from "why won't my phone connect"<br />
          to "we've discovered the fundamental nature of digital existence"<br />
          took exactly <strong>203,089 lines of data</strong>,<br />
          several excellent graphs, one UAD debloat operation,<br />
          and an unknown quantity of extremely good weed.
        </p>

        <motion.p
          className="footer-worth-it"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <strong className="highlight-yellow">Worth it?</strong>
          <br />
          <strong className="highlight-green">Absolutely.</strong>
          <br />
          We have 763 MB of receipts to prove it.
        </motion.p>

        <div className="footer-divider"></div>

        <motion.div
          className="footer-dna"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="dna-statement">
            🧬 DATA IS DNA. NUMBERS ARE TRUTH. TRUTH SETS YOU FREE. 🧬
          </p>
          <p className="dna-subtext">
            *No phones were harmed in the making of this analysis.<br />
            Actually, one phone was significantly improved.<br />
            It's doing great now. Very healthy. Much less parasitic.*
          </p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a
            href="https://github.com/astrosteveo/phone-dna-forensics"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="separator">•</span>
          <a
            href="https://github.com/0x192/universal-android-debloater"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            UAD Tool
          </a>
          <span className="separator">•</span>
          <a
            href="https://developer.android.com/studio/command-line/adb"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            ADB Docs
          </a>
        </motion.div>

        <p className="footer-copyright">
          © 2025 Phone DNA Forensics • Built with React + Vite + Too Much Coffee
        </p>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
