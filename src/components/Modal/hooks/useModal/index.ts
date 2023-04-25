'use client'
import React, { useEffect, useRef } from 'react'
import { useScrollStore } from '@/store/modules'

export function useModal(open: boolean, onClose: () => void) {
  const { setScrollDisabled } = useScrollStore()
  const divRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // @ts-ignore
    if (divRef.current && !divRef.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    setScrollDisabled(open)
    // @ts-ignore
    document.addEventListener('click', handleClickOutside)

    return () => {
      // @ts-ignore
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return { divRef }
}
