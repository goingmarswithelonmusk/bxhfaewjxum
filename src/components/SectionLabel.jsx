export default function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--green)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span style={{ width: '32px', height: '1px', background: 'var(--green)', display: 'block' }} />
      {children}
    </div>
  )
}
