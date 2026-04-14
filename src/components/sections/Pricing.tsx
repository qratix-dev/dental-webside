import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { pricingCategories, type Currency, formatPrice, currencySymbols } from '../../data/pricing'
import { useLanguage } from '../../contexts/LanguageContext'

const currencies: Currency[] = ['GBP', 'USD', 'EUR']

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('GBP')
  const [openCategory, setOpenCategory] = useState<string | null>('implants-surgical')
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>{t.pricing.label}</SectionLabel>
          <h2
            className="font-sans font-black mb-4"
            style={{ color: 'var(--navy)', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            <span style={{ color: 'var(--emerald)' }}>{t.pricing.titleEm}</span>{' '}
            <span>{t.pricing.titleRest}</span>
          </h2>
          <p className="font-sans max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)', fontSize: '1rem' }}>
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Currency toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-2xl p-1.5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {currencies.map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className="px-6 py-2 rounded-xl font-sans font-semibold text-sm transition-all duration-200 focus-visible:outline-2 active:scale-[0.97]"
                style={{
                  background: currency === c ? 'var(--emerald)' : 'transparent',
                  color: currency === c ? 'white' : 'var(--muted)',
                  boxShadow: currency === c ? '0 4px 16px rgba(16,185,129,0.35)' : 'none',
                }}
              >
                {currencySymbols[c]} {c}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {pricingCategories.map((category) => {
            const isOpen = openCategory === category.id
            const categoryTitle = t.pricing.categories[category.id] ?? category.title
            return (
              <div
                key={category.id}
                className="overflow-hidden"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: `1.5px solid ${isOpen ? 'var(--emerald)' : 'var(--border)'}`,
                  background: 'var(--surface)',
                  boxShadow: isOpen ? 'var(--shadow-hover)' : 'var(--shadow-xs)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-150"
                  style={{ background: isOpen ? 'rgba(16,185,129,0.04)' : 'transparent' }}
                >
                  <div className="flex items-center gap-3">
                    {/* Emerald indicator dot */}
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{ background: isOpen ? 'var(--emerald)' : 'var(--border)' }}
                    />
                    <span
                      className="font-sans font-bold text-sm sm:text-base"
                      style={{ color: isOpen ? 'var(--emerald)' : 'var(--navy)' }}
                    >
                      {categoryTitle}
                    </span>
                  </div>
                  <span style={{ color: 'var(--emerald)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div style={{ borderTop: '1px solid var(--border)' }}>
                    <table className="w-full">
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className="transition-colors duration-100"
                            style={{ borderBottom: idx < category.items.length - 1 ? '1px solid var(--border)' : 'none' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            <td className="px-6 py-3.5 font-sans text-sm" style={{ color: 'var(--text)' }}>
                              {item.treatment}
                            </td>
                            <td className="px-6 py-3.5 font-sans font-black text-sm text-right whitespace-nowrap" style={{ color: 'var(--emerald)' }}>
                              {formatPrice(item.gbp, currency, item.note)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center font-sans text-sm mt-8" style={{ color: 'var(--muted)' }}>
          {t.pricing.footerNote}
        </p>
      </div>
    </section>
  )
}
