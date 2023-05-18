type ScrollColor = 'bg-primary-dark' | 'bg-primary-white'

export type ScrollState = {
  scrollDisabled: boolean
  scrollColor: ScrollColor
  scrollToTop: boolean
  setScrollDisabled: (param: boolean) => void
  setScrollColor: (param: ScrollColor) => void
  setScrollToTop: (param: boolean) => void
}
