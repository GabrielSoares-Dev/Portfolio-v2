import { FaCode, FaGlobe, FaClipboardList } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { IoIosPhonePortrait } from 'react-icons/io'
import { BsFileEarmarkText } from 'react-icons/bs'
import type { Language } from '@/context/types'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'

const Cards = (currentLanguage: Language) => [
  {
    id: 1,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardWebDevelopment.title
      : en.services.cardWebDevelopment.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardWebDevelopment.description
      : en.services.cardWebDevelopment.description,
    Icon: FaGlobe,
  },
  {
    id: 2,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardApiDevelopment.title
      : en.services.cardApiDevelopment.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardApiDevelopment.description
      : en.services.cardApiDevelopment.description,
    Icon: AiOutlineApi,
  },
  {
    id: 3,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardMobileDevelopment.title
      : en.services.cardMobileDevelopment.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardMobileDevelopment.description
      : en.services.cardMobileDevelopment.description,
    Icon: IoIosPhonePortrait,
  },
  {
    id: 4,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardCustomSoftwareDevelopment.title
      : en.services.cardCustomSoftwareDevelopment.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardCustomSoftwareDevelopment.description
      : en.services.cardCustomSoftwareDevelopment.description,
    Icon: FaCode,
  },
  {
    id: 5,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardInstutionalWebSites.title
      : en.services.cardInstutionalWebSites.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardInstutionalWebSites.description
      : en.services.cardInstutionalWebSites.description,
    Icon: BsFileEarmarkText,
  },
  {
    id: 6,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardLandingPages.title
      : en.services.cardLandingPages.title,
    text: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.services.cardLandingPages.description
      : en.services.cardLandingPages.description,
    Icon: FaClipboardList,
  },
]

export default Cards
