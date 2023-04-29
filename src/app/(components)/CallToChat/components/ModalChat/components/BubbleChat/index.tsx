import { BubbleChatProps } from '@app/(components)/CallToChat/components/ModalChat/types'
export function BubbleChat({
  date = '',
  message = '',
  who = '',
  variantBubble = 'CLIENT',
  children,
}: BubbleChatProps) {
  return (
    <div className="mb-6 w-64 md:w-full  ml-auto">
      <div
        className={`${
          variantBubble === 'CLIENT' ? 'bubble-client' : 'bubble-response'
        }`}
      >
        <p className="text-xs text-white leading-normal font-medium">
          {message}
        </p>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold text-gray-400 mr-3">{date}</span>
        <span className="text-xs text-gray-50 font-semibold">{who}</span>
      </div>
      {children}
    </div>
  )
}
