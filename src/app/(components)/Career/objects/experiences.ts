import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'
import type { Language } from '@/context/types'

export const experiences = (currentLanguage: Language) => [
  {
    id: 1,
    position: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.cardLoginTecnologies.position
      : en.career.cardLoginTecnologies.position,
    dateInPosition: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.career.cardLoginTecnologies.date
      : en.career.cardLoginTecnologies.date,
    where: {
      city: 'Barueri',
      district: 'Alphaville',
      nameCompany: 'Control 361°',
      state: 'São Paulo',
    },
  },
]
