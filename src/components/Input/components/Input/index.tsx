import { InputProps } from '@/components/types'

export function Input({ label, isError, errorMessage, ...rest }: InputProps) {
  return (
    <div className="input-wrapper">
      <span className="label-input">{label}</span>
      <input {...rest} className="input" />
      {}
    </div>
  )
}
