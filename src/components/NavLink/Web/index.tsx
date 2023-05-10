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
        className={`nav-link-web ${
          checkIsTheme(theme, 'DARK') ? 'text-white' : 'text-black'
        }  ${isActive ? 'nav-link-web-active' : ''}`}
        {...rest}
      >
        {label}
      </a>
      {children}
    </div>
  )
}
