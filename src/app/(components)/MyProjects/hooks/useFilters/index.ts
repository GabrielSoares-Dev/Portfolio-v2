'use client'
import { Filters } from '@app/(components)/MyProjects/types'
import { useFiltersStore } from '@/store/modules'

export function useFilters() {
  const { filter, setFilter } = useFiltersStore()
  const isAll = filter === 'ALL'
  const isLaravel = filter === 'LARAVEL'
  const isNodejs = filter === 'NODEJS'

  const handleSelected = (value: Filters) => {
    setFilter(value)
  }

  return {
    filter,
    isAll,
    isLaravel,
    isNodejs,
    handleSelected,
  }
}
