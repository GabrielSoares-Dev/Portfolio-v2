import { create } from 'zustand'
import { FilterState } from '@/store/types'

export const useFiltersStore = create<FilterState>((set) => ({
  filter: 'ALL',
  setFilter: (param) => set(() => ({ filter: param })),
}))
