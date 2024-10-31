// src/app/test/[locale]/layout.tsx
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'

// Definim els idiomes disponibles
const locales = ['ca', 'es', 'en']

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  'use server'
  // Carrega les traduccions per metadata
  const translations = await import(`./locales/${params.locale}.json`)

  return {
    title: translations.default.siteTitle || 'Test Site',
    description: translations.default.siteDescription || 'Test Site Description',
  }
}

export default function TestLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validem que l'idioma sigui correcte
  if (!locales.includes(params.locale)) {
    redirect('/test/ca') // Redirigim a l'idioma per defecte
  }

  return (
    <div className="test-layout">
      <header>
        {/* Aquí pots afegir el teu header específic per Test */}
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
        {/* Footer específic per Test */}
      </footer>
    </div>
  )
}