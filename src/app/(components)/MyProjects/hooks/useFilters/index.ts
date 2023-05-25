'use client'
import { Filters } from '@app/(components)/MyProjects/types'
import { useCallback } from 'react'
import { useFiltersStore } from '@/store/modules'
import { AnimationControls } from 'framer-motion'
import { useLanguage } from '@/hooks'

export function useFilters(controls: AnimationControls) {
  const { filter, setFilter } = useFiltersStore()
  const { currentLanguage } = useLanguage()
  const isAll = filter === 'ALL'
  const isLaravel = filter === 'LARAVEL'
  const isNodejs = filter === 'NODEJS'

  const handleSelected = useCallback((value: Filters) => {
    setFilter(value)
  }, [])

  return {
    filter,
    isAll,
    isLaravel,
    isNodejs,
    currentLanguage,
    handleSelected,
  }
}
