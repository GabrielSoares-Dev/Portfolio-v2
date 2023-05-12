import { useTheme } from '@/hooks'
import { checkIsTheme } from '@/functions'

type BadgeProps = {
  content: string
}

export default function Badge({ content }: BadgeProps) {
  const { theme } = useTheme()
  return (
    <span
      className={`badge transition ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      {content}
    </span>
  )
}
