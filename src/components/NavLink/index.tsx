import Link from 'next/link'
import { NavLinkProps } from './types'

export default function NavLink({
  href,
  label,
  children,
  isActive,
  ...rest
}: NavLinkProps) {
  return (
    <div>
      <Link
        className={`nav-link  ${isActive && 'nav-link-active'}`}
        href={href}
        {...rest}
      >
        {label}
      </Link>
      {children}
    </div>
  )
}
