import type { LinkHTMLAttributes, ReactNode } from 'react'
export interface NavLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
  label: string
  isActive: boolean
}
