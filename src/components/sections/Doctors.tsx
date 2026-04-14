import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const doctors = [
  { name: 'Dt. Abdullah Fida',   image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80' },
  { name: 'Dt. Hatice Gül Dal',  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80' },
  { name: 'Dt. Murat Demiral',   image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80' },
  { name: 'Dt. Nevzat Çakmak',   image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80' },
]

export default function Doctors() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-doc]',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="doctors" className="py-24 lg:py-32" style={{ background: 'var(--bg)' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>{t.doctors.label}</SectionLabel>
          <h2
            className="font-sans font-black mb-4"
            style={{ color: 'var(--navy)', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            <span style={{ color: 'var(--emerald)' }}>{t.doctors.titleEm}</span>
            {t.doctors.titleRest && <span> {t.doctors.titleRest}</span>}
          </h2>
          <p className="font-sans max-w-xl mx-auto" style={{ color: 'var(--muted)', fontSize: '1rem' }}>
            {t.doctors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              data-doc
              className="relative overflow-hidden group cursor-default opacity-0"
              style={{
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-card)',
                aspectRatio: '4/5',
                border: '2px solid transparent',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--emerald)'
                el.style.boxShadow = 'var(--shadow-hover)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'transparent'
                el.style.boxShadow = 'var(--shadow-card)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.2) 55%, transparent 100%)' }}
              />
              {/* Emerald accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] origin-left transition-transform duration-400"
                style={{
                  background: 'var(--emerald)',
                  transform: 'scaleX(0)',
                  transitionProperty: 'transform',
                  transitionDuration: '0.4s',
                  transitionTimingFunction: 'ease',
                }}
                // We handle via CSS group-hover below via inline
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: 'var(--emerald)' }}>
                  {t.doctors.titles[doctor.name] ?? 'Cosmetic Dentist'}
                </p>
                <h3 className="font-sans font-black text-white leading-tight" style={{ fontSize: '0.95rem', letterSpacing: '-0.02em' }}>
                  {doctor.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
