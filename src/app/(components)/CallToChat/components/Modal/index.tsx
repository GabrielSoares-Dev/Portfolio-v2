import React from 'react'
import { Modal } from '@/components'
import { ModalPreInformationsProps } from '@app/(components)/CallToChat/types'
import { FormPreInformations } from '@app/(components)/CallToChat/components'

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
        <FormPreInformations onClose={onClose} />
      </div>
    </Modal>
  )
}
