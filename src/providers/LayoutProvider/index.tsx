import { LayoutProviderProps } from '@/providers/types'
import { PageContextProvider, ThemeContextProvider } from '@/context'

export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <ThemeContextProvider>
      <PageContextProvider>{children}</PageContextProvider>
    </ThemeContextProvider>
  )
}
