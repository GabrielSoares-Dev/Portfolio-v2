'use client'
import { ModalProps } from '@/components/types'
import { AnimatePresence, motion } from 'framer-motion'
import { BackDrop } from '@/components'
import { useModal } from './hooks'

export function Modal({ children, open, onClose }: ModalProps) {
  const { divRef } = useModal(open, onClose)
  return (
    <AnimatePresence>
      {open && (
        <BackDrop open={open}>
          <motion.div
            ref={divRef}
            key="modal"
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
            }}
            className="modal-wrapper"
          >
            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  )
}
