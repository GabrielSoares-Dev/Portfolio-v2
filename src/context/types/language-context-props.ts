import { ReactNode } from 'react'

export type Language = 'PT-BR' | 'EN'

export type LanguageContextProps = {
  currentLanguage: Language
  handleLanguage: (language: Language) => void
}

export type LanguageContextProviderProps = {
  children: ReactNode
}
