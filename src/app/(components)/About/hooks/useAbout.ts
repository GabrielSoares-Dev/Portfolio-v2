'use client'
import { useEffect, useRef } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useInView } from 'framer-motion'

export default function useAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()

  useEffect(() => {
    if (isInView) {
      setCurrentPage('ABOUT')
    }
  }, [isInView])

  return {
    ref,
  }
}
