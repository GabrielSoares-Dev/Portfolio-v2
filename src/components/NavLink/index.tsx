'use client'
import Link from 'next/link'
import { NavLinkProps } from './types'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  label,
  children,
  ...rest
}: NavLinkProps) {
  const pathName = usePathname()
  const match = pathName === href

  return (
    <div>
      <Link
        className={`nav-link ${match && 'nav-link-active'}`}
        href={href}
        {...rest}
      >
        {label}
      </Link>
      {children}
    </div>
  )
}
