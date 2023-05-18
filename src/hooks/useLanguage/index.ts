'use client'
import { useContext } from 'react'
import { LanguageContext } from '@/context'

export function useLanguage() {
  const language = useContext(LanguageContext)

  return language
}
