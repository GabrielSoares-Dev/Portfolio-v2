import { AnimationControls } from 'framer-motion'
type animation = {
  controls: AnimationControls
}

export type CardProjectProps = {
  title: string
  description: string
  image: string
  url: string
  animation?: animation
}
