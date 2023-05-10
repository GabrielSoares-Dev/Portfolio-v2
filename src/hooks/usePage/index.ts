'use client'
import { useContext } from 'react'
import { PageContext } from '@/context'

export function usePage() {
  const page = useContext(PageContext)

  return page
}
