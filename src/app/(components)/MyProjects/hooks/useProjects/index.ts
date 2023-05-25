'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { useFiltersStore, useScrollStore } from '@/store/modules'
import { useLanguage, usePage, useTheme } from '@/hooks'
import { getMyProjectsService } from '@/services'
import { useQuery } from '@tanstack/react-query'
export function useProjects() {
  const [animationCount, setAnimationCount] = useState(0)
  const { filter } = useFiltersStore()
  const { currentLanguage } = useLanguage()
  const controls = useAnimation()
  const { setCurrentPage } = usePage()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { theme } = useTheme()
  const { setScrollToTop } = useScrollStore()
  const {
    data: projects,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['my-projects', currentLanguage, filter],
    queryFn: () =>
      getMyProjectsService({
        filter,
        language: currentLanguage,
      }),
  })
  const enabledForAnimation = (isInView && animationCount === 0) || isSuccess
  useEffect(() => {
    if (enabledForAnimation) {
      controls.start('animate')
      setAnimationCount(1)
    }
    if (isInView) {
      setCurrentPage('PROJECTS')
      setScrollToTop(true)
    }
  }, [isInView, animationCount, isSuccess])

  return {
    ref,
    controls,
    theme,
    currentLanguage,
    projects,
    isLoading,
  }
}
