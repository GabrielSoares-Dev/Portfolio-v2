import { InputErrorProps } from '@/components/types'
export function InputError({ children }: InputErrorProps) {
  return <p className="input-error-message">{children}</p>
}
