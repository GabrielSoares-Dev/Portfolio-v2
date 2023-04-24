import { InputHTMLAttributes } from 'react'
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  isError?: boolean
  errorMessage?: () => void
}
