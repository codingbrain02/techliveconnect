import { useEffect, useRef } from 'react'

interface BlobConfig {
  size: number
  color: string
  duration: number
}

const blobs: BlobConfig[] = [
  { size: 600, color: '#0d2a6b', duration: 8000 },
  { size: 400, color: '#1a6bff', duration: 11000 },
  { size: 320, color: '#0a1e4a', duration: 7000 },
]

const AnimatedBlob = ({ size, color, duration }: BlobConfig) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeoutId: ReturnType<typeof setTimeout>
    const move = () => {
      const x = Math.random() * 80
      const y = Math.random() * 80
      const scale = 0.85 + Math.random() * 0.35
      el.style.left = `${x}%`
      el.style.top = `${y}%`
      el.style.transform = `translate(-50%, -50%) scale(${scale})`
      timeoutId = setTimeout(move, duration + Math.random() * 2000)
    }
    timeoutId = setTimeout(move, Math.random() * 2000)
    return () => clearTimeout(timeoutId)
  }, [duration])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(80px)',
        opacity: 0.6,
        transition: `left ${duration}ms cubic-bezier(0.45, 0, 0.55, 1),
                     top ${duration}ms cubic-bezier(0.45, 0, 0.55, 1),
                     transform ${duration}ms cubic-bezier(0.45, 0, 0.55, 1)`,
        willChange: 'left, top, transform',
        pointerEvents: 'none',
      }}
    />
  )
}

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[6vw] pt-28 pb-16 bg-[#05091a] relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(26,107,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,255,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="absolute inset-0 pointer-events-none">
        {blobs.map((blob, i) => (
          <AnimatedBlob key={i} {...blob} />
        ))}
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1a6bff] to-transparent" />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="max-w-xl flex-1">
          <div className="inline-flex items-center gap-2 bg-[#1a6bff]/10 text-[#4d8fff] text-xs font-semibold px-4 py-1.5 border border-[#1a6bff]/30 mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a6bff] animate-pulse" />
            Available 24/7 — We're here when you need us
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)' }}
            className="text-6xl font-extrabold leading-none text-white mb-5 uppercase tracking-tight">
            Tech Support<br />
            You Can{' '}
            <span className="text-[#1a6bff]" style={{ textShadow: '0 0 40px rgba(26,107,255,0.5)' }}>
              Actually Trust
            </span>
          </h1>

          <p className="text-base text-gray-400 leading-relaxed max-w-lg mb-10 font-light">
            From device troubleshooting to network setup, Tech Live Connect delivers
            fast, reliable, and professional tech support for individuals and businesses alike.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#contact"
              className="bg-[#1a6bff] text-white font-semibold px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-[#4d8fff] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1a6bff]/40"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Get Support Now
            </a>
            <a href="#about"
              className="border border-[#1a6bff]/50 text-[#4d8fff] font-semibold px-8 py-3.5 text-sm uppercase tracking-widest hover:border-[#1a6bff] hover:text-white hover:bg-[#1a6bff]/10 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
            {[
              { num: '10K+', label: 'Clients Helped' },
              { num: '98%', label: 'Satisfaction Rate' },
              { num: '24/7', label: 'Support Available' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)', textShadow: '0 0 20px rgba(26,107,255,0.4)' }}>{num}</div>
                <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg role="img" aria-label="Tech support illustration" viewBox="0 0 500 500" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a6bff" />
                <stop offset="100%" stopColor="#0036cc" />
              </linearGradient>
              <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d1635" />
                <stop offset="100%" stopColor="#0a1128" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1a6bff" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Hex grid */}
            {[...Array(6)].map((_, row) =>
              [...Array(7)].map((_, col) => {
                const cx = col * 68 + (row % 2 === 0 ? 0 : 34) + 10
                const cy = row * 58 + 10
                return (
                  <polygon key={`${row}-${col}`}
                    points={`${cx},${cy-18} ${cx+16},${cy-9} ${cx+16},${cy+9} ${cx},${cy+18} ${cx-16},${cy+9} ${cx-16},${cy-9}`}
                    fill="none" stroke="#1a6bff" strokeWidth="0.6" opacity="0.12" />
                )
              })
            )}

            {/* Central monitor */}
            <rect x="100" y="80" width="300" height="210" rx="4" fill="url(#panelGrad)" filter="url(#softShadow)" stroke="#1a6bff" strokeWidth="1" strokeOpacity="0.4" />
            <rect x="100" y="80" width="300" height="36" rx="4" fill="url(#blueGrad)" />
            <rect x="100" y="100" width="300" height="16" fill="url(#blueGrad)" />
            <circle cx="122" cy="98" r="5.5" fill="white" opacity="0.25" />
            <circle cx="140" cy="98" r="5.5" fill="white" opacity="0.25" />
            <circle cx="158" cy="98" r="5.5" fill="white" opacity="0.25" />
            <rect x="172" y="92" width="80" height="10" rx="2" fill="white" opacity="0.15" />

            <line x1="100" y1="160" x2="400" y2="160" stroke="#1a6bff" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
            <line x1="250" y1="116" x2="250" y2="290" stroke="#1a6bff" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />

            <rect x="116" y="128" width="55" height="7" rx="2" fill="#1a6bff" opacity="0.9" />
            <rect x="116" y="142" width="38" height="7" rx="2" fill="#1a6bff" opacity="0.5" />
            <rect x="116" y="156" width="46" height="7" rx="2" fill="#1a6bff" opacity="0.3" />
            {[32, 22, 40, 28, 36, 18, 44].map((h, i) => (
              <rect key={i} x={116 + i * 14} y={260 - h} width="9" rx="1" height={h} fill="url(#blueGrad)" opacity={0.5 + i * 0.07} />
            ))}

            <path d="M310 135 L360 155 L360 205 C360 235 310 255 310 255 C310 255 260 235 260 205 L260 155 Z" fill="url(#blueGrad)" opacity="0.08" />
            <path d="M310 145 L352 162 L352 206 C352 230 310 246 310 246 C310 246 268 230 268 206 L268 162 Z" fill="none" stroke="#1a6bff" strokeWidth="1.5" opacity="0.8" />
            <path d="M293 198 L305 210 L328 182" stroke="#1a6bff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />

            <rect x="238" y="290" width="24" height="38" rx="2" fill="#1a6bff" opacity="0.3" />
            <rect x="195" y="325" width="110" height="8" rx="2" fill="#1a6bff" opacity="0.2" />

            {/* Bottom left card */}
            <rect x="30" y="320" width="155" height="110" rx="4" fill="url(#panelGrad)" filter="url(#softShadow)" stroke="#1a6bff" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="30" y="320" width="155" height="28" rx="4" fill="url(#blueGrad)" opacity="0.9" />
            <rect x="30" y="334" width="155" height="14" fill="url(#blueGrad)" opacity="0.9" />
            <rect x="44" y="326" width="60" height="8" rx="2" fill="white" opacity="0.2" />
            {[8, 13, 18, 23].map((h, i) => (
              <rect key={i} x={44 + i * 14} y={405 - h} width="9" rx="1" height={h} fill="url(#blueGrad)" opacity={0.4 + i * 0.15} />
            ))}
            <rect x="44" y="362" width="70" height="5" rx="2" fill="#1a6bff" opacity="0.4" />
            <rect x="44" y="374" width="50" height="5" rx="2" fill="#1a6bff" opacity="0.25" />
            <rect x="44" y="386" width="60" height="5" rx="2" fill="#1a6bff" opacity="0.15" />

            {/* Bottom right card */}
            <rect x="315" y="330" width="130" height="130" rx="4" fill="url(#panelGrad)" filter="url(#softShadow)" stroke="#1a6bff" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="315" y="330" width="130" height="28" rx="4" fill="url(#blueGrad)" opacity="0.8" />
            <rect x="315" y="344" width="130" height="14" fill="url(#blueGrad)" opacity="0.8" />
            <circle cx="380" cy="344" r="5" fill="white" opacity="0.25" />
            <circle cx="380" cy="408" r="32" fill="none" stroke="#1a3a7a" strokeWidth="6" />
            <circle cx="380" cy="408" r="32" fill="none" stroke="url(#blueGrad)" strokeWidth="6"
              strokeDasharray="138" strokeDashoffset="35" strokeLinecap="round"
              transform="rotate(-90 380 408)" filter="url(#glow)" />
            <text x="380" y="413" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" style={{ userSelect: 'none', pointerEvents: 'none', fontFamily: 'var(--font-display)' }}>98%</text>

            {/* Corner accents */}
            <line x1="430" y1="50" x2="470" y2="50" stroke="#1a6bff" strokeWidth="2" strokeLinecap="square" opacity="0.7" />
            <line x1="470" y1="50" x2="470" y2="90" stroke="#1a6bff" strokeWidth="2" strokeLinecap="square" opacity="0.7" />
            <line x1="30" y1="460" x2="70" y2="460" stroke="#1a6bff" strokeWidth="2" strokeLinecap="square" opacity="0.7" />
            <line x1="30" y1="420" x2="30" y2="460" stroke="#1a6bff" strokeWidth="2" strokeLinecap="square" opacity="0.7" />

            <circle cx="260" cy="175" r="5" fill="#1a6bff" opacity="0.7" filter="url(#glow)" />
            <circle cx="360" cy="240" r="4" fill="#1a6bff" opacity="0.5" filter="url(#glow)" />
            <circle cx="285" cy="252" r="3.5" fill="#1a6bff" opacity="0.4" filter="url(#glow)" />

            <circle cx="400" cy="80" r="18" fill="none" stroke="#1a6bff" strokeWidth="1" opacity="0.25" />
            <circle cx="400" cy="80" r="10" fill="none" stroke="#1a6bff" strokeWidth="1.5" opacity="0.4" />
            <circle cx="400" cy="80" r="4" fill="#1a6bff" opacity="0.9" filter="url(#glow)" />

            <g transform="translate(42, 48)" opacity="0.7">
              <path d="M0 24 Q16 8 32 24" stroke="#1a6bff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M-10 14 Q16 -8 42 14" stroke="#1a6bff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
              <circle cx="16" cy="30" r="4" fill="#1a6bff" filter="url(#glow)" />
            </g>

            <g transform="translate(440, 160)" opacity="0.6">
              <circle cx="14" cy="14" r="6" fill="none" stroke="#1a6bff" strokeWidth="2" />
              <circle cx="14" cy="14" r="2.5" fill="#1a6bff" />
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <rect key={i} x="13" y="4" width="2.5" height="5" rx="1" fill="#1a6bff" transform={`rotate(${angle} 14 14)`} />
              ))}
            </g>

            <line x1="185" y1="370" x2="250" y2="337" stroke="#1a6bff" strokeWidth="1" strokeDasharray="5 4" opacity="0.3" />
            <line x1="315" y1="390" x2="390" y2="337" stroke="#1a6bff" strokeWidth="1" strokeDasharray="5 4" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero