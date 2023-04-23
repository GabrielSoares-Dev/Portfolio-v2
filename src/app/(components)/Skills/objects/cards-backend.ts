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
export const CardsBackend: ICards[] = [
  {
    id: 1,
    Icon: FaPhp,
    stack: 'PHP',
  },
  {
    id: 2,
    Icon: FaLaravel,
    stack: 'Laravel',
  },
  {
    id: 3,
    Icon: SiLumen,
    stack: 'Lumen',
  },
  {
    id: 4,
    Icon: FaNodeJs,
    stack: 'NodeJS',
  },
  {
    id: 5,
    Icon: SiExpress,
    stack: 'ExpressJS',
  },
  {
    id: 6,
    Icon: SiAdonisjs,
    stack: 'AdonisJS',
  },
  {
    id: 7,
    Icon: SiNestjs,
    stack: 'NestJS',
  },
  {
    id: 8,
    Icon: SiPostgresql,
    stack: 'PostgreeSQL',
  },
  {
    id: 9,
    Icon: SiMongodb,
    stack: 'MongoDB',
  },
  {
    id: 10,
    Icon: SiMysql,
    stack: 'MySQL',
  },
  {
    id: 11,
    Icon: SiPrisma,
    stack: 'Prisma',
  },
  {
    id: 12,
    Icon: FaDocker,
    stack: 'Docker',
  },
]
