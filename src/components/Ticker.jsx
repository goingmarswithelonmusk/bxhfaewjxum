const items = [
  'MERN Stack', 'PyTorch', 'LLM Fine-Tuning', 'Stable Diffusion XL',
  'AWS', 'Google Cloud', 'LoRA & PEFT', 'React.js',
  'Computer Vision', 'ArcFace', 'LangChain', 'FlashAttention',
  'H200 GPU', 'ONNX Runtime', 'Hugging Face', 'MongoDB',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        background: 'var(--green)',
        padding: '12px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'ticker 30s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--navy)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0 32px',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ marginLeft: '32px', opacity: 0.4 }}>//</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
