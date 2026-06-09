import { motion } from 'framer-motion'
import {
  Trophy, Telescope, Medal, Zap,
  Cloud, Target, Lightbulb, Users
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import GlassIcon from '../components/GlassIcon'

const achievements = [
  {
    Icon: Trophy,
    color: 'var(--green)',
    title: '3rd Place - IEEE ProtoNex 2026',
    org: '30-Hour National Level Hackathon · Presidency University',
  },
  {
    Icon: Telescope,
    color: 'var(--cyan)',
    title: 'Galactic Problem Solver Certificate',
    org: 'NASA International Space Apps Challenge 2025 · ESA · ISRO · JAXA',
  },
  {
    Icon: Medal,
    color: 'var(--green)',
    title: 'Top 20 Teams - PROJECT X 1.0',
    org: 'Next Gen Cipher Club · Presidency University · Nov 2025',
  },
  {
    Icon: Zap,
    color: 'var(--cyan)',
    title: 'Top 70 Projects',
    org: 'Presidency University 6th Innovation Project Expo',
  },
  {
    Icon: Cloud,
    color: 'var(--green)',
    title: 'Google Developer Program - Premium Tier',
    org: '29 Badges incl. Google Cloud Innovator & Gemini Enterprise Agent Ready',
  },
  {
    Icon: Target,
    color: 'var(--cyan)',
    title: 'Gen AI Exchange Hackathon 2025',
    org: 'Google Cloud × Hack2skill · Jan 2026',
  },
  {
    Icon: Lightbulb,
    color: 'var(--green)',
    title: 'State Level IDEATHON 2025',
    org: 'AICTE IDEA Lab · NHCE Bengaluru · Nov 2025',
  },
  {
    Icon: Users,
    color: 'var(--cyan)',
    title: 'Founding AWS Student Builder Group Leader',
    org: 'Presidency University - First AWS student community at the university',
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 48px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel>Recognition</SectionLabel>
      <h2
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: '60px',
        }}
      >
        Wins & milestones
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }}
      >
        {achievements.map(({ Icon, color, title, org }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            style={{
              background: 'var(--navy)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              transition: 'background 0.2s',
            }}
            whileHover={{ backgroundColor: 'var(--navy-card)' }}
          >
            <GlassIcon size={40} color={color}>
              <Icon size={18} strokeWidth={1.5} />
            </GlassIcon>
            <div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {org}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
