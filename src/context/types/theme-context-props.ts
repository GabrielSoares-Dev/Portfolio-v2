import { ReactNode } from 'react'
export type Theme = 'DARK' | 'WHITE'

export type ThemeContextProps = {
  theme: Theme
  handleTheme: (theme: Theme) => void
}

export type ThemeContextProviderProps = {
  children: ReactNode
}
