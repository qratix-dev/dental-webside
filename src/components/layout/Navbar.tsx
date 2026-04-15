import { useState, useEffect, useRef, type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Language } from '../../i18n/translations'

// ─── Flag SVG components ────────────────────────────────────────────────────

function UKFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="3" />
      <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="4.5" />
      <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="3" />
    </svg>
  )
}

function DEFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="4.67" fill="#000000" />
      <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
    </svg>
  )
}

function FRFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="6.67" height="14" fill="#002395" />
      <rect x="6.67" width="6.67" height="14" fill="#FFFFFF" />
      <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
    </svg>
  )
}

function TRFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#E30A17" />
      <circle cx="8.5" cy="7" r="3.2" fill="white" />
      <circle cx="9.8" cy="7" r="2.5" fill="#E30A17" />
      <polygon points="13,7 11.8,6.3 11.8,7.7" fill="white" transform="rotate(18 13 7) translate(-0.5 0)" />
      <polygon fill="white" points="13.4,5.8 12.0,6.7 12.5,8.3 13.9,7.4 13.9,5.8" transform="translate(0.3 -0.2) scale(0.75) rotate(18 13 7)" />
    </svg>
  )
}

const LANG_META: Record<Language, { name: string; flag: ReactElement }> = {
  en: { name: 'EN', flag: <UKFlag /> },
  de: { name: 'DE', flag: <DEFlag /> },
  fr: { name: 'FR', flag: <FRFlag /> },
  tr: { name: 'TR', flag: <TRFlag /> },
}

const LANGUAGES: Language[] = ['en', 'de', 'fr', 'tr']

// ─── Language Dropdown ───────────────────────────────────────────────────────

function LanguageDropdown({ light, onSelect }: { light?: boolean; onSelect?: () => void }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = LANG_META[lang]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--emerald)] text-xs font-semibold tracking-wider ${
          light
            ? 'border-[var(--border)] text-[var(--navy)] hover:border-[var(--emerald)] bg-white/80'
            : 'border-white/20 text-white hover:border-white/50 bg-white/10'
        }`}
      >
        <span className="flex-shrink-0 rounded-sm overflow-hidden">{current.flag}</span>
        <span>{current.name}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 opacity-60 ${open ? 'rotate-180' : ''}`}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden z-50" style={{ boxShadow: 'var(--shadow-lg)' }}>
          {LANGUAGES.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); onSelect?.() }}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[var(--bg)] ${lang === l ? 'bg-[var(--bg)]' : ''}`}
            >
              <span className="flex-shrink-0 rounded-sm overflow-hidden">{LANG_META[l].flag}</span>
              <span className={`font-sans text-xs font-semibold ${lang === l ? 'text-[var(--emerald)]' : 'text-[var(--navy)]'}`}>
                {LANG_META[l].name}
              </span>
              {lang === l && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto flex-shrink-0">
                  <path d="M2 6L5 9L10 3" stroke="var(--emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.services,    href: '/#services' },
    { label: t.nav.about,       href: '/#about' },
    { label: t.nav.prices,      href: '/#pricing' },
    { label: t.nav.doctors,     href: '/#doctors' },
    { label: t.nav.reviews,     href: '/#testimonials' },
    { label: t.nav.beforeAfter, href: '/#before-after' },
  ]

  useEffect(() => {
    if (location.pathname !== '/') { setScrolled(true); return }
    const check = () => {
      const sentinel = document.getElementById('hero-sentinel')
      if (!sentinel) { setScrolled(window.scrollY > 10); return }
      setScrolled(sentinel.getBoundingClientRect().bottom <= 0)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: scrolled
            ? 'rgba(255,255,255,0.88)'
            : 'rgba(10,22,40,0.25)',
          borderBottom: scrolled
            ? '1px solid rgba(226,232,240,0.8)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={() => { closeMenu(); window.scrollTo(0, 0) }}
          >
            {/* Monogram */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--emerald)', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' }}
            >
              <span className="font-sans font-black text-white text-base leading-none tracking-tight">P</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-sans font-bold text-[13px] tracking-widest transition-colors duration-300"
                style={{ color: scrolled ? 'var(--navy)' : '#FFFFFF' }}
              >
                PARIS SMILES
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] font-semibold" style={{ color: 'var(--emerald)' }}>
                CLINIC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative font-sans font-medium text-[13px] transition-colors duration-200 group"
                style={{ color: scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.88)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: 'var(--emerald)' }}
                />
              </Link>
            ))}

            <LanguageDropdown light={scrolled} />

            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans font-semibold text-[13px] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{
                background: 'var(--emerald)',
                boxShadow: '0 4px 16px rgba(16,185,129,0.35)',
              }}
            >
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--emerald)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: scrolled || mobileOpen ? 'var(--navy)' : '#FFFFFF',
                  opacity: i === 1 && mobileOpen ? 0 : 1,
                  transform: i === 0 && mobileOpen ? 'translateY(8px) rotate(45deg)' :
                             i === 2 && mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-400"
        style={{
          background: 'var(--navy)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Emerald glow decoration */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }}
        />

        <nav className="relative flex flex-col items-center gap-6 z-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={closeMenu}
              className="font-sans font-bold text-3xl text-white hover:text-[var(--emerald)] transition-colors duration-200"
              style={{
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transition: `all 0.4s ease ${i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3">
            <LanguageDropdown light onSelect={closeMenu} />
          </div>

          <Link
            to="/#contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center px-10 py-4 rounded-2xl font-sans font-bold text-base text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: 'var(--emerald)',
              boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
            }}
          >
            {t.nav.getQuote}
          </Link>
        </nav>
      </div>
    </>
  )
}
