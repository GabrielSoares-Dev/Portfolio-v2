import { IconType } from 'react-icons'

type Socials = {
  id: number
  Icon: IconType
  link: string
}
export type CardContactProps = {
  title: string
  text: string
  Icon: IconType
  socials?: Socials[]
}
