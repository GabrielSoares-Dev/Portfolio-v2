import { CardServicesProps } from '../components/Card/types'
import { FaCode, FaGlobe, FaClipboardList } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { IoIosPhonePortrait } from 'react-icons/io'
import { BsFileEarmarkText } from 'react-icons/bs'

interface ICards extends CardServicesProps {
  id: number
}
const Cards: ICards[] = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    text: 'Sua presença online começa aqui - criamos aplicativos web personalizados para levar sua empresa para o próximo nível.',
    Icon: FaGlobe,
  },
  {
    id: 2,
    title: 'Desenvolvimento de APIs',
    text: 'Conecte seus aplicativos, sistemas e dispositivos com facilidade e eficiência, com meu serviço de desenvolvimento de API sob medida.',
    Icon: AiOutlineApi,
  },
  {
    id: 3,
    title: 'Desenvolvimento de Apps Móveis',
    text: 'Transforme suas ideias em realidade e alcance novos públicos com meu serviço de desenvolvimento de aplicativos móveis intuitivos e poderosos.',
    Icon: IoIosPhonePortrait,
  },
  {
    id: 4,
    title: 'Software Personalizado',
    text: 'Não importa o tamanho ou a complexidade do seu desafio de negócios - estou aqui para oferecer soluções personalizadas de software que atendem às suas necessidades exclusivas.',
    Icon: FaCode,
  },
  {
    id: 5,
    title: 'Sites Institucionais',
    text: 'Eu projeto sites institucionais responsivos e elegantes que destacam a identidade única de sua marca, fornecendo a seus visitantes uma experiência intuitiva e cativante que os leva a converter em clientes leais.',
    Icon: BsFileEarmarkText,
  },
  {
    id: 6,
    title: 'Landing Pages',
    text: 'Ofereço soluções personalizadas de Landing Pages para aumentar a conversão de seus visitantes em clientes, construindo uma experiência online intuitiva e impactante que mantém seu público engajado e leva seu negócio para o próximo nível.',
    Icon: FaClipboardList,
  },
]

export default Cards
