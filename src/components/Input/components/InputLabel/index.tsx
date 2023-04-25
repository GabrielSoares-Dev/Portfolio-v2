import { InputLabelProps } from '@/components/types'

export function InputLabel({ children, hasError, id = 'id' }: InputLabelProps) {
  return (
    <label htmlFor={id} className={`label-input ${hasError && 'text-red-600'}`}>
      {children}
    </label>
  )
}
