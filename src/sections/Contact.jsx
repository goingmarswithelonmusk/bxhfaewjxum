import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const contactLinks = [
  { label: '✉ Email', href: 'mailto:yashasreddy2007@gmail.com' },
  { label: 'in LinkedIn', href: 'https://linkedin.com/in/yashassu' },
  { label: '// GitHub', href: 'https://github.com/Yashas-su' },
  { label: '↗ yashassu.in', href: 'https://yashassu.in' },
  { label: '◈ g.dev/yashassu', href: 'https://g.dev/yashassu' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 48px 64px',
        textAlign: 'center',
      }}
    >
      <SectionLabel style={{ justifyContent: 'center' }}>Contact</SectionLabel>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}
      >
        Let's build something
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          maxWidth: '480px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}
      >
        Open to internships, collaborations, and interesting problems - especially
        anything at the intersection of AI and full-stack engineering.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '80px',
        }}
      >
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--green)'
              e.currentTarget.style.color = 'var(--green)'
              e.currentTarget.style.background = 'rgba(118,185,0,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--muted)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '32px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--muted)',
          letterSpacing: '0.08em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span>Yashas S U © 2026</span>
        <span>CSE @ Presidency University, Bengaluru</span>
        <span>+91-9019551644</span>
      </div>
    </section>
  )
}
