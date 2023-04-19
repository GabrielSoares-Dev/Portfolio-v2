export const buttonAnimation = (isInView: boolean) => ({
  animate: {
    y: isInView ? 0 : 100,
    opacity: isInView ? 1 : 0,
  },
  transition: {
    duration: 0.9,
    delay: 1,
  },
})
