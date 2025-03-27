import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './languages'

i18n.use(initReactI18next).init({
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  supportedLngs: ['en-US', 'pt-BR'],
  resources,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})