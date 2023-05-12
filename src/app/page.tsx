'use client'
import Introduction from '@app/(components)/Introduction'
import Services from '@app/(components)/Services'
import About from '@/app/(components)/About'
import Skils from '@/app/(components)/Skills'
import Contact from '@/app/(components)/Contact'
import Career from '@/app/(components)/Career'
import MyProjects from '@/app/(components)/MyProjects'

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
