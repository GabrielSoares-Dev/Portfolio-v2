import { useCallback } from 'react'

export function useLocalStorage() {
  const setItem = useCallback((key: string, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value)
    }
  }, [])

  const getItem = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
  }

  return {
    setItem,
    getItem,
  }
}
