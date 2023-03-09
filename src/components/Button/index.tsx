import { ButtonProps } from './types'
import { transformVariant } from './functions/transform-variants'

export default function Button({
  label,
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <div>
      <button className={transformVariant(variant)} {...rest}>
        {label}
      </button>
      {children}
    </div>
  )
}
