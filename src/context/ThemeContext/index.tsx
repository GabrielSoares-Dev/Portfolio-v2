'use client'
import { createContext, useEffect, useState } from 'react'
import type {
  ThemeContextProps,
  ThemeContextProviderProps,
  Theme,
} from '@context/types'
import { useLocalStorage } from '@/hooks'
import { useScrollStore } from '@/store/modules'
import { checkIsTheme } from '@/functions'

export const ThemeContext = createContext<ThemeContextProps>({
  handleTheme: () => {},
  theme: 'DARK',
})

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { getItem, setItem } = useLocalStorage()
  const { setScrollColor } = useScrollStore()
  const [theme, setTheme] = useState<Theme>('DARK')

  useEffect(() => {
    const storedTheme = getItem('theme')
    if (storedTheme) {
      setScrollColor(
        checkIsTheme(storedTheme as Theme, 'DARK')
          ? 'bg-primary-dark'
          : 'bg-primary-white',
      )
      setTheme(storedTheme as Theme)
    }
  }, [])

  const handleTheme = (theme: Theme) => {
    setScrollColor(
      checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white',
    )
    setItem('theme', theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
