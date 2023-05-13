import { create } from 'zustand'
import { ScrollState } from '@/store/types'

export const useScrollStore = create<ScrollState>((set) => ({
  scrollDisabled: false,
  setScrollDisabled: (param) => set(() => ({ scrollDisabled: param })),
  scrollColor: 'bg-primary-dark',
  setScrollColor: (param) => set(() => ({ scrollColor: param })),
}))
