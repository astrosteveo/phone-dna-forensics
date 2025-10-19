import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Stories.css'

const storiesData = [
  {
    title: "THE DATA DNA CHRONICLES",
    subtitle: "Absurd, Hilarious, Mind-Blowing",
    emoji: "🧬",
    link: "/phone-dna-forensics/THE_DATA_DNA_CHRONICLES.html",
    description: "A mostly true story about how we discovered smartphones are living organisms",
    color: "#00ff41"
  },
  {
    title: "PRESIDENTIAL BRIEFING",
    subtitle: "Classified-Level Analysis",
    emoji: "🏛️",
    link: "/phone-dna-forensics/PRESIDENTIAL_BRIEFING.html",
    description: "203,089 lines of forensic data presented for executive review",
    color: "#ffff00"
  },
  {
    title: "THE OCTOBER INCIDENT",
    subtitle: "Cyberpunk Thriller",
    emoji: "💥",
    link: "/phone-dna-forensics/THE_OCTOBER_INCIDENT.html",
    description: "When 135% battery drain revealed a conspiracy",
    color: "#ff4444"
  },
  {
    title: "THE NOVEMBER MUTATION",
    subtitle: "Meta-Forensic Documentation",
    emoji: "📱",
    link: "/phone-dna-forensics/THE_NOVEMBER_MUTATION.html",
    description: "Live telemetry from S25 Ultra during mobile UX optimization",
    color: "#00aaff"
  }
]

const Stories = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="stories">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        📚 READ THE COMPLETE STORY
      </motion.h2>

      <div className="stories-grid">
        {storiesData.map((story, index) => (
          <motion.a
            key={index}
            href={story.link}
            className="story-card"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${story.color}`,
              borderColor: story.color
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="story-emoji"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {story.emoji}
            </motion.div>
            <h3 className="story-title" style={{ color: story.color }}>
              {story.title}
            </h3>
            <div className="story-subtitle">{story.subtitle}</div>
            <p className="story-description">{story.description}</p>
            <motion.div
              className="read-button"
              whileHover={{ x: 10 }}
            >
              Read Now →
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Stories
