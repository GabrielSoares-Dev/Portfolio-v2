import type { Language } from '@/context/types'
export const checkIsLanguage = (
  current: Language,
  expected: Language,
): boolean => {
  return current === expected
}
