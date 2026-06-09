import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 0.9 },
      { name: 'HTML5 / CSS3', level: 0.95 },
      { name: 'JavaScript', level: 0.9 },
      { name: 'Figma', level: 0.85 },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node.js', level: 0.85 },
      { name: 'Express.js', level: 0.85 },
      { name: 'MongoDB', level: 0.8 },
      { name: 'Firebase', level: 0.75 },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', level: 0.8 },
      { name: 'Hugging Face', level: 0.85 },
      { name: 'Stable Diffusion XL', level: 0.75 },
      { name: 'LangChain', level: 0.7 },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', level: 0.75 },
      { name: 'Google Cloud', level: 0.7 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 0.88 },
      { name: 'JavaScript', level: 0.9 },
      { name: 'C++', level: 0.65 },
    ],
  },
  {
    title: 'Hardware',
    skills: [
      { name: 'Arduino', level: 0.7 },
      { name: 'Raspberry Pi', level: 0.6 },
      { name: 'Sensor Arrays', level: 0.65 },
    ],
  },
]

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '13px', color: 'var(--white)', width: '130px', flexShrink: 0 }}>
        {name}
      </span>
      <div
        style={{
          flex: 1,
          height: '2px',
          background: 'var(--border)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: animate ? level : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: Math.random() * 0.3 }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--green), var(--cyan))',
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 48px',
        background: 'rgba(14,22,40,0.5)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel>Skills</SectionLabel>
      <h2
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: '60px',
        }}
      >
        What I work with
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }}
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              background: 'var(--navy)',
              padding: '32px',
              transition: 'background 0.2s',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--green)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {group.title}
              <span
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'var(--border)',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={visible} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
