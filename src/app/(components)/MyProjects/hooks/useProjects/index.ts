'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useFiltersStore } from '@/store/modules'
import { projects } from '@app/(components)/MyProjects/objects'
export function useProjects() {
  const { filter } = useFiltersStore()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasFilter = filter !== 'ALL'
  const projectFiltered = projects.filter((value) =>
    value.stack.includes(filter),
  )

  return {
    ref,
    isInView,
    hasFilter,
    projectFiltered,
  }
}
