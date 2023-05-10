import { checkIsTheme } from '@/functions'
import { useTheme } from '@/hooks'
import { NavLinkProps } from './types'

export function NavLinkMobile({
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  const { theme } = useTheme()
  return (
    <div>
      <a
        className={`nav-link-mobile ${
          isActive ? 'nav-link-mobile-active' : ''
        } ${checkIsTheme(theme, 'DARK') ? 'text-white' : 'text-black'}  `}
        {...rest}
      >
        {label}
      </a>
      {children}
    </div>
  )
}
