import { Dispatch, SetStateAction } from 'react'
export type currentPageType = 'HOME' | 'ABOUT' | 'CONTACT' | 'SERVICES'

export type PageContextProps = {
  currentPage: currentPageType
  setCurrentPage: Dispatch<SetStateAction<currentPageType>>
}
