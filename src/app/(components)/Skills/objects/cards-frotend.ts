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
export const CardsFrotend: ICards[] = [
  {
    id: 1,
    Icon: FaHtml5,
    stack: 'HTML',
  },
  {
    id: 2,
    Icon: FaCss3Alt,
    stack: 'CSS',
  },
  {
    id: 3,
    Icon: FaJs,
    stack: 'JavaScript',
  },
  {
    id: 4,
    Icon: SiTypescript,
    stack: 'TypeScript',
  },
  {
    id: 5,
    Icon: FaReact,
    stack: 'ReactJS',
  },
  {
    id: 6,
    Icon: TbBrandNextjs,
    stack: 'NextJS',
  },
  {
    id: 7,
    Icon: TbBrandReactNative,
    stack: 'React Native',
  },
  {
    id: 8,
    Icon: SiRedux,
    stack: 'Redux',
  },
  {
    id: 9,
    Icon: SiMui,
    stack: 'Material-UI',
  },
  {
    id: 10,
    Icon: SiStyledcomponents,
    stack: 'Styled-components',
  },
  {
    id: 11,
    Icon: FaBootstrap,
    stack: 'Bootstrap',
  },
  {
    id: 12,
    Icon: SiAntdesign,
    stack: 'Ant-Design',
  },
]
