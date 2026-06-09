import { useState, useEffect } from 'react'

const links = ['Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--green)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        YASHAS.
      </span>

      <div style={{ display: 'flex', gap: '32px' }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontSize: '12px',
              color: 'var(--muted)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--white)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {l}
          </a>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--muted)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            background: 'var(--green)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
          }}
        />
        Available for work
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(118,185,0,0.4); }
            50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(118,185,0,0); }
          }
        `}</style>
      </div>
    </nav>
  )
}
