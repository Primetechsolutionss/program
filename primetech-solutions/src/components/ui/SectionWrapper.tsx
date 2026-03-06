interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export function SectionWrapper({
  children,
  className = '',
  innerClassName = '',
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  )
}

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
  light = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <p
          className={`text-xs font-semibold tracking-widest uppercase mb-3 ${
            light ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          } ${light ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
