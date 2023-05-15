import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import Skils from '@/app/(components)/Skills'
import Contact from '@/app/(components)/Contact'
import Career from '@/app/(components)/Career'
import MyProjects from '@/app/(components)/MyProjects'

export const metadata = {
  title: 'Gabriel | Dev Full Stack',
  icons: {
    icon: '/images/favicon.png',
  },
  description:
    'Gabriel Soares Maciel, desenvolvedor full-stack com 2 anos de experiência em projetos web e mobile. Meu portfólio apresenta uma seleção dos meus melhores trabalhos, que incluem desenvolvimento de aplicativos, websites, sistemas de gerenciamento de conteúdo e outras soluções personalizadas. Com habilidades em diversas linguagens de programação e ferramentas, estou preparado para oferecer soluções eficientes e de alta qualidade para atender às necessidades de seus projetos digitais. Confira meu portfólio e entre em contato para saber mais sobre como posso ajudá-lo a alcançar seus objetivos online.',
}

export default function Home() {
  return (
    <div>
      <Introduction />
      <Services />
      <MyProjects />
      <Skils />
      <Career />
      {/* <About /> */}
      <Contact />
    </div>
  )
}
