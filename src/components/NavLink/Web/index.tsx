import { NavLinkProps } from './types'

export function NavLinkWeb({
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  return (
    <div>
      <a
        className={`nav-link-web  ${isActive ? 'nav-link-web-active' : ''}`}
        {...rest}
      >
        {label}
      </a>
      {children}
    </div>
  )
}
