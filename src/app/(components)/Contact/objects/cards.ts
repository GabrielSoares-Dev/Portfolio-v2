import { CardContactProps } from '../components/CardContact/types'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsLinkedin, BsFillShareFill } from 'react-icons/bs'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa'

interface ICards extends CardContactProps {
  id: number
}
const Cards: ICards[] = [
  {
    id: 1,
    title: 'Telefone',
    text: '+55 11 94242-1224',
    Icon: FiPhoneCall,
  },
  {
    id: 2,
    title: 'Email',
    text: 'gsmaciel@outlook.com.br',
    Icon: HiOutlineMailOpen,
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
