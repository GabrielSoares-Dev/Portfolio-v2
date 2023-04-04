type BadgeProps = {
  content: string
}

export default function Badge({ content }: BadgeProps) {
  return <span className="badge">{content}</span>
}
