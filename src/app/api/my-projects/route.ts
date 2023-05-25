import { NextResponse } from 'next/server'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const filter = searchParams.get('filter')
  const language = searchParams.get('language')
  const isPtBr = language === 'PT-BR'
  const filterLanguageIsEmpty = language === null || language === ''

  if (filterLanguageIsEmpty) {
    const data = {
      statusCode: 400,
      message: 'Coloque o filtro de linguagem por favor',
    }
    return NextResponse.json(data, {
      status: data.statusCode,
    })
  }
  const hasFilter = filter !== null && filter !== '' && filter !== 'ALL'

  const projects = [
    {
      id: 1,
      title: 'BestJobs',
      description: isPtBr
        ? ptBr.projects.cardBestJobs.description
        : en.projects.cardBestJobs.description,
      image: '/images/best-jobs.jpeg',
      width: 500,
      height: 500,
      stack: 'NODEJS',
      url: 'https://github.com/GabrielSoares-Dev/BestJobs',
    },
    {
      id: 2,
      title: 'Crud Tasks',
      description: isPtBr
        ? ptBr.projects.cardCrudTasks.description
        : en.projects.cardCrudTasks.description,
      image: '/images/crud-tasks.jpeg',
      stack: 'LARAVEL',
      width: 600,
      height: 600,
      url: 'https://github.com/GabrielSoares-Dev/Crud-Tasks',
    },
  ]
  const projectFiltered = projects.filter(
    (value) => value.stack === filter?.toUpperCase(),
  )
  return NextResponse.json(hasFilter ? projectFiltered : projects)
}
