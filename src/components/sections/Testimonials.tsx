import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { testimonials } from '../../data/testimonials'
import { useLanguage } from '../../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--emerald)">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-stat]', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '[data-stat]', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.fromTo('[data-card]', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '[data-card]', start: 'top 80%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: `linear-gradient(160deg, var(--navy) 0%, #0D1F3A 100%)` }}
    >
      {/* Decorative quote bg */}
      <div
        className="absolute top-0 right-0 select-none pointer-events-none font-sans font-black leading-none"
        style={{
          fontSize: 'clamp(180px, 28vw, 380px)',
          color: 'rgba(16,185,129,0.04)',
          userSelect: 'none',
          lineHeight: 0.75,
        }}
      >
        "
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, var(--emerald), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <SectionLabel light>{t.testimonials.label}</SectionLabel>
          <h2
            className="font-sans font-black text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            {t.testimonials.title}{' '}
            <em className="not-italic" style={{ color: 'var(--emerald)' }}>{t.testimonials.titleGold}</em>
          </h2>
          <p className="font-sans text-white/45 max-w-xl mx-auto" style={{ fontSize: '1rem' }}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 max-w-3xl mx-auto">
          {t.testimonials.stats.map((s) => (
            <div
              key={s.label}
              data-stat
              className="text-center opacity-0 py-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="font-sans font-black mb-1" style={{ fontSize: '1.9rem', letterSpacing: '-0.04em', color: 'var(--emerald)' }}>
                {s.value}
              </p>
              <p className="font-sans text-[10px] font-semibold text-white/40 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t_item) => (
            <div
              key={t_item.id}
              data-card
              className="relative rounded-2xl p-7 opacity-0 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(16,185,129,0.4)'
                el.style.transform = 'translateY(-5px)'
                el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.2)'
              }}
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 font-sans font-black text-5xl leading-none select-none" style={{ color: 'rgba(16,185,129,0.15)' }}>
                "
              </div>

              <Stars />

              <blockquote className="font-sans text-base text-white/80 leading-relaxed flex-1" style={{ fontStyle: 'normal' }}>
                "{t_item.quote}"
              </blockquote>

              <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-sans font-black text-sm flex-shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-light) 100%)' }}
                >
                  {t_item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-bold text-white text-sm truncate">{t_item.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-sans text-xs" style={{ color: 'var(--emerald)' }}>{t_item.label}</span>
                  </div>
                </div>
                {/* Google badge */}
                <div className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-sans text-[10px] font-bold text-white/40">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-sans text-white/35 text-sm mb-5">{t.testimonials.bottomText}</p>
          <a
            href="https://wa.me/442034889319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans font-bold text-sm text-white rounded-2xl transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: 'var(--emerald)',
              padding: '16px 36px',
              boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            {t.testimonials.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
