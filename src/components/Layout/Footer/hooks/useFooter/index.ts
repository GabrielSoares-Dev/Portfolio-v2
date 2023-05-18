import { useLanguage, useTheme } from '@/hooks'

export function useFooter() {
  const { theme } = useTheme()
  const { currentLanguage } = useLanguage()

  return { theme, currentLanguage }
}
