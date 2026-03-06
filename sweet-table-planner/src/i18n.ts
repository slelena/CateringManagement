import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './locales/en/common.json'
import enDashboard from './locales/en/dashboard.json'
import enEvents from './locales/en/events.json'
import enBuilder from './locales/en/builder.json'
import enShopping from './locales/en/shopping.json'
import enRecipes from './locales/en/recipes.json'
import enSettings from './locales/en/settings.json'

import srCommon from './locales/sr/common.json'
import srDashboard from './locales/sr/dashboard.json'
import srEvents from './locales/sr/events.json'
import srBuilder from './locales/sr/builder.json'
import srShopping from './locales/sr/shopping.json'
import srRecipes from './locales/sr/recipes.json'
import srSettings from './locales/sr/settings.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        dashboard: enDashboard,
        events: enEvents,
        builder: enBuilder,
        shopping: enShopping,
        recipes: enRecipes,
        settings: enSettings,
      },
      sr: {
        common: srCommon,
        dashboard: srDashboard,
        events: srEvents,
        builder: srBuilder,
        shopping: srShopping,
        recipes: srRecipes,
        settings: srSettings,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
