import { checkIsTheme, checkIsLanguage } from '@/functions'
import { useFooter } from './hooks'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
export default function Footer() {
  const { theme, currentLanguage, currentYear } = useFooter()
  return (
    <section
      className={`relative transition duration-500 ${
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
          className={`py-10 md:pb-20 text-lg md:text-xl  font-medium text-center transition duration-500 ${
            checkIsTheme(theme, 'DARK')
              ? 'text-secondary-dark'
              : 'text-secondary-white'
          }`}
        >
          © {currentYear}{' '}
          {checkIsLanguage(currentLanguage, 'PT-BR')
            ? ptBr.footer.text
            : en.footer.text}
        </p>
      </div>
    </section>
  )
}
