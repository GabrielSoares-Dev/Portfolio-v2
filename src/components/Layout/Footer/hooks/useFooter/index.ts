import { useTheme } from '@/hooks'

export function useFooter() {
  const { theme } = useTheme()

  return { theme }
}
