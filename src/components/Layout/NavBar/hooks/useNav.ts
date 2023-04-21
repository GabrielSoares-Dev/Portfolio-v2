'use client'
import { currentPageType } from '@/context/PageContext/types'
import usePage from '@/hooks/usePage/usePage'

export default function useNav() {
  const { currentPage, setCurrentPage } = usePage()

  const isIntroduction = currentPage === 'INTRODUCTION'
  const isAbout = currentPage === 'ABOUT'
  const isServices = currentPage === 'SERVICES'
  const isProjects = currentPage === 'PROJECTS'
  const isCareer = currentPage === 'CAREER'
  const isContact = currentPage === 'CONTACT'

  const handleChangeSection = (section: currentPageType) =>
    setCurrentPage(section)
  return {
    isAbout,
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    handleChangeSection,
  }
}
