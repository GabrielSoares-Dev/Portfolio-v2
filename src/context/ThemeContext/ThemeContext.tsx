'use client'
import { createContext, useState } from 'react'
import type {
  ThemeContextProps,
  ThemeContextProviderProps,
  Theme,
} from '@context/types'

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {},
  theme: 'DARK',
})

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('DARK')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
