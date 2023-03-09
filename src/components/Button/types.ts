import { ButtonHTMLAttributes } from 'react'

export type variant = 'primary' | 'secondary'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: variant
}
