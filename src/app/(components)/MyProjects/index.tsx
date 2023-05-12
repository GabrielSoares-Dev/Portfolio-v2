'use client'
import { Content } from '@app/(components)/MyProjects/components'
import { useProjects } from './hooks'
import { checkIsTheme } from '@/functions'

export default function MyProjects() {
  const { theme } = useProjects()
  return (
    <section
      id="projects"
      className={`py-24 relative transition duration-500 ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      } `}
    >
      <Content />
    </section>
  )
}
