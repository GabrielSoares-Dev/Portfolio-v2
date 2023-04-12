'use client'
import { useEffect, useRef } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useInView } from 'framer-motion'

export function useServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { setCurrentPage } = usePage()

  useEffect(() => {
    if (isInView) {
      setCurrentPage('SERVICES')
    }
  }, [isInView])

  return {
    ref,
    isInView,
  }
}
