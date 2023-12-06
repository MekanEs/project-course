import i18nForTest from 'i18next';
import { initReactI18next } from 'react-i18next';
const i18nForTesting = i18nForTest.createInstance();
i18nForTesting.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',

    debug: false,

    resources: { en: { translations: {} } },
});

export default i18nForTesting;
