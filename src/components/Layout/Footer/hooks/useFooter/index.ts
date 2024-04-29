import { useLanguage, useTheme } from '@/hooks'

export function useFooter() {
  const { theme } = useTheme()
  const { currentLanguage } = useLanguage()

  const now = new Date()

  const currentYear = now.getFullYear()

  return { theme, currentLanguage, currentYear }
}
