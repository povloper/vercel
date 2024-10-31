// src/app/test2/[locale]/layout.tsx
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'

const locales = ['ca', 'es', 'en']

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const translations = await import(`./locales/${params.locale}.json`)

  return {
    title: translations.default.siteTitle || 'Test2 Site',
    description: translations.default.siteDescription || 'Test2 Site Description',
  }
}

export default function Test2Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(params.locale)) {
    redirect('/test2/ca')
  }

  return (
    <div className="test2-layout">
      <header>
        {/* Header específic per Test2 */}
        <nav>
        <LanguageSwitcher 
            currentLocale={params.locale} 
            locales={locales} 
          />
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer específic per Test2 */}
      </footer>
    </div>
  )
}
