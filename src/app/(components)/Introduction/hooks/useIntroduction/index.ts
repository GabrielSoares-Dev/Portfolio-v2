'use client'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useLanguage, usePage, useTheme } from '@/hooks'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { useInView } from 'framer-motion'
import { useScrollStore } from '@/store/modules'

export function useIntroduction() {
  const [typeAnimationKey, setTypeAnimationKey] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()
  const { theme } = useTheme()
  const { currentLanguage } = useLanguage()
  const { setScrollToTop } = useScrollStore()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  )

  useEffect(() => {
    if (isInView) {
      setCurrentPage('INTRODUCTION')
      setScrollToTop(false)
    }
    setTypeAnimationKey(typeAnimationKey + 1)
  }, [isInView, theme, currentLanguage])

  return {
    ref,
    theme,
    currentLanguage,
    typeAnimationKey,
    particlesInit,
    particlesLoaded,
  }
}
