import type { MessagesProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function Messages({ children }: MessagesProps) {
  return <div className="mb-5 w-72">{children}</div>
}
