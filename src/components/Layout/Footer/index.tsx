import { checkIsTheme } from '@/functions'
import { useFooter } from './hooks'
export default function Footer() {
  const { theme } = useFooter()
  return (
    <section
      className={`relative ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="pt-24  mx-auto max-w-4xl">
          <a className="flex justify-center md:mx-auto " href="#">
            <h1 className="text-2xl text-center font-extrabold text-primary m-0">
              SOARES
            </h1>
          </a>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <p
          className={`py-10 md:pb-20 text-lg md:text-xl  font-medium text-center ${
            checkIsTheme(theme, 'DARK')
              ? 'text-secondary-dark'
              : 'text-secondary-white'
          }`}
        >
          © 2021 Gabriel S.Maciel. Todos direitos reservados.
        </p>
      </div>
    </section>
  )
}
