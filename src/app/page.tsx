import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import About from '@/app/(components)/About'
import Skils from './(components)/Skils'
import Contact from './(components)/Contact'
import CallToChat from './(components)/CallToChat'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Services />
      {/* <Skils /> */}
      <About />
      <Contact />
      <CallToChat />
    </div>
  )
}
