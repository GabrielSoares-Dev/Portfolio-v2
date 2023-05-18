import { LayoutProviderProps } from '@/providers/types'
import {
  PageContextProvider,
  ThemeContextProvider,
  LanguageContextProvider,
} from '@/context'

export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <PageContextProvider>{children}</PageContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}
