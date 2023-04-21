'use client'
import { useEffect, useRef, useState } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useAnimation, useInView } from 'framer-motion'

export function useCareer() {
  const controls = useAnimation()
  const [animationCount, setAnimationCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
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
  }
}
