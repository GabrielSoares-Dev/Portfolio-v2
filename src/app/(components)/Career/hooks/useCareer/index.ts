'use client'
import { useEffect, useRef, useState } from 'react'
import { useLanguage, usePage, useTheme } from '@/hooks'
import { useAnimation, useInView } from 'framer-motion'

export function useCareer() {
  const controls = useAnimation()
  const [animationCount, setAnimationCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
  const { theme } = useTheme()
  const { currentLanguage } = useLanguage()
  const enabledForAnimation = isInView && animationCount === 0

  useEffect(() => {
    if (enabledForAnimation) {
      controls.start('animate')
      setAnimationCount(1)
    }
    if (isInView) {
      setCurrentPage('CAREER')
    }
  }, [isInView, animationCount])
  return {
    ref,
    controls,
    theme,
    currentLanguage,
  }
}
