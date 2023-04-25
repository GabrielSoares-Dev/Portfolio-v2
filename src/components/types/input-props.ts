import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export type InputProps<TFormValues extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    hasError?: boolean
    name: Path<TFormValues>
    register: UseFormRegister<TFormValues>
  }

export type InputLabelProps = {
  children: ReactNode
  hasError?: boolean
  id?: string
}

export type InputErrorProps = {
  children: ReactNode
}
