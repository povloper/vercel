// hooks/useTranslations.ts
"use client";
import { useParams } from "next/navigation";

export function useTranslations(project: string) {
    const params = useParams();
    const locale = params.locale as string;
    
    let translations;
    try {
        translations = require(`@/app/${project}/[locale]/locales/${locale}.json`);
    } catch (error) {
        console.error(`No s'han trobat les traduccions per ${locale}`);
        translations = require(`@/app/${project}/[locale]/locales/ca.json`);
    }
    
    const t = (key: string) => {
        return translations[key] || key;
    };
    
    return { t, locale };
}