import { ReactNode, Dispatch, SetStateAction } from 'react'

export type currentPageType =
  | 'INTRODUCTION'
  | 'CONTACT'
  | 'SERVICES'
  | 'PROJECTS'
  | 'CAREER'
  | 'SKILLS'

export type PageContextProps = {
  currentPage: currentPageType
  setCurrentPage: Dispatch<SetStateAction<currentPageType>>
}

export type PageContextProviderProps = {
  children: ReactNode
}
