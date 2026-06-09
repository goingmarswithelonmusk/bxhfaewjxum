// Liquid-glass icon container - wraps any SVG icon with the glass treatment
export default function GlassIcon({ children, size = 40, color = 'var(--green)' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* gradient border via pseudo - done inline since no CSS file */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          background: 'linear-gradient(160deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.0) 60%, rgba(255,255,255,0.18) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  )
}
