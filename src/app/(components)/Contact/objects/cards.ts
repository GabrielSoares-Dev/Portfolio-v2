import { HiMail } from 'react-icons/hi'
import {
  BsLinkedin,
  BsFillShareFill,
  BsFillTelephoneFill,
} from 'react-icons/bs'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'
import type { Language } from '@/context/types'

const Cards = (currentLanguage: Language) => [
  {
    id: 1,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.contact.cardPhoneNumber.title
      : en.contact.cardPhoneNumber.title,
    text: '+55 11 94242-1224',
    Icon: BsFillTelephoneFill,
  },
  {
    id: 2,
    title: 'Email',
    text: 'gsmaciel@outlook.com.br',
    Icon: HiMail,
  },
  {
    id: 3,
    title: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.contact.cardSocialMedia.title
      : en.contact.cardSocialMedia.title,
    text: '',
    Icon: BsFillShareFill,
    socials: [
      {
        id: 1,
        link: 'https://www.linkedin.com/in/gabriel-soares-maciel-3690a41b4/',
        Icon: BsLinkedin,
      },
      {
        id: 2,
        link: 'https://github.com/GabrielSoares-Dev',
        Icon: FaGithub,
      },
      {
        id: 3,
        link: 'https://wa.me/5511942421224',
        Icon: FaWhatsapp,
      },
    ],
  },
]

export default Cards
