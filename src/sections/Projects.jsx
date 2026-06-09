import { motion } from 'framer-motion'
import { Trophy, Medal, Telescope, Zap } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import GlassIcon from '../components/GlassIcon'

const projects = [
  {
    num: '01',
    title: 'University Super App',
    AwardIcon: Trophy,
    awardColor: 'var(--green)',
    award: '3rd Place - IEEE ProtoNex 2026',
    desc: 'Unified campus platform combining ERP, UPI payments, transport, canteen, campus store, and event registration - replacing 6+ separate apps for Presidency University students. Live and deployed.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    num: '02',
    title: 'ML Attendance System',
    AwardIcon: Medal,
    awardColor: 'var(--cyan)',
    award: 'Top 20 - PROJECT X 1.0',
    desc: 'AI-powered attendance using classroom security cameras with ArcFace facial recognition via ONNX runtime. Auto-detects and marks attendance - proxy attendance made impossible.',
    stack: ['Python', 'ONNX', 'ArcFace', 'Computer Vision'],
  },
  {
    num: '03',
    title: 'NASA Space Apps - Embiggen Your Eyes',
    AwardIcon: Telescope,
    awardColor: 'var(--cyan)',
    award: 'Galactic Problem Solver - NASA 2025',
    desc: 'Platform to zoom into massive space image datasets, label features, and discover patterns using AI. Built with Team Ākāśa Yāntrikāḥ in partnership with ESA, ISRO, and JAXA.',
    stack: ['Python', 'AI', 'Data Visualization'],
  },
  {
    num: '04',
    title: 'Blind Spot Detection System',
    AwardIcon: Zap,
    awardColor: 'var(--green)',
    award: 'Top 70 - Presidency Innovation Expo',
    desc: 'Vehicle safety prototype using 4 ultrasonic sensors at angles + 2 IR sensors. Programmed on Arduino Mega 2560 in C++ for real-time blind spot object detection and reaction.',
    stack: ['Arduino Mega 2560', 'C++', 'Ultrasonic Sensors', 'IR Sensors'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 48px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel>Projects</SectionLabel>
      <h2
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: '60px',
        }}
      >
        Things I've built
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            style={{
              background: 'var(--navy)',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            whileHover={{ backgroundColor: 'var(--navy-card)' }}
          >
            {/* Number watermark */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--border)',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              {p.num}
            </span>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}
            >
              {p.title}
            </h3>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                color: p.awardColor,
                fontFamily: 'var(--font-mono)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                padding: '5px 12px 5px 8px',
                borderRadius: '6px',
                marginBottom: '14px',
              }}
            >
              <p.AwardIcon size={13} strokeWidth={2} />
              {p.award}
            </div>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    background: 'rgba(0,212,255,0.03)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
