'use client'
import { useEffect, useRef, useCallback } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { useInView } from 'framer-motion'

export function useIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()

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
    }
  }, [isInView])

  return {
    ref,
    particlesInit,
    particlesLoaded,
  }
}
