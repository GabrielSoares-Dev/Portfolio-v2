'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context'

export function useTheme() {
  const theme = useContext(ThemeContext)

  return theme
}
