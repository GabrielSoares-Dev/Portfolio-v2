import { CardProjectProps } from '@app/(components)/MyProjects/types'

type CardProjectObject = CardProjectProps & {
  id: number
  stack: 'LARAVEL' | 'NODEJS'
}
export const projects: CardProjectObject[] = [
  {
    id: 1,
    title: 'BestJobs',
    description:
      'BestJob é uma plataforma online que conecta freelancers com clientes em todo o mundo, oferecendo uma ampla variedade de oportunidades de trabalho em diversas áreas. Com ferramentas fáceis de usar, os usuários podem gerenciar projetos, enviar propostas e colaborar diretamente com clientes.',
    image: '/images/best-jobs.jpeg',
    stack: 'NODEJS',
  },
  {
    id: 2,
    title: 'Crud Tasks',
    description:
      'Este é um projeto de CRUD de tarefas criado com Lumen (PHP) para aprender deploy com Docker. Permite criar, ler, atualizar e deletar tarefas e marcar como concluídas ou não. Com Docker, a aplicação é facilmente instalada e executada em diferentes ambientes, tornando o deploy mais eficiente e rápido.',
    image: '/images/best-jobs.jpeg',
    stack: 'LARAVEL',
  },
]
