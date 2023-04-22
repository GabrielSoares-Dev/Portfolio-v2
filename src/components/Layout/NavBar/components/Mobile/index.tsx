'use client'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { NavLinkMobile } from '@/components/NavLink'
import { AnimatePresence, motion } from 'framer-motion'
import useNav from '@/components/Layout/NavBar/hooks/useNav'

export function Mobile() {
  const {
    openNav,
    isContact,
    isCareer,
    isIntroduction,
    isProjects,
    isServices,
    handleOpenNav,
    handleNavigateMobile,
  } = useNav()
  return (
    <section className="block md:hidden h-20 fixed bg-black top-0 left-0 z-50 right-0">
      <nav className="flex justify-between p-6 px-4">
        <div className="flex justify-between items-center w-full">
          <div className="xl:w-1/3">
            <a className="block max-w-max" href="#">
              <h1 className="text-xl font-extrabold text-primary m-0">
                SOARES
              </h1>
            </a>
          </div>
        </div>
        <button
          onClick={() => handleOpenNav(true)}
          className="self-center  xl:hidden hover:scale-110 hover:transition hover:duration-700"
        >
          <BiMenu fontSize={30} className="fill-primary" />
        </button>
      </nav>
      <AnimatePresence>
        {openNav && (
          <div className="navbar-menu md:hidden  fixed top-0 left-0 z-50 w-full h-full bg-opacity-50">
            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              animate={{ width: '100%', opacity: 1 }}
              exit={{
                opacity: 0,
                width: 0,
              }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-black"
            >
              <nav className="relative p-6 h-full overflow-y-auto">
                <div className="flex flex-col  h-full">
                  <a className="inline-block" href="#">
                    <h1 className="text-xl font-extrabold text-primary m-0">
                      SOARES
                    </h1>
                  </a>
                  <div className="mt-20">
                    <div className="mt-2">
                      <NavLinkMobile
                        href="#introduction"
                        onClick={() => handleNavigateMobile('INTRODUCTION')}
                        isActive={isIntroduction}
                        label="HOME"
                      />
                    </div>
                    <div className="mt-2">
                      <NavLinkMobile
                        href="#services"
                        onClick={() => handleNavigateMobile('SERVICES')}
                        isActive={isServices}
                        label="SERVIÇOS"
                      />
                    </div>
                    <div className="mt-2">
                      <NavLinkMobile
                        href="#projects"
                        onClick={() => handleNavigateMobile('PROJECTS')}
                        isActive={isProjects}
                        label="PROJETOS"
                      />
                    </div>
                    <div className="mt-2">
                      <NavLinkMobile
                        href="#career"
                        onClick={() => handleNavigateMobile('CAREER')}
                        isActive={isCareer}
                        label="EXPERIÊNCIA"
                      />
                    </div>
                    <div className="mt-2">
                      <NavLinkMobile
                        href="#contact"
                        onClick={() => handleNavigateMobile('CONTACT')}
                        isActive={isContact}
                        label="CONTATO"
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <a
                onClick={() => handleOpenNav(false)}
                className="navbar-close absolute top-3 p-4 right-3 hover:scale-110 hover:transition hover:duration-700"
                href="#"
              >
                <IoMdClose fontSize={25} className="fill-primary" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}