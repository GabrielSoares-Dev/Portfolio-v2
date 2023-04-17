export const badgeAnimation = (isInView: boolean) => ({
  animate: {
    y: isInView ? 0 : -100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 1,
    delay: 0.9,
  },
})

export const titleAnimation = (isInView: boolean) => ({
  animate: {
    y: isInView ? 0 : -100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 1,
    delay: 0.6,
  },
})
