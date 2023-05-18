'use client'
import { useEffect, useRef, useState } from 'react'
import { usePage, useTheme, useLanguage } from '@/hooks'
import { useInView, useAnimation } from 'framer-motion'

export function useServices() {
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
      setCurrentPage('SERVICES')
    }
  }, [isInView, animationCount])

  return {
    ref,
    controls,
    theme,
    currentLanguage,
  }
}
