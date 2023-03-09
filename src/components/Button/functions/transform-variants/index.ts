import { variant } from '@/components/Button/types'
export const transformVariant = (variant: variant) => {
  switch (variant) {
    case 'primary':
      return 'btn-primary'
    case 'secondary':
      return 'btn-secondary'
  }
}
