'use client'
import { useEffect, useRef, useState } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useInView, useAnimation } from 'framer-motion'

export function useCallToChat() {
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
      setCurrentPage('CONTACT')
    }
  }, [isInView, animationCount])
  return {
    ref,
    controls,
  }
}
