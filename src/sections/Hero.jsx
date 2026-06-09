import { motion } from 'framer-motion'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px 80px',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background ghost text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          fontSize: '28vw',
          fontWeight: 700,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(118,185,0,0.06)',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '-5vw',
          fontFamily: 'var(--font-mono)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        AI
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
        <motion.div {...fadeIn(0.1)}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(118,185,0,0.08)',
              border: '1px solid rgba(118,185,0,0.2)',
              borderRadius: '2px',
              padding: '6px 14px',
              fontSize: '11px',
              color: 'var(--green)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: '32px',
            }}
          >
            <span style={{ fontSize: '8px' }}>▶</span>
            Full-Stack Developer & AI Engineer
          </div>
        </motion.div>

        <motion.h1 {...fadeIn(0.2)}
          style={{
            fontSize: 'clamp(52px, 7vw, 96px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
          }}
        >
          Yashas
          <br />
          <span
            style={{ color: 'var(--green)', position: 'relative', display: 'inline-block' }}
          >
            S U
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--green)',
                transformOrigin: 'left',
                display: 'block',
              }}
            />
          </span>
        </motion.h1>

        <motion.p {...fadeIn(0.35)}
          style={{
            fontSize: 'clamp(14px, 1.8vw, 20px)',
            color: 'var(--muted)',
            fontWeight: 300,
            maxWidth: '560px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          Building{' '}
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>scalable web apps</strong> and{' '}
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>GenAI pipelines</strong> -
          currently fine-tuning LLMs on{' '}
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>NVIDIA H200 GPUs</strong> at
          Presidency University's AI Centre of Excellence.
        </motion.p>

        <motion.div {...fadeIn(0.5)} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--green)',
              color: 'var(--navy)',
              padding: '14px 28px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8fd600'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(118,185,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--green)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'var(--white)',
              padding: '14px 28px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--green)'
              e.currentTarget.style.color = 'var(--green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--white)'
            }}
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>

      {/* Stats column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          position: 'absolute',
          right: '48px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          zIndex: 2,
        }}
      >
        {[
          { num: '3rd', label: 'IEEE ProtoNex' },
          { num: 'H200', label: 'GPU Access' },
          { num: '29', label: 'Google Badges' },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: 'right' }}>
            <div
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: 'var(--white)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1,
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
