import { CardContactProps } from '../components/CardContact/types'
import { HiMail } from 'react-icons/hi'
import {
  BsLinkedin,
  BsFillShareFill,
  BsFillTelephoneFill,
} from 'react-icons/bs'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'

interface ICards extends CardContactProps {
  id: number
}
const Cards: ICards[] = [
  {
    id: 1,
    title: 'Telefone',
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
    title: 'Redes Sociais',
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
