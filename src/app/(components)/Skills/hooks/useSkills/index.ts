'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { usePage, useTheme } from '@/hooks'

export function useSkills() {
  const controls = useAnimation()
  const [animationCount, setAnimationCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
  const { theme } = useTheme()
  const enabledForAnimation = isInView && animationCount === 0

  useEffect(() => {
    if (enabledForAnimation) {
      controls.start('animate')
      setAnimationCount(1)
    }
    if (isInView) {
      setCurrentPage('SKILLS')
    }
  }, [isInView, animationCount])
  return {
    ref,
    controls,
    theme,
  }
}
