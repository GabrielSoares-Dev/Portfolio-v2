import useNav from '@/components/Layout/NavBar/hooks/useNav'
import { NavLinkWeb } from '@/components/NavLink'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { Button } from '@/components'

export function Web() {
  const {
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    isSkills,
    theme,
    currentLanguage,
    handleChangeSection,
    handleTheme,
    handleLanguage,
  } = useNav()
  return (
    <nav
      className={`hidden h-20 fixed top-0 left-0 z-50 right-0  mb-20 md:block transition duration-500 ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div className="flex justify-around py-6 ">
        <div>
          <h1 className="text-2xl font-extrabold text-primary m-0">SOARES</h1>
        </div>
        <div className="flex items-center flex-row">
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('INTRODUCTION')}
              isActive={isIntroduction}
              href="#introduction"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkHome
                  : en.menu.linkHome
              }
            />
          </div>

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('SERVICES')}
              isActive={isServices}
              href="#services"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkServices
                  : en.menu.linkServices
              }
            />
          </div>

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('PROJECTS')}
              isActive={isProjects}
              href="#projects"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkProjects
                  : en.menu.linkProjects
              }
            />
          </div>
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('SKILLS')}
              isActive={isSkills}
              href="#skills"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkSkills
                  : en.menu.linkSkills
              }
            />
          </div>
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('CAREER')}
              isActive={isCareer}
              href="#career"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkCareer
                  : en.menu.linkCareer
              }
            />
          </div>

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('CONTACT')}
              isActive={isContact}
              href="#contact"
              label={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.menu.linkContact
                  : en.menu.linkContact
              }
            />
          </div>
          <div className="w-16">
            <Button
              variant="secondary"
              label={checkIsLanguage(currentLanguage, 'PT-BR') ? 'PT-BR' : 'EN'}
              onClick={() =>
                handleLanguage(
                  checkIsLanguage(currentLanguage, 'PT-BR') ? 'EN' : 'PT-BR',
                )
              }
            />
          </div>
          <div
            onClick={() =>
              handleTheme(checkIsTheme(theme, 'DARK') ? 'WHITE' : 'DARK')
            }
            className={`flex justify-center  mx-3 border-2 border-primary p-1 h-max rounded-3xl transition duration-500 ${
              checkIsTheme(theme, 'DARK')
                ? 'bg-primary-dark'
                : 'bg-primary-white'
            }`}
          >
            {checkIsTheme(theme, 'WHITE') && (
              <MdDarkMode className="fill-primary text-lg transition duration-500" />
            )}

            {checkIsTheme(theme, 'DARK') && (
              <BsFillSunFill className="fill-primary text-lg transition duration-500" />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
