interface SectionLabelProps {
  children: string
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2.5 mb-4 ${className}`}>
      <span
        className="w-5 h-[2px] rounded-full flex-shrink-0"
        style={{ background: light ? 'rgba(16,185,129,0.7)' : 'var(--emerald)' }}
      />
      <p
        className="text-[10px] font-sans font-bold uppercase tracking-[0.22em]"
        style={{ color: light ? 'rgba(16,185,129,0.85)' : 'var(--emerald)' }}
      >
        {children}
      </p>
    </div>
  )
}
