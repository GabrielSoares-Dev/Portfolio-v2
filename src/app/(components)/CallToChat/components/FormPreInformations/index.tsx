import Button from '@/components/Button'
import { Input, InputLabel, InputError } from '@/components'
import {
  FormPreInformationsProps,
  RegisterPreInformationsFields,
} from '@app/(components)/CallToChat/types'
import { useRegisterInformationsToChat } from '@app/(components)/CallToChat/hooks'
import { checkIsHasError } from '@app/(components)/CallToChat/functions'

export function FormPreInformations({ onClose }: FormPreInformationsProps) {
  const { handleSubmit, register, onSubmit, errors } =
    useRegisterInformationsToChat(onClose)

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <Input<RegisterPreInformationsFields>
        register={register}
        type="text"
        name="name"
        autoComplete="nameComplete"
        hasError={checkIsHasError(errors.name)}
      >
        <InputLabel hasError={checkIsHasError(errors.name)}>Nome</InputLabel>
        {errors.name?.message && (
          <InputError>{errors.name?.message}</InputError>
        )}
      </Input>
      <Input<RegisterPreInformationsFields>
        register={register}
        type="email"
        name="email"
        autoComplete="emailForMe"
        hasError={checkIsHasError(errors.email)}
      >
        <InputLabel hasError={checkIsHasError(errors.email)}>Email</InputLabel>
        {errors.email?.message && (
          <InputError>{errors.email?.message}</InputError>
        )}
      </Input>
      <div className="flex  flex-col-reverse md:flex md:flex-row md:justify-center">
        <div className="w-full mt-4 md:w-40 mr-10 md:mt-0">
          <Button
            onClick={onClose}
            variant="secondary"
            type="button"
            label="Fechar"
          />
        </div>
        <div className="w-full md:w-40 md:mt-0 ">
          <Button type="submit" label="Iniciar chat" />
        </div>
      </div>
    </form>
  )
}
