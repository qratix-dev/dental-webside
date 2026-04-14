import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Smiles Transformed' },
  { value: '98%', label: 'Patient Satisfaction' },
]

const partners = [
  'Straumann', 'Dentsply Sirona', 'Nobel Biocare',
  'Osstem Implant', 'Ivoclar Vivadent', 'Dentsply',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      sectionRef.current!.querySelectorAll('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--navy)' }} ref={sectionRef}>
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div>
            <SectionLabel light>{t.about.label}</SectionLabel>

            <h2
              data-animate
              className="font-sans font-black text-white mb-6 opacity-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              {t.about.title}{' '}
              <span style={{ color: 'var(--emerald)' }}>{t.about.titleGold}</span>
            </h2>

            <p data-animate className="font-sans text-white/60 leading-relaxed mb-10 opacity-0" style={{ fontSize: '1rem' }}>
              {t.about.body}
            </p>

            {/* Stats row */}
            <div data-animate className="grid grid-cols-3 gap-4 mb-10 opacity-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-5 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p className="font-sans font-black mb-1" style={{ fontSize: '1.7rem', letterSpacing: '-0.04em', color: 'var(--emerald)' }}>
                    {s.value}
                  </p>
                  <p className="font-sans text-[10px] font-semibold text-white/40 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul data-animate className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 opacity-0">
              {t.about.checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--emerald-dim)' }}
                  >
                    <svg width="10" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm font-medium text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            {/* Partners */}
            <div data-animate className="opacity-0">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/25 mb-4">
                {t.about.partnersLabel}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="font-sans text-xs font-semibold transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--emerald)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Videos */}
          <div data-animate className="grid grid-cols-2 gap-4 opacity-0">
            <div
              className="overflow-hidden aspect-[9/16] rounded-3xl"
              style={{ border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <video src="/video-Dental/sort-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
            <div
              className="overflow-hidden aspect-[9/16] rounded-3xl mt-10"
              style={{ border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <video src="/video-Dental/sort-video-2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
