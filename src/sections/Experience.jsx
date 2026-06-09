import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const experiences = [
  {
    date: 'Jun 2026 – Present',
    role: 'AI & GPU Computing Intern',
    company: 'NVIDIA AI Centre of Excellence, Presidency University',
    badge: 'Current',
    desc: 'Selected for a competitive 30-hour intensive - running deep learning workloads on H200 Tensor Core GPUs (141GB HBM3e). LLM fine-tuning with LoRA & PEFT, Stable Diffusion XL pipelines, Mixed Precision and FlashAttention optimization.',
    tags: ['H200 GPU', 'LoRA', 'PEFT', 'Stable Diffusion XL', 'PyTorch', 'FlashAttention'],
  },
  {
    date: 'May 2026 – Present',
    role: 'Founding Group Leader',
    company: 'AWS Student Builder Group, Presidency University',
    badge: 'Founded',
    desc: "Launched Presidency University's first AWS Student Builder Group through a competitive AWS onboarding process. Building the campus cloud ecosystem - workshops, certification drives, hackathons, and mentorship.",
    tags: ['AWS', 'Community Building', 'Cloud'],
  },
  {
    date: 'Apr – Oct 2025',
    role: 'Co-Founder & CTO',
    company: 'Zwapy',
    badge: null,
    desc: 'Built a student community startup from zero to live product - brand identity, UI/UX, landing page, and the full-stack platform using MERN stack + Firebase. Owned all technical and design decisions end-to-end.',
    tags: ['MERN Stack', 'Firebase', 'UI/UX', 'Figma', 'System Design'],
  },
  {
    date: 'Jun – Jul 2025',
    role: 'Artificial Intelligence Intern',
    company: 'Mindenious',
    badge: null,
    desc: 'Month-long intensive AI/ML training followed by internship on production systems - ML models, AI search systems, and shopping AI solutions across real-world use cases.',
    tags: ['ML Models', 'AI Search', 'Production AI'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 48px',
        background: 'rgba(14,22,40,0.5)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel>Experience</SectionLabel>
      <h2
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: '60px',
        }}
      >
        Where I've worked
      </h2>

      <div>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '48px',
              padding: '36px 0',
              borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                paddingTop: '4px',
              }}
            >
              {exp.date}
            </div>

            <div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>
                {exp.role}
              </div>

              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--green)',
                  fontWeight: 500,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                {exp.company}
                {exp.badge && (
                  <span
                    style={{
                      background: 'rgba(118,185,0,0.1)',
                      border: '1px solid rgba(118,185,0,0.2)',
                      padding: '2px 8px',
                      borderRadius: '2px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {exp.badge}
                  </span>
                )}
              </div>

              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  marginBottom: '14px',
                }}
              >
                {exp.desc}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'var(--navy-card)',
                      border: '1px solid var(--border)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
