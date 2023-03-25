'use client'
import usePage from '@/hooks/usePage/usePage'

export default function useNav() {
  const { currentPage } = usePage()
  const isIntroduction = currentPage === 'INTRODUCTION'
  const isAbout = currentPage === 'ABOUT'
  const isServices = currentPage === 'SERVICES'

  return {
    isAbout,
    isIntroduction,
    isServices,
  }
}
