import { ReactNode } from 'react'

export type ModalProps = {
  children: ReactNode
  open: boolean
  onClose: () => void
}
