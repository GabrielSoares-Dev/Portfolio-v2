import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="container mx-auto h-24">
      <div className="flex justify-between py-10">
        <div className="">
          <h1 className="text-2xl font-bold text-primary m-0">
            Gabriel S.Maciel
          </h1>
        </div>
        <ul className="flex flex-row">
          <li className="flex items-center">
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center">
            <Link href="/about">About</Link>
          </li>
          <li className="flex items-center">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
