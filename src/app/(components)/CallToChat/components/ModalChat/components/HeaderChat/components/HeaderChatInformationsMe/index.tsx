import type { HeaderChatInformationsMeProps } from '@app/(components)/CallToChat/components/ModalChat/types'

export function HeaderChatInformationsMe({
  name = '',
  status = 'OFFLINE',
  children,
}: HeaderChatInformationsMeProps) {
  return (
    <div>
      <h5 className="text-gray-50 font-bold">{name}</h5>
      <span
        className={`text-xs ${
          status === 'ONLINE' ? 'text-green-500' : 'text-red-700'
        }`}
      >
        {status === 'ONLINE' ? 'Online' : 'Offline'}
      </span>
      {children}
    </div>
  )
}
