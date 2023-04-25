import { z } from 'zod'
import { schemaPreInformations } from '@app/(components)/CallToChat/schemas'
export type RegisterPreInformationsFields = z.infer<
  typeof schemaPreInformations
>
