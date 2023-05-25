type Filter = 'ALL' | 'LARAVEL' | 'NODEJS'
type Language = 'PT-BR' | 'EN'
export type GetProjectServiceProps = {
  filter?: Filter
  language: Language
}
export type Projects = {
  id: number
  title: string
  description: string
  image: string
  stack: string
  url: string
  width: number
  height: number
}
