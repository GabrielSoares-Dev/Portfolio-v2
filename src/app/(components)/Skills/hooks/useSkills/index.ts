'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { useLanguage, usePage, useTheme } from '@/hooks'
import { useScrollStore } from '@/store/modules'

export function useSkills() {
  const controls = useAnimation()
  const [animationCount, setAnimationCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
  const { currentLanguage } = useLanguage()
  const { theme } = useTheme()
  const { setScrollToTop } = useScrollStore()
  const enabledForAnimation = isInView && animationCount === 0

  useEffect(() => {
    if (enabledForAnimation) {
      controls.start('animate')
      setAnimationCount(1)
    }
    if (isInView) {
      setCurrentPage('SKILLS')
      setScrollToTop(true)
    }
  }, [isInView, animationCount])
  return {
    ref,
    controls,
    theme,
    currentLanguage,
  }
}
