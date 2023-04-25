import { InputProps } from '@/components/types'
import { FieldValues } from 'react-hook-form'

export function Input<TFormValues extends FieldValues>({
  hasError = false,
  children,
  name,
  register,
  ...rest
}: InputProps<TFormValues>) {
  return (
    <div className={`input-wrapper ${hasError && 'input-has-error'}`}>
      {children}
      <input {...register(name)} {...rest} className="input" />
    </div>
  )
}
