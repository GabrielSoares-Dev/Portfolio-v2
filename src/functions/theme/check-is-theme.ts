import type { Theme } from '@/context/types'
export const checkIsTheme = (current: Theme, expected: Theme): boolean => {
  return current === expected
}
