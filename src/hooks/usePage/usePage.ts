'use client'
import { useContext } from 'react'
import { PageContext } from '@/context/PageContext/PageContext'

export default function usePage() {
  const page = useContext(PageContext)

  return page
}
