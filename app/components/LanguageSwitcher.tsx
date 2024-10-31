// src/components/LanguageSwitcher.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  currentLocale: string
  locales: string[]
}

export default function LanguageSwitcher({ currentLocale, locales }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/')

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathnameWithoutLocale ? `/${pathnameWithoutLocale}` : ''}`}
          className={`px-3 py-1 rounded ${
            currentLocale === locale ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}