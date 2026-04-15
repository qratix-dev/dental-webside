import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useLanguage } from '../../contexts/LanguageContext'

// ─── Partner logos ────────────────────────────────────────────────────────────

function StraumannLogo() {
  return (
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="33">
      <path d="M14 9 C14 9 10 13 10 19 C10 25 14 29 20 29 C26 29 28 25 28 21 C28 17 25 15 20 15 C17 15 16 17 16 19 C16 21 17 22 19 22" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <text x="33" y="25" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="500" letterSpacing="0.5" fill="#94A3B8">straumann</text>
    </svg>
  )
}
function VitaLogo() {
  return (
    <svg viewBox="0 0 100 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="35">
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="22" fontWeight="700" letterSpacing="4" fill="#94A3B8">VITA</text>
    </svg>
  )
}
function SironaLogo() {
  return (
    <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="130" height="34">
      <rect x="2" y="10" width="26" height="24" rx="6" fill="#94A3B8"/>
      <text x="15" y="26" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="white">S</text>
      <text x="35" y="25" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="500" fill="#94A3B8">sirona</text>
      <text x="35" y="36" fontFamily="Inter,sans-serif" fontSize="7" fill="#CBD5E1" letterSpacing="0.3">The Dental Company</text>
    </svg>
  )
}
function NobelBiocareLogo() {
  return (
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="34">
      <rect x="2" y="8" width="28" height="28" rx="6" fill="none" stroke="#94A3B8" strokeWidth="2"/>
      <text x="16" y="27" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="16" fontWeight="700" fill="#94A3B8">N</text>
      <text x="38" y="22" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#94A3B8">Nobel</text>
      <text x="38" y="35" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#94A3B8">Biocare</text>
    </svg>
  )
}
function OsstemLogo() {
  return (
    <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="115" height="34">
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="800" fill="#94A3B8" letterSpacing="0.5">oSStem®</text>
      <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="600" letterSpacing="3" fill="#CBD5E1">IMPLANT</text>
    </svg>
  )
}
function IvoclarLogo() {
  return (
    <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="125" height="34">
      <circle cx="6" cy="12" r="2.5" fill="#94A3B8"/>
      <circle cx="6" cy="19" r="1.5" fill="#94A3B8"/>
      <circle cx="6" cy="25" r="1.5" fill="#94A3B8"/>
      <text x="14" y="20" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="400" fill="#94A3B8" letterSpacing="0.3">ivoclar</text>
      <text x="14" y="33" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="400" fill="#94A3B8" letterSpacing="0.3">vivadent</text>
    </svg>
  )
}
function DentsplyLogo() {
  return (
    <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="34">
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="14" fontWeight="700" letterSpacing="2" fill="#94A3B8">DENTSPLY</text>
    </svg>
  )
}

const PARTNERS = [
  { id: 'straumann', name: 'Straumann',        logo: <StraumannLogo /> },
  { id: 'vita',      name: 'Vita Zahnfabrik',  logo: <VitaLogo /> },
  { id: 'sirona',    name: 'Dentsply Sirona',   logo: <SironaLogo /> },
  { id: 'nobel',     name: 'Nobel Biocare',     logo: <NobelBiocareLogo /> },
  { id: 'osstem',    name: 'Osstem Implant',    logo: <OsstemLogo /> },
  { id: 'ivoclar',   name: 'Ivoclar Vivadent',  logo: <IvoclarLogo /> },
  { id: 'dentsply',  name: 'Dentsply',          logo: <DentsplyLogo /> },
]
const LOOP_PARTNERS = [...PARTNERS, ...PARTNERS]

function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ playOnInit: true, speed: 0.7, stopOnInteraction: false })]
  )
  return (
    <div className="relative overflow-hidden bg-white py-5 border-t border-[var(--border)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
        style={{ background: 'linear-gradient(to right, white, transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
        style={{ background: 'linear-gradient(to left, white, transparent)' }} />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3 px-6">
          {LOOP_PARTNERS.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex-none flex items-center justify-center"
              style={{ width: 152 }}
            >
              <div
                className="w-36 h-14 rounded-2xl flex items-center justify-center px-3 bg-white transition-all duration-300 hover:shadow-md group"
                style={{ border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--emerald)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
              >
                {p.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      const els = contentRef.current!.querySelectorAll('[data-hero]')
      gsap.fromTo(
        els,
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.25 }
      )
    }, contentRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[100dvh] min-h-[640px] flex flex-col justify-end overflow-hidden" id="hero">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-Dental/dental-fp.mp4"
        autoPlay muted loop playsInline
      />

      {/* Multi-layer gradient overlay — deep navy + slight teal tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.5) 55%, rgba(10,22,40,0.15) 100%),
            linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle emerald glow in top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.12) 0%, transparent 60%)' }}
      />

      {/* Hero sentinel */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-28 w-full" ref={contentRef}>

        {/* Eyebrow */}
        <div data-hero className="flex items-center gap-3 mb-6 opacity-0">
          <span className="w-6 h-[2px] rounded-full" style={{ background: 'var(--emerald)' }} />
          <p className="text-xs font-sans font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--emerald)' }}>
            {t.hero.eyebrow}
          </p>
        </div>

        {/* Headline */}
        <h1 className="mb-6 opacity-0" data-hero>
          <span className="block font-sans font-black text-white leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.04em' }}>
            {t.hero.line1}
          </span>
          <span className="block font-sans font-black leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.04em', color: 'var(--emerald)' }}>
            {t.hero.line2}
          </span>
        </h1>

        {/* Subtitle */}
        <p data-hero className="font-sans font-light text-white/70 max-w-xl leading-relaxed mb-8 opacity-0"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', letterSpacing: '0' }}>
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div data-hero className="flex flex-wrap gap-4 opacity-0">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2.5 font-sans font-semibold text-sm text-white rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: 'var(--emerald)',
              padding: '14px 28px',
              boxShadow: '0 6px 24px rgba(16,185,129,0.45)',
            }}
          >
            {t.hero.ctaQuote}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="https://wa.me/442034889319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans font-semibold text-sm text-white rounded-xl transition-all duration-200 hover:bg-white/20 active:scale-[0.97]"
            style={{
              border: '1.5px solid rgba(255,255,255,0.35)',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              padding: '14px 28px',
            }}
          >
            {t.hero.ctaWhatsapp}
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 w-full"
        style={{
          background: 'rgba(10,22,40,0.85)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14">
          {[
            { value: t.hero.statPatients, label: t.hero.statPatientsLabel },
            { value: t.hero.statExperience, label: t.hero.statExperienceLabel },
            { value: t.hero.statSatisfaction, label: t.hero.statSatisfactionLabel },
          ].map((s, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-sans font-black text-2xl" style={{ color: 'var(--emerald)', letterSpacing: '-0.04em' }}>
                {s.value}
              </span>
              <span className="font-sans text-sm text-white/55 font-medium">{s.label}</span>
              {i < arr.length - 1 && (
                <span className="hidden sm:block w-px h-5 ml-2" style={{ background: 'rgba(255,255,255,0.12)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partners carousel */}
      <PartnersCarousel />
    </section>
  )
}
