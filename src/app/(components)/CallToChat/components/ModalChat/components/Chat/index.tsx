import { ChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function Chat({ children }: ChatProps) {
  return (
    <div className="container w-[350px] md:w-96  py-8 px-8 mx-auto">
      <div className="flex justify-center flex-wrap -mx-4">
        <div className="w-full  px-4">{children}</div>
      </div>
    </div>
  )
}
