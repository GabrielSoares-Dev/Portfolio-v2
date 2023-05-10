import { variant } from '@/components/Button/types'
import type { Theme } from '@/context/types'
import { checkIsTheme } from '@/functions'
export const transformVariant = (variant: variant, theme: Theme) => {
  switch (variant) {
    case 'primary':
      return checkIsTheme(theme, 'DARK')
        ? 'btn-primary-dark'
        : 'btn-primary-white'
    case 'secondary':
      return checkIsTheme(theme, 'DARK')
        ? 'btn-secondary-dark'
        : 'btn-secondary-white'
  }
}
