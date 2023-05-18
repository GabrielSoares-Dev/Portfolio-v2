import { CardProjectProps } from '@app/(components)/MyProjects/types'
import type { Language } from '@/context/types'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'

type CardProjectObject = CardProjectProps & {
  id: number
  stack: 'LARAVEL' | 'NODEJS'
}
export const projects = (currentLanguage: Language): CardProjectObject[] => [
  {
    id: 1,
    title: 'BestJobs',
    description: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.projects.cardBestJobs.description
      : en.projects.cardBestJobs.description,
    image: '/images/best-jobs.jpeg',
    stack: 'NODEJS',
    url: 'https://github.com/GabrielSoares-Dev/BestJobs',
  },
  {
    id: 2,
    title: 'Crud Tasks',
    description: checkIsLanguage(currentLanguage, 'PT-BR')
      ? ptBr.projects.cardCrudTasks.description
      : en.projects.cardCrudTasks.description,
    image: '/images/best-jobs.jpeg',
    stack: 'LARAVEL',
    url: 'https://github.com/GabrielSoares-Dev/Crud-Tasks',
  },
]
