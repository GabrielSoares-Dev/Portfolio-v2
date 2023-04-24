import React from 'react'
import { Input, Modal } from '@/components'
import { ModalPreInformationsProps } from '@app/(components)/CallToChat/types'
import Button from '@/components/Button'

export function ModalPreInformationsChat({
  open,
  onClose,
}: ModalPreInformationsProps) {
  return (
    <Modal onClose={onClose} open={open}>
      <div className="relative">
        <div className="max-w-sm mx-auto mb-10 text-center">
          <h4 className="text-2xl font-bold text-white mb-4">
            Entre em contato comigo
          </h4>
        </div>
        <form action="">
          <Input label="Nome" type="text" name="name" />
          <Input label="Email" type="email" name="email" />
          <div className="md:flex flex-row justify-center">
            <div className="w-full md:w-40 mr-10">
              <Button
                onClick={onClose}
                variant="secondary"
                type="button"
                label="Fechar"
              />
            </div>
            <div className="w-full mt-4 md:w-40 md:mt-0 ">
              <Button onClick={onClose} type="button" label="Iniciar chat" />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}
