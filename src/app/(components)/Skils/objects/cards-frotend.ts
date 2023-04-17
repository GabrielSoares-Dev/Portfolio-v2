import { CardSkillProps } from '../components/Card/types'
import {
  SiRedux,
  SiTypescript,
  SiMui,
  SiStyledcomponents,
  SiAntdesign,
} from 'react-icons/si'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

interface ICards extends CardSkillProps {
  id: number
}
const CardsFrotend: ICards[] = [
  {
    id: 1,
    Icon: FaHtml5,
  },
  {
    id: 2,
    Icon: FaCss3Alt,
  },
  {
    id: 3,
    Icon: FaJs,
  },
  {
    id: 4,
    Icon: SiTypescript,
  },
  {
    id: 5,
    Icon: FaReact,
  },
  {
    id: 6,
    Icon: TbBrandNextjs,
  },
  {
    id: 7,
    Icon: TbBrandReactNative,
  },
  {
    id: 8,
    Icon: SiRedux,
  },
  {
    id: 9,
    Icon: SiMui,
  },
  {
    id: 10,
    Icon: SiStyledcomponents,
  },
  {
    id: 11,
    Icon: FaBootstrap,
  },
  {
    id: 12,
    Icon: SiAntdesign,
  },
]

export default CardsFrotend
