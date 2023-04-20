type animation = {
  isInView: boolean
}

export type CardProjectProps = {
  title: string
  description: string
  image: string
  url: string
  animation?: animation
}
