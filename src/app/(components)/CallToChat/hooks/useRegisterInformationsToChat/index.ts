import { useForm } from 'react-hook-form'
import { RegisterPreInformationsFields } from '@app/(components)/CallToChat/types'
import { schemaPreInformations } from '@app/(components)/CallToChat/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useChatStore } from '@/store/modules'

export function useRegisterInformationsToChat(onClose: () => void) {
  const { setIsOpenChat } = useChatStore()
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
    onClose()
    setIsOpenChat(true)
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
