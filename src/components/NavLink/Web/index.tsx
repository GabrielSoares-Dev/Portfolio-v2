import type { NavLinkProps } from './types'
import { checkIsTheme } from '@/functions'
import { useTheme } from '@/hooks'

export function NavLinkWeb({
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  const { theme } = useTheme()
  return (
    <div>
      <a
        className={`nav-link-web transition duration-500 ${
          checkIsTheme(theme, 'DARK')
            ? 'text-secondary-dark'
            : 'text-secondary-white'
        }  ${isActive ? 'nav-link-web-active' : ''}`}
        {...rest}
      >
        {label}
      </a>
      {children}
    </div>
  )
}
