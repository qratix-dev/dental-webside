import { useState, useRef, type FormEvent, type DragEvent } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../contexts/LanguageContext'

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30',
]

// jsDay: 0=Sun, 1=Mon, ..., 6=Sat
const workingHoursData = [
  { jsDay: 1, hours: '09:00 – 19:00', closed: false },
  { jsDay: 2, hours: '09:00 – 19:00', closed: false },
  { jsDay: 3, hours: '09:00 – 19:00', closed: false },
  { jsDay: 4, hours: '09:00 – 19:00', closed: false },
  { jsDay: 5, hours: '09:00 – 19:00', closed: false },
  { jsDay: 6, hours: '09:00 – 19:00', closed: false },
  { jsDay: 0, hours: '', closed: true },
]

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@luxurydentalturkey',
    href: 'https://instagram.com/luxurydentalturkey',
    color: '#E1306C',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Paris Smiles Clinic',
    href: '#',
    color: '#1877F2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@luxurydentalturkey',
    href: '#',
    color: '#000000',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Paris Smiles Clinic',
    href: '#',
    color: '#FF0000',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-white text-[var(--text)] font-sans text-sm placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15 transition-colors duration-200'

export default function Contact() {
  const today = new Date().getDay()
  const { t } = useLanguage()

  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', message: '', privacy: false })
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
    setForm({ name: '', email: '', phone: '', date: '', time: '', message: '', privacy: false })
    setFiles([])
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const dropped = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...dropped])
  }

  return (
    <section id="contact" style={{ backgroundColor: '#FBF6E8' }}>

      {/* ── BLOCK 1: Leave a Message Form ── */}
      <div className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>{t.contact.block1Label}</SectionLabel>
            <h2 className="text-4xl lg:text-5xl text-[var(--navy)] mb-4">
              <span className="font-serif">{t.contact.block1Title} </span>
              <em className="not-italic font-serif italic text-[var(--gold)]">{t.contact.block1TitleGold}</em>
            </h2>
            <p className="font-sans text-[var(--muted)] text-base leading-relaxed">{t.contact.block1Subtitle}</p>
          </div>

          {/* WhatsApp quick-contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { number: '+44 7869 556301', label: 'United Kingdom', flag: '🇬🇧', wa: '447869556301' },
              { number: '+49 178 3488639', label: 'Deutschland', flag: '🇩🇪', wa: '491783488639' },
            ].map((item) => (
              <a
                key={item.wa}
                href={`https://wa.me/${item.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-[var(--border)] hover:border-[#25D366] transition-colors duration-200 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#25D366' }}>
                  <WhatsAppIcon size={22} />
                </div>
                <div>
                  <p className="font-sans font-bold text-[var(--navy)] text-sm leading-tight">{item.number}</p>
                  <p className="font-sans text-xs text-[var(--muted)] mt-0.5"><span className="mr-1">{item.flag}</span>{item.label}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10" style={{ boxShadow: 'var(--shadow-card)' }}>
            {submitted && (
              <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl mb-6 font-sans text-sm font-semibold" style={{ backgroundColor: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t.contact.successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" placeholder={t.contact.namePlaceholder} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder={t.contact.emailPlaceholder} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />

              <div className="flex items-stretch rounded-xl border border-[var(--border)] bg-white focus-within:border-[var(--gold)] focus-within:ring-2 focus-within:ring-[var(--gold)]/15 transition-colors duration-200 overflow-hidden">
                <div className="flex items-center gap-2 px-4 border-r border-[var(--border)] bg-[var(--bg)] flex-shrink-0">
                  <span className="text-lg">🇬🇧</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <span className="font-sans text-sm text-[var(--muted)]">+44</span>
                </div>
                <input type="tel" placeholder={t.contact.phonePlaceholder} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="flex-1 px-4 py-3.5 bg-white text-[var(--text)] font-sans text-sm placeholder-[var(--muted)] focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={`${inputClass} pl-10`} />
                </div>
                <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={`${inputClass} appearance-none`} style={{ color: form.time ? 'var(--text)' : 'var(--muted)' }}>
                  <option value="" disabled style={{ color: 'var(--muted)' }}>{t.contact.timePlaceholder}</option>
                  {timeSlots.map((ts) => <option key={ts} value={ts}>{ts}</option>)}
                </select>
              </div>

              <textarea placeholder={t.contact.messagePlaceholder} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />

              <div
                className={`rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors duration-200 ${dragOver ? 'border-[var(--gold)] bg-[var(--gold)]/5' : 'border-[var(--border)] hover:border-[var(--gold)]/50 hover:bg-[var(--bg)]'}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                <input ref={fileInputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx" className="hidden" onChange={(e) => { if (e.target.files) setFiles((prev) => [...prev, ...Array.from(e.target.files!)]) }} />
                <div className="flex flex-col items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                  <p className="font-sans font-semibold text-sm text-[var(--navy)]">{t.contact.attachTitle}</p>
                  <p className="font-sans text-xs text-[var(--muted)]">{t.contact.attachSub}</p>
                </div>
                {files.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 justify-center">
                    {files.map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--gold)]/15 text-[var(--navy)] font-sans text-xs font-medium">{f.name}</span>
                    ))}
                  </div>
                )}
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input type="checkbox" required checked={form.privacy} onChange={(e) => setForm({ ...form, privacy: e.target.checked })} className="sr-only" />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150 ${form.privacy ? 'bg-[var(--gold)] border-[var(--gold)]' : 'border-[var(--border)] bg-white'}`}>
                    {form.privacy && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4.5L4 7.5L10 1" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-sans text-sm text-[var(--muted)] leading-snug">
                  {t.contact.privacyText}{' '}
                  <a href="#" className="text-[var(--gold)] hover:underline">{t.contact.privacyLink}</a>.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-sans font-bold text-sm text-[var(--navy)] focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-2 active:scale-[0.98] mt-1"
                style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)', boxShadow: '0 4px 20px rgba(203,161,53,0.35)', transition: 'opacity 0.2s, transform 0.1s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.9' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                {t.contact.submitBtn}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── BLOCK 2: Get in Touch Info Cards ── */}
      <div className="py-20 bg-white border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>{t.contact.block2Label}</SectionLabel>
            <h2 className="text-4xl lg:text-5xl text-[var(--navy)] mb-4">
              <span className="font-serif">{t.contact.block2Title} </span>
              <em className="not-italic font-serif italic text-[var(--gold)]">{t.contact.block2TitleGold}</em>
            </h2>
            <p className="font-sans text-[var(--muted)] max-w-xl mx-auto text-base">{t.contact.block2Subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 rounded-full border-2 border-[var(--gold)]/30 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--muted)] mb-3">{t.contact.addressLabel}</p>
              <p className="font-sans text-sm text-[var(--navy)] leading-relaxed">
                Sirinyali, Ismet Goksen Cd.<br />No:30/B,<br />Muratpasa/Antalya
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 rounded-full border-2 border-[var(--gold)]/30 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--muted)] mb-3">{t.contact.phoneLabel}</p>
              <a href="tel:+442034889319" className="font-sans text-sm text-[var(--navy)] hover:text-[var(--gold)] transition-colors duration-150 block">
                <span className="text-[10px] font-bold tracking-widest text-[var(--muted)] mr-1.5">GB</span>+44 20 3488 9319
              </a>
              <a href="tel:+491783488639" className="font-sans text-sm text-[var(--navy)] hover:text-[var(--gold)] transition-colors duration-150 block mt-1">
                <span className="text-[10px] font-bold tracking-widest text-[var(--muted)] mr-1.5">DE</span>+49 178 3488639
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 rounded-full border-2 border-[var(--gold)]/30 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <p className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--muted)] mb-3">{t.contact.emailLabel}</p>
              <a href="mailto:info@luxurydental.uk" className="font-sans text-sm text-[var(--navy)] hover:text-[var(--gold)] transition-colors duration-150 break-all">
                info@luxurydental.uk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOCK 3: Working Hours ── */}
      <div className="py-16 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-center gap-3 px-7 py-5 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)]/30 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--navy)]">{t.contact.block3Title}</h3>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {workingHoursData.map((row) => {
                const isToday = row.jsDay === today
                const dayName = t.contact.daysOfWeek[row.jsDay]
                const hoursText = row.closed ? t.contact.closedLabel : row.hours
                return (
                  <div
                    key={row.jsDay}
                    className={`flex items-center justify-between px-7 py-4 transition-colors duration-150 ${isToday ? 'bg-[var(--gold)]/8' : 'hover:bg-[var(--bg)]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-sans text-sm font-medium ${isToday ? 'text-[var(--gold)] font-bold' : 'text-[var(--navy)]'}`}>
                        {dayName}
                      </span>
                      {isToday && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] font-sans font-bold text-[10px] uppercase tracking-wider">
                          {t.contact.todayLabel}
                        </span>
                      )}
                    </div>
                    <span className={`font-sans text-sm font-semibold ${row.closed ? 'text-red-500' : isToday ? 'text-[var(--gold)] font-bold' : 'text-[var(--navy)]'}`}>
                      {hoursText}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="px-7 py-4 border-t border-[var(--border)]">
              <p className="font-sans text-xs text-[var(--muted)] italic">{t.contact.emergencyNote}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOCK 4: Follow Us ── */}
      <div className="py-16 bg-white border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mb-2">{t.contact.block4Title}</h3>
          <p className="font-sans text-sm text-[var(--muted)] mb-7">{t.contact.block4Subtitle}</p>
          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--gold)] transition-colors duration-200 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-105 transition-transform duration-200" style={{ backgroundColor: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-[var(--navy)]">{s.name}</p>
                  <p className="font-sans text-xs text-[var(--muted)]">{s.handle}</p>
                </div>
                <svg className="ml-auto text-[var(--muted)] group-hover:text-[var(--gold)] transition-colors duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOCK 5: Visit Our Clinic (Map) ── */}
      <div className="py-16 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>{t.contact.block5Label}</SectionLabel>
            <h2 className="text-4xl lg:text-5xl text-[var(--navy)] mb-4">
              <span className="font-serif">{t.contact.block5Title} </span>
              <em className="not-italic font-serif italic text-[var(--gold)]">{t.contact.block5TitleGold}</em>
            </h2>
            <p className="font-sans text-[var(--muted)] max-w-xl mx-auto text-base">{t.contact.block5Subtitle}</p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.6766338694!2d30.71137!3d36.88697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUzJzEzLjEiTiAzMMKwNDInNDguMCJF!5e0!3m2!1sen!2str!4v1710000000000!5m2!1sen!2str"
              width="100%" height="420" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Paris Smiles Clinic Location"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
