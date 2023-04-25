import { useForm } from 'react-hook-form'
import { RegisterPreInformationsFields } from '@app/(components)/CallToChat/types'
import { schemaPreInformations } from '@app/(components)/CallToChat/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export function useRegisterInformationsToChat() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPreInformationsFields>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schemaPreInformations),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  const onSubmit = (data: RegisterPreInformationsFields) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
