'use client'
import { createContext, useState, useEffect } from 'react'
import type {
  LanguageContextProps,
  LanguageContextProviderProps,
  Language,
} from '@context/types'
import { useLocalStorage } from '@/hooks'
import { formatLanguageDefault } from './functions'
export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'PT-BR',
  handleLanguage: () => {},
})

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const { getItem, setItem } = useLocalStorage()
  const [currentLanguage, setCurrentLanguage] = useState<Language>('PT-BR')
  useEffect(() => {
    const storedLanguage = getItem('language')
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage as Language)
    }
    if (!storedLanguage) {
      setCurrentLanguage(formatLanguageDefault(navigator.language))
    }
  }, [])
  const handleLanguage = (language: Language) => {
    setCurrentLanguage(language)
    setItem('language', language)
  }
  return (
    <LanguageContext.Provider value={{ currentLanguage, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
