import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const i18nProject = i18n.createInstance();
i18nProject
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: _IS_DEV_ || false,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18nProject;
