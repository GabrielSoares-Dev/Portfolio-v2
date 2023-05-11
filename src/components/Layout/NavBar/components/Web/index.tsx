import useNav from '@/components/Layout/NavBar/hooks/useNav'
import { NavLinkWeb } from '@/components/NavLink'
import { checkIsTheme } from '@/functions'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

export function Web() {
  const {
    isAbout,
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    isSkills,
    theme,
    handleChangeSection,
    handleTheme,
  } = useNav()
  return (
    <nav
      className={`hidden h-20 fixed top-0 left-0 z-50 right-0  mb-20 md:block ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div className="flex justify-around py-6">
        <div>
          <h1 className="text-2xl font-extrabold text-primary m-0">SOARES</h1>
        </div>
        <div className="flex flex-row">
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('INTRODUCTION')}
              isActive={isIntroduction}
              href="#introduction"
              label="HOME"
            />
          </div>

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('SERVICES')}
              isActive={isServices}
              href="#services"
              label="SERVIÇOS"
            />
          </div>

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('PROJECTS')}
              isActive={isProjects}
              href="#projects"
              label="PROJETOS"
            />
          </div>
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('SKILLS')}
              isActive={isSkills}
              href="#skills"
              label="HABILIDADES"
            />
          </div>
          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('CAREER')}
              isActive={isCareer}
              href="#career"
              label="EXPERIÊNCIA"
            />
          </div>
          {/* <div className="mx-3">
              <NavLinkWeb
                onClick={() => handleChangeSection('ABOUT')}
                isActive={isAbout}
                href="/#about"
                label="SOBRE"
              />
            </div> */}

          <div className="mx-3">
            <NavLinkWeb
              onClick={() => handleChangeSection('CONTACT')}
              isActive={isContact}
              href="#contact"
              label="CONTATO"
            />
          </div>
          <div
            onClick={() =>
              handleTheme(checkIsTheme(theme, 'DARK') ? 'WHITE' : 'DARK')
            }
            className={`mx-3 border-2 border-primary p-1 rounded-3xl ${
              checkIsTheme(theme, 'DARK')
                ? 'bg-primary-dark'
                : 'bg-primary-white'
            }`}
          >
            {checkIsTheme(theme, 'WHITE') && (
              <MdDarkMode className="fill-primary text-lg" />
            )}

            {checkIsTheme(theme, 'DARK') && (
              <BsFillSunFill className="fill-primary text-lg" />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
// onClick={() => handleTheme(theme === 'DARK' ? 'WHITE' : 'DARK')}
