import useNav from '@/components/Layout/NavBar/hooks/useNav'
import { NavLinkWeb } from '@/components/NavLink'

export function Web() {
  const {
    isAbout,
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    isSkills,
    handleChangeSection,
  } = useNav()
  return (
    <nav className="hidden h-20 fixed top-0 left-0 z-50 right-0 bg-secondary mb-20 md:block">
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
        </div>
      </div>
    </nav>
  )
}
