import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'
import type { Language } from '@/context/types'

export const experiences = (currentLanguage: Language) => [
  {
    id: 1,
    position: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.stefanini.position
      : en.career.stefanini.position,
    dateInPosition: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.stefanini.date
      : en.career.stefanini.date,
    where: {
      city: 'Jaguariúna',
      district: 'Centro',
      nameCompany: 'Stefanini',
      state: 'São Paulo',
    },
  },
  {
    id: 2,
    position: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.login.position
      : en.career.login.position,
    dateInPosition: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.login.date
      : en.career.login.date,
    where: {
      city: 'Barueri',
      district: 'Alphaville',
      nameCompany: 'Control 361°',
      state: 'São Paulo',
    },
  },
]
