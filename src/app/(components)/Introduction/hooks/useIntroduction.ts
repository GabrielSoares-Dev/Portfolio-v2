'use client'
import { useEffect, useRef } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useInView } from 'framer-motion'

export default function useIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { setCurrentPage } = usePage()

  useEffect(() => {
    if (isInView) {
      setCurrentPage('INTRODUCTION')
    }
  }, [isInView])

  return {
    ref,
  }
}
