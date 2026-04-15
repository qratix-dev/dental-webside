import { useState, useRef, useCallback, useEffect } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../contexts/LanguageContext'

const pairs = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    after:  'https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=800&q=80',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80',
    after:  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80',
    after:  'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80',
  },
]

function Slider({ before, after }: { before: string; after: string }) {
  const [pct, setPct] = useState(50)
  const boxRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    if (!boxRef.current) return
    const { left, width } = boxRef.current.getBoundingClientRect()
    setPct(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)))
  }, [])

  // Non-passive touchmove so we can preventDefault and stop page scroll while dragging
  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current) {
        e.preventDefault()
        move(e.touches[0].clientX)
      }
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [move])

  return (
    <div
      ref={boxRef}
      className="relative w-full select-none cursor-ew-resize overflow-hidden"
      style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); e.preventDefault() }}
      onMouseMove={(e) => { if (dragging.current) move(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX) }}
      onTouchEnd={() => { dragging.current = false }}
    >
      {/* AFTER — full base layer */}
      <img
        src={after}
        alt="After"
        draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
      />

      {/* BEFORE — clipped */}
      <div
        style={{ position: 'absolute', inset: 0, width: `${pct}%`, overflow: 'hidden', pointerEvents: 'none' }}
      >
        <img
          src={before}
          alt="Before"
          draggable={false}
          style={{ position: 'absolute', inset: 0, width: boxRef.current?.offsetWidth ?? 600, height: '100%', maxWidth: 'none', objectFit: 'cover' }}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          position: 'absolute', top: 0, bottom: 0,
          left: `${pct}%`,
          width: 2,
          background: 'rgba(255,255,255,0.85)',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      >
        {/* Handle */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 48, height: 48,
          borderRadius: '50%',
          background: 'var(--navy)',
          border: '2.5px solid var(--emerald)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 0 4px rgba(16,185,129,0.2), 0 4px 16px rgba(0,0,0,0.3)',
        }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="var(--emerald)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Vertical glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.5), transparent)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Labels */}
      <div style={{
        position: 'absolute', top: 14, left: 14,
        background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(8px)',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 10, fontFamily: 'Inter,sans-serif', fontWeight: 700,
        letterSpacing: '0.12em', padding: '5px 12px',
        borderRadius: 100, pointerEvents: 'none', zIndex: 10,
        border: '1px solid rgba(255,255,255,0.12)',
      }}>
        BEFORE
      </div>

      <div style={{
        position: 'absolute', top: 14, right: 14,
        background: 'var(--emerald)',
        color: 'white',
        fontSize: 10, fontFamily: 'Inter,sans-serif', fontWeight: 700,
        letterSpacing: '0.12em', padding: '5px 12px',
        borderRadius: 100, pointerEvents: 'none', zIndex: 10,
      }}>
        AFTER
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section
      id="before-after"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel light>{t.beforeAfter.label}</SectionLabel>
          <h2
            className="font-sans font-black text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            {t.beforeAfter.title}{' '}
            <span style={{ color: 'var(--emerald)' }}>{t.beforeAfter.titleGold}</span>
          </h2>
          <p className="font-sans text-white/50 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            {t.beforeAfter.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pairs.map((pair, i) => {
            const treatment = t.beforeAfter.treatments[i]
            return (
              <div key={pair.id}>
                <Slider before={pair.before} after={pair.after} />
                <div className="mt-5 text-center">
                  <p className="font-sans font-bold text-white text-sm tracking-tight">{treatment?.name}</p>
                  <p className="font-sans text-xs mt-1" style={{ color: 'var(--emerald)' }}>
                    {t.beforeAfter.durationPrefix} {treatment?.duration}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
