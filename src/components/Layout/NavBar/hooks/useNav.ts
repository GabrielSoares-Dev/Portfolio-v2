'use client'
import { useState } from 'react'
import { currentPageType } from '@/context/types'
import { usePage, useTheme } from '@/hooks'
import type { Theme } from '@/context/types'

export default function useNav() {
  const { currentPage, setCurrentPage } = usePage()
  const { setTheme, theme } = useTheme()
  const [openNav, setOpenNav] = useState(false)

  const isIntroduction = currentPage === 'INTRODUCTION'
  const isAbout = currentPage === 'ABOUT'
  const isServices = currentPage === 'SERVICES'
  const isProjects = currentPage === 'PROJECTS'
  const isCareer = currentPage === 'CAREER'
  const isContact = currentPage === 'CONTACT'
  const isSkills = currentPage === 'SKILLS'

  const handleChangeSection = (section: currentPageType) =>
    setCurrentPage(section)

  const handleOpenNav = (isOpen: boolean) => setOpenNav(isOpen)

  const handleTheme = (theme: Theme) => setTheme(theme)
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
    isSkills,
    openNav,
    theme,
    handleOpenNav,
    handleChangeSection,
    handleNavigateMobile,
    handleTheme,
  }
}
