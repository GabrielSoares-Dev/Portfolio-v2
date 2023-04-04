import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import About from '@/app/(components)/About'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Services />
      <About />
    </div>
  )
}
