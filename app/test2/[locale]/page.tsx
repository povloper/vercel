"use client";

import { useTranslations } from "../../hooks/useTranslations";

export default function SubdomainHome() {
    const { t, locale } = useTranslations('test2');

    return (
      <div>
        <h1>{t('test')}</h1>
        <small>Current language: {locale}</small>
      </div>
    );
  }
  