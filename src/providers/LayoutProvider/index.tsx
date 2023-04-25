import { LayoutProviderProps } from '@/providers/types'
import PageContextProvider from '@/context/PageContext/PageContext'

export function LayoutProvider({ children }: LayoutProviderProps) {
  return <PageContextProvider>{children}</PageContextProvider>
}
