import Button from '@/components/Button'

export default function NavBar() {
  return (
    <nav className="container mx-auto h-24">
      <div className="flex justify-between py-10">
        <div className="">
          <h1 className="text-2xl font-bold text-primary m-0">
            Gabriel S.Maciel
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="w-24 mr-4">
            <Button label="Sobre" />
          </div>
          <div className="w-24">
            <Button label="Contato" variant="secondary" />
          </div>
        </div>
      </div>
    </nav>
  )
}
