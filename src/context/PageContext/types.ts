import { ReactNode, Dispatch, SetStateAction } from 'react'

export type currentPageType = 'INTRODUCTION' | 'ABOUT' | 'CONTACT' | 'SERVICES'

export type PageContextProps = {
  currentPage: currentPageType
  setCurrentPage: Dispatch<SetStateAction<currentPageType>>
}

export type PageContextProviderProps = {
  children: ReactNode
}