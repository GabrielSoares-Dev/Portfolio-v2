type where = {
  nameCompany: string
  district: string
  city: string
  state: string
}

type animation = {
  isInView: boolean
}
export type CardExperienceProps = {
  position: string
  where: where
  dateInPosition: string
  animation?: animation
}
