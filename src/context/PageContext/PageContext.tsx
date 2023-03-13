'use client'
import { createContext, ReactNode, useState } from 'react'
import type { PageContextProps, currentPageType } from './types'

export const PageContext = createContext<PageContextProps>({
  currentPage: 'HOME',
  setCurrentPage: () => {},
})

export default function PageContextProvider(children: ReactNode) {
  const [currentPage, setCurrentPage] = useState<currentPageType>('HOME')

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  )
}
