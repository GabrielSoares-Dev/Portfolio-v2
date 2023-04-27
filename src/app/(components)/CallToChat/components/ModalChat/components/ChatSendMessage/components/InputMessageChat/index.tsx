import type { InputMessageChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function InputMessageChat({ ...rest }: InputMessageChatProps) {
  return <textarea className="text-area-send-message-chat" {...rest}></textarea>
}
