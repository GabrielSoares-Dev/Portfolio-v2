'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { useFiltersStore, useScrollStore } from '@/store/modules'
import { projects } from '@app/(components)/MyProjects/objects'
import { useLanguage, usePage, useTheme } from '@/hooks'

export function useProjects() {
  const { filter } = useFiltersStore()
  const controls = useAnimation()
  const [animationCount, setAnimationCount] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
  const { currentLanguage } = useLanguage()
  const { setScrollToTop } = useScrollStore()
  const { theme } = useTheme()
  const enabledForAnimation = isInView && animationCount === 0
  const hasFilter = filter !== 'ALL'

  const projectFiltered = projects(currentLanguage).filter((value) =>
    value.stack.includes(filter),
  )

  useEffect(() => {
    if (enabledForAnimation) {
      controls.start('animate')
      setAnimationCount(1)
    }
    if (isInView) {
      setCurrentPage('PROJECTS')
      setScrollToTop(true)
    }
  }, [isInView, animationCount])
  return {
    ref,
    controls,
    hasFilter,
    projectFiltered,
    theme,
    currentLanguage,
  }
}
