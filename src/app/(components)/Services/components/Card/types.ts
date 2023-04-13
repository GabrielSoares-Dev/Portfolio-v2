import { IconType } from 'react-icons'

type animation = {
  isInView?: boolean
}
export type CardServicesProps = {
  title: string
  text: string
  Icon: IconType
  animation?: animation
}
