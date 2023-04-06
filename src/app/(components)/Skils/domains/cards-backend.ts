import { CardSkillProps } from '../components/Card/types'
import { FaPhp, FaLaravel } from 'react-icons/fa'
import { SiLumen } from 'react-icons/si'
interface ICards extends CardSkillProps {
  id: number
}
const CardsBackend: ICards[] = [
  {
    id: 1,
    Icon: FaPhp,
  },
  {
    id: 2,
    Icon: FaLaravel,
  },
  {
    id: 3,
    Icon: SiLumen,
  },
]

export default CardsBackend
