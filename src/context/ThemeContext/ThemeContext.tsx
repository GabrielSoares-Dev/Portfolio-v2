'use client'
import { createContext, useEffect, useState } from 'react'
import type {
  ThemeContextProps,
  ThemeContextProviderProps,
  Theme,
} from '@context/types'
import { getCookie, setCookie } from 'cookies-next'

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {},
  theme: 'DARK',
})

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(getCookie('theme') as Theme)

  useEffect(() => {
    setCookie('theme', theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
