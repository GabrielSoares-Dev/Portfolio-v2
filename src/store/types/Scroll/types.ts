type ScrollColor = 'bg-primary-dark' | 'bg-primary-white'

export type ScrollState = {
  scrollDisabled: boolean
  setScrollDisabled: (param: boolean) => void
  scrollColor: ScrollColor
  setScrollColor: (param: ScrollColor) => void
}
