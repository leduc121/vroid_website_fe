import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'en' | 'ja' | 'vi';

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: (l: Language) => l
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ja' || saved === 'vi') {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}

export function IntlText({ en, ja, vi }: { en: React.ReactNode; ja?: React.ReactNode; vi?: React.ReactNode }) {
  const { lang } = useI18n();
  const content = lang === 'ja' ? (ja ?? en) : lang === 'vi' ? (vi ?? en) : en;
  return <>{content}</>;
}
