import { ChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function Chat({ children }: ChatProps) {
  return (
    <div className="container w-96  py-8 px-8 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full  px-4">{children}</div>
      </div>
    </div>
  )
}
