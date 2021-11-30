import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';

import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import ru from './translations/ru';

i18n.use(Cache)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
        },
        debug: false,
        fallbackLng: ['ru', 'en'],
        load: 'languageOnly',
        allLanguages: ['ru', 'en'],
        whitelist: ['ru', 'en'],
        nonExplicitWhitelist: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: process && !process.release,
            bindI18n: false,
            bindStore: false,
            nsMode: 'default',
        },
        cache: {
            enabled: true,
            expirationTime: 3 * 24 * 60 * 60 * 1000, // 3 days
        },
    });

export default i18n;
