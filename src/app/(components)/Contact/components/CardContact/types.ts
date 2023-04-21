import { IconType } from 'react-icons'
import { AnimationControls } from 'framer-motion'

type animation = {
  controls: AnimationControls
}
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
  animation?: animation
}
