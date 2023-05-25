import { LayoutProviderProps } from '@/providers/types'
import {
  PageContextProvider,
  ThemeContextProvider,
  LanguageContextProvider,
} from '@/context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()
export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <PageContextProvider>{children}</PageContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </QueryClientProvider>
  )
}
