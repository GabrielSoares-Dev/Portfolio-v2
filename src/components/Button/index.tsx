import { ButtonProps } from './types'
import { transformVariant } from './functions/transform-variants'
import { useTheme } from '@/hooks'

export default function Button({
  label,
  variant = 'primary',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const { theme } = useTheme()
  return (
    <div>
      <button
        type={type}
        className={transformVariant(variant, theme)}
        {...rest}
      >
        {label}
      </button>
      {children}
    </div>
  )
}
