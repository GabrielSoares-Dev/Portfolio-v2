import { AnimationControls } from 'framer-motion'
type where = {
  nameCompany: string
  district: string
  city: string
  state: string
}

type animation = {
  controls: AnimationControls
}
export type CardExperienceProps = {
  position: string
  where: where
  dateInPosition: string
  animation?: animation
}
