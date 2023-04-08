import { CardSkillProps } from '../components/Card/types'
import { FaPhp, FaLaravel, FaNodeJs, FaDocker } from 'react-icons/fa'
import {
  SiLumen,
  SiExpress,
  SiAdonisjs,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
} from 'react-icons/si'
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
  {
    id: 4,
    Icon: FaNodeJs,
  },
  {
    id: 5,
    Icon: SiExpress,
  },
  {
    id: 6,
    Icon: SiAdonisjs,
  },
  {
    id: 7,
    Icon: SiNestjs,
  },
  {
    id: 8,
    Icon: SiPostgresql,
  },
  {
    id: 9,
    Icon: SiMongodb,
  },
  {
    id: 10,
    Icon: SiMysql,
  },
  {
    id: 11,
    Icon: SiPrisma,
  },
  {
    id: 12,
    Icon: FaDocker,
  },
]

export default CardsBackend
