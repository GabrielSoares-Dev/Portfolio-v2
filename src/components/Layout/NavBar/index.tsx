'use client'
import NavLink from '@/components/NavLink'
import useNav from './hooks/useNav'

export default function NavBar() {
  const { isAbout, isIntroduction } = useNav()
  return (
    <nav className="w-screen h-20 bg-secondary fixed ">
      <div className="flex justify-around py-6">
        <div>
          <h1 className="text-2xl font-extrabold text-primary m-0">SOARES</h1>
        </div>
        <div className="flex flex-row">
          <div className="mx-3">
            <NavLink
              isActive={isIntroduction}
              href="/#introduction"
              label="HOME"
            />
          </div>
          <div className="mx-3">
            <NavLink isActive={isAbout} href="/#about" label="SOBRE" />
          </div>
          <div className="mx-3">
            <NavLink isActive={false} href="/" label="SERVIÇOS" />
          </div>
          <div className="mx-3">
            <NavLink isActive={false} href="/" label="CONTATO" />
          </div>
        </div>
      </div>
    </nav>
  )
}
