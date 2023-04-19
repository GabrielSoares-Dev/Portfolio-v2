'use client'
import { useEffect, useRef } from 'react'
import usePage from '@/hooks/usePage/usePage'
import { useInView } from 'framer-motion'

export function useProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return {
    ref,
    isInView,
  }
}
