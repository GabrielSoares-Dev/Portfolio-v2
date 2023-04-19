'use client'
import { useState } from 'react'
import { Filters } from '@app/(components)/MyProjects/types'

export function useFilters() {
  const [selected, setSelected] = useState<Filters>('ALL')
  const isAll = selected === 'ALL'
  const isLaravel = selected === 'LARAVEL'
  const isNodejs = selected === 'NODEJS'

  const handleSelected = (value: Filters) => {
    setSelected(value)
  }

  return {
    selected,
    isAll,
    isLaravel,
    isNodejs,
    handleSelected,
  }
}
