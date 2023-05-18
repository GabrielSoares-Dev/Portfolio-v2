import { create } from 'zustand'
import { ScrollState } from '@/store/types'

export const useScrollStore = create<ScrollState>((set) => ({
  scrollDisabled: false,
  scrollColor: 'bg-primary-dark',
  scrollToTop: false,
  setScrollDisabled: (param) => set(() => ({ scrollDisabled: param })),
  setScrollToTop: (param) => set(() => ({ scrollToTop: param })),
  setScrollColor: (param) => set(() => ({ scrollColor: param })),
}))
