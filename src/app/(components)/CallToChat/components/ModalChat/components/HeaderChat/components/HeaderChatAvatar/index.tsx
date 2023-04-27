import Image from 'next/image'
import type { HeaderChatAvatarProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function HeaderChatAvatar({ avatar }: HeaderChatAvatarProps) {
  return (
    <Image
      width={40}
      height={50}
      className="w-12 h-12 mr-4 rounded-full"
      src={avatar}
      alt="avatar"
    />
  )
}
