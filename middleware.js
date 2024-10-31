// middleware.ts
import { NextResponse } from 'next/server';
import subdomains from './subdomains.json';

const i18nConfigs = {
  test: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en']
  },
  test2: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en']
  }
};

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");
  const pathname = url.pathname;

  // Extraiem el subdomini
  const subdomain = hostname.split('.')[0];

  // Comprovem si és un subdomini vàlid
  const subdomainData = subdomains.find(d => d.subdomain === subdomain);
  
  // Si no és un subdomini vàlid, redirigim a la pàgina principal o 404
  if (!subdomainData) {
    return NextResponse.next();
  }

  // Obtenim la configuració d'idiomes pel subdomini
  const i18nConfig = i18nConfigs[subdomain];

  // Si estem a la ruta arrel del subdomini, redirigim a l'idioma per defecte
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${i18nConfig.defaultLocale}`, req.url)
    );
  }

  // Comprovem si la ruta ja té un locale
  const pathnameHasLocale = i18nConfig.locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si no té locale, redirigim al locale per defecte
  if (!pathnameHasLocale) {
    return NextResponse.rewrite(
      new URL(`/${subdomain}/${i18nConfig.defaultLocale}${pathname}`, req.url)
    );
  }

  // Si ja té locale, mantenim la ruta amb el prefix del subdomini
  return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url));
}