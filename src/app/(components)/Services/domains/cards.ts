import { CardServicesProps } from '../components/Card/types'
import { FaServer, FaMobileAlt, FaChalkboard } from 'react-icons/fa'

interface ICards extends CardServicesProps {
  id: number
}
const Cards: ICards[] = [
  {
    id: 1,
    title: 'APIS',
    text: 'Produzo apis testáveis,extremamente performáticas, utilizando das melhores práticas  sempre buscando a satisfação do cliente.',
    Icon: FaServer,
  },
  {
    id: 2,
    title: 'WEBSITES',
    text: 'Produzo Landing Pages para a divulgação do seu comércio,sistemas para automatizar  todos os processos da sua empresa.',
    Icon: FaChalkboard,
  },
  {
    id: 3,
    title: 'APLICAÇÕES MOBILE',
    text: 'Produzo quaisquer aplicações para restaurantes,e-commerce e muito mais...',
    Icon: FaMobileAlt,
  },
]

export default Cards
