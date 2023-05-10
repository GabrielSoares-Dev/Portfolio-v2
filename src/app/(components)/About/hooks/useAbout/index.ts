'use client'
import { useEffect, useRef } from 'react'
import { usePage } from '@/hooks'
import { useInView } from 'framer-motion'

export function useAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()

  useEffect(() => {
    if (isInView) {
      setCurrentPage('ABOUT')
    }
  }, [isInView, setCurrentPage])

  return {
    ref,
  }
}
