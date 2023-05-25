import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import Skils from '@/app/(components)/Skills'
import Contact from '@/app/(components)/Contact'
import Career from '@/app/(components)/Career'
import MyProjects from '@/app/(components)/MyProjects'
import ptBr from '@public/locales/pt/home.json'

export const metadata = {
  title: 'Gabriel | Dev Full Stack',
  icons: {
    icon: '/images/favicon.png',
  },
  description: ptBr.metaData.description,
}

export default async function Home() {
  return (
    <div>
      <Introduction />
      <Services />
      <MyProjects />
      <Skils />
      <Career />
      <Contact />
    </div>
  )
}
