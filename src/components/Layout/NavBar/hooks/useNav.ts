'use client'
import { useState } from 'react'
import { currentPageType } from '@/context/types'
import { useLanguage, usePage, useTheme } from '@/hooks'

export default function useNav() {
  const { currentPage, setCurrentPage } = usePage()
  const { handleTheme, theme } = useTheme()
  const { handleLanguage, currentLanguage } = useLanguage()
  const [openNav, setOpenNav] = useState(false)

  const isIntroduction = currentPage === 'INTRODUCTION'
  const isServices = currentPage === 'SERVICES'
  const isProjects = currentPage === 'PROJECTS'
  const isCareer = currentPage === 'CAREER'
  const isContact = currentPage === 'CONTACT'
  const isSkills = currentPage === 'SKILLS'

  const handleChangeSection = (section: currentPageType) =>
    setCurrentPage(section)

  const handleOpenNav = (isOpen: boolean) => setOpenNav(isOpen)

  const handleNavigateMobile = (section: currentPageType) => {
    handleOpenNav(false)
    setCurrentPage(section)
  }

  return {
    isIntroduction,
    isServices,
    isProjects,
    isCareer,
    isContact,
    isSkills,
    openNav,
    theme,
    currentLanguage,
    handleOpenNav,
    handleChangeSection,
    handleNavigateMobile,
    handleTheme,
    handleLanguage,
  }
}
