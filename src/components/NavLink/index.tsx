import { NavLinkProps } from './types'

export default function NavLink({
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  return (
    <div>
      <a className={`nav-link  ${isActive ? 'nav-link-active' : ''}`} {...rest}>
        {label}
      </a>
      {children}
    </div>
  )
}
