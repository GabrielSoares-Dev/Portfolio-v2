import { ButtonProps } from './types'
import { transformVariant } from './functions/transform-variants'

export default function Button({
  label,
  variant = 'primary',
  children,
  type = 'button',

  ...rest
}: ButtonProps) {
  return (
    <div>
      <button type={type} className={transformVariant(variant)} {...rest}>
        {label}
      </button>
      {children}
    </div>
  )
}
