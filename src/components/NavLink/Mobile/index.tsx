import { NavLinkProps } from './types'

export function NavLinkMobile({
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  return (
    <div>
      <a
        className={`nav-link-mobile  ${
          isActive ? 'nav-link-mobile-active' : ''
        }`}
        {...rest}
      >
        {label}
      </a>
      {children}
    </div>
  )
}
