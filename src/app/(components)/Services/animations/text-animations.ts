export const badgeAnimation = (isInView: boolean) => ({
  animate: {
    y: isInView ? 0 : -100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 1,
    delay: 1,
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
export const descriptionAnimation = (isInView: boolean) => ({
  animate: {
    y: isInView ? 0 : -100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 1,
    delay: 0.3,
  },
})
