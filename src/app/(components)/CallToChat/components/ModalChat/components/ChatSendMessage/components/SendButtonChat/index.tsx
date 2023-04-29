import Button from '@/components/Button'
import type { SendButtonChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function SendButtonChat({
  label = '',
  children,
  type = 'button',
  ...rest
}: SendButtonChatProps) {
  return (
    <div className=" flex flex-wrap items-center justify-between">
      <div className="w-64 md:w-72 xl:w-28 ">
        <Button type={type} label={label} {...rest} />
        {children}
      </div>
    </div>
  )
}
