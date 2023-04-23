import { AnimationControls } from 'framer-motion'
import { IconType } from 'react-icons'

type animations = {
  controls: AnimationControls
}
export type CardSkillProps = {
  Icon: IconType
  stack: string
  animations?: animations
}
