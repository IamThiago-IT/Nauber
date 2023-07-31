import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './translate/locales/pt.json';
import translationEN from './translate/locales/en.json';
import translationES from './translate/locales/es.json';
import translationAR from './translate/locales/ar.json';


i18n

  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      pt: {
        translation: translationPT,
      },
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      ar: {
        translation: translationAR,
      },
    }
  });

export default i18n;