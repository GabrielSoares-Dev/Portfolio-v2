import { useTheme } from '@/hooks'
import { checkIsTheme } from '@/functions'

type BadgeProps = {
  content: string
}

export default function Badge({ content }: BadgeProps) {
  const { theme } = useTheme()
  return (
    <span
      className={`badge ${
        checkIsTheme(theme, 'DARK') ? 'bg-black' : 'bg-white'
      }`}
    >
      {content}
    </span>
  )
}
