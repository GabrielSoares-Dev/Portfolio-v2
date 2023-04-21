import { IconType } from 'react-icons'
import { AnimationControls } from 'framer-motion'

type animation = {
  controls: AnimationControls
}
export type CardServicesProps = {
  title: string
  text: string
  Icon: IconType
  animation?: animation
}
