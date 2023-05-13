'use client'
import { createContext, useEffect, useState } from 'react'
import type {
  ThemeContextProps,
  ThemeContextProviderProps,
  Theme,
} from '@context/types'
import { useLocalStorage } from '@/hooks'

export const ThemeContext = createContext<ThemeContextProps>({
  handleTheme: () => {},
  theme: 'DARK',
})

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { getItem, setItem } = useLocalStorage()
  const [theme, setTheme] = useState<Theme>('DARK')

  useEffect(() => {
    const storedTheme = getItem('theme')
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme as Theme)
    }
  }, [])

  const handleTheme = (theme: Theme) => {
    setItem('theme', theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
