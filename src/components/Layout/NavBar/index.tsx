import NavLink from '@/components/NavLink'

export default function NavBar() {
  return (
    <nav className="container mx-auto h-24">
      <div className="flex  justify-around  py-10">
        <div>
          <h1 className="text-2xl font-bold text-primary m-0">
            Gabriel S.Maciel
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="mx-3">
            <NavLink href="/#introduction" label="HOME" />
          </div>
          <div className="mx-3">
            <NavLink href="/#about" label="SOBRE" />
          </div>
          <div className="mx-3">
            <NavLink href="/" label="SERVIÇOS" />
          </div>
          <div className="mx-3">
            <NavLink href="/" label="CONTATO" />
          </div>
        </div>
      </div>
    </nav>
  )
}
