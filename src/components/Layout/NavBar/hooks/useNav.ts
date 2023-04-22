'use client'
import { useState } from 'react'
import { currentPageType } from '@/context/PageContext/types'
import usePage from '@/hooks/usePage/usePage'

export default function useNav() {
  const { currentPage, setCurrentPage } = usePage()
  const [openNav, setOpenNav] = useState(false)

  const isIntroduction = currentPage === 'INTRODUCTION'
  const isAbout = currentPage === 'ABOUT'
  const isServices = currentPage === 'SERVICES'
  const isProjects = currentPage === 'PROJECTS'
  const isCareer = currentPage === 'CAREER'
  const isContact = currentPage === 'CONTACT'

  const handleChangeSection = (section: currentPageType) =>
    setCurrentPage(section)

  const handleOpenNav = (isOpen: boolean) => setOpenNav(isOpen)

  const handleNavigateMobile = (section: currentPageType) => {
    handleOpenNav(false)
    setCurrentPage(section)
  }

  return {
    isAbout,
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    openNav,
    handleOpenNav,
    handleChangeSection,
    handleNavigateMobile,
  }
}
