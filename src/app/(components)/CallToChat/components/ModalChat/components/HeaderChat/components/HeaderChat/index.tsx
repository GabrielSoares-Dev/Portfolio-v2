import type { HeaderChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function HeaderChat({ children }: HeaderChatProps) {
  return (
    <div className="p-6 mb-8 bg-black border-2 w-72 border-primary rounded-xl">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-full sm:w-auto  sm:mb-0 justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
