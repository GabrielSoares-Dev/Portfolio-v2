import { z } from 'zod'

export const schemaPreInformations = z.object({
  name: z.string().nonempty({ message: 'Por favor coloque seu nome' }),
  email: z
    .string()
    .nonempty({ message: 'Por favor coloque seu email' })
    .email({ message: 'Coloque um email válido' }),
})
