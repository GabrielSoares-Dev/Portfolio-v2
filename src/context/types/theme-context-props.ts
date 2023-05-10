import { Dispatch, ReactNode, SetStateAction } from 'react'
export type Theme = 'DARK' | 'WHITE'

export type ThemeContextProps = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export type ThemeContextProviderProps = {
  children: ReactNode
}
