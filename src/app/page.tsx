import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import About from '@/app/(components)/About'
import Skils from '@/app/(components)/Skils'
import Contact from '@/app/(components)/Contact'
import CallToChat from '@/app/(components)/CallToChat'
import Career from '@/app/(components)/Career'
import MyProjects from '@/app/(components)/MyProjects'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Services />
      <MyProjects />
      <Career />
      {/* <Skils /> */}
      {/* <About /> */}
      <Contact />
      <CallToChat />
    </div>
  )
}
