import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/ru/translation.json';
import translationUA from './locales/ua/translation.json';

const resources = {
    ru: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ua',
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;