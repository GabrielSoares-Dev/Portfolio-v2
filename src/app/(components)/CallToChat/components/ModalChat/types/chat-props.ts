import { ButtonHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'

type Status = 'ONLINE' | 'OFFLINE'
type VariantBubble = 'CLIENT' | 'RESPONSE'
export type ChatProps = {
  children: ReactNode
}

export type MessagesProps = {
  children: ReactNode
}
export type HeaderChatProps = {
  children: ReactNode
}

export type BubbleChatProps = {
  children?: ReactNode
  message: string
  date: string
  who: string
  variantBubble?: VariantBubble
}
export type HeaderChatAvatarProps = {
  avatar: string
}
export type HeaderChatInformationsMeProps = {
  name: string
  status: Status
  children?: ReactNode
}

export type ChatSendMessageProps = {
  children?: ReactNode
}

export type SendButtonChatProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children?: ReactNode
}

export type InputMessageChatProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {}
