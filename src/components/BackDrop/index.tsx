import { BackDropProps } from '@/components/types'

export function BackDrop({ children, open }: BackDropProps) {
  return open ? <div className="backdrop">{children}</div> : null
}
