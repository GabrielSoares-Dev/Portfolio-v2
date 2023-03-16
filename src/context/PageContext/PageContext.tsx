'use client'
import { createContext, useState } from 'react'
import type {
  PageContextProps,
  currentPageType,
  PageContextProviderProps,
} from './types'

export const PageContext = createContext<PageContextProps>({
  currentPage: 'INTRODUCTION',
  setCurrentPage: () => {},
})

export default function PageContextProvider({
  children,
}: PageContextProviderProps) {
  const [currentPage, setCurrentPage] =
    useState<currentPageType>('INTRODUCTION')

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  )
}
