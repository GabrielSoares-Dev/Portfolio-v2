export const cardAnimation = (isInView: boolean) => ({
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: isInView ? 0 : 100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 0.5,
    delay: 0.3,
  },
})
