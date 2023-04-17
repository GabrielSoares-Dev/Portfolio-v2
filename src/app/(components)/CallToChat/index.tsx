'use client'
import Button from '@/components/Button'
import { useCallToChat } from './hooks'
import { motion } from 'framer-motion'
import {
  titleAnimation,
  descriptionAnimation,
  buttonAnimation,
} from './animations'

export default function CallToChat() {
  const { isInView, ref } = useCallToChat()
  return (
    <section ref={ref} className="py-20 md:py-28 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            animate={titleAnimation(isInView).animate}
            transition={titleAnimation(isInView).transition}
            className="mb-4 text-white text-3xl md:text-4xl font-heading font-bold"
            contentEditable={false}
          >
            Converse comigo agora mesmo
          </motion.h2>
          <motion.p
            animate={descriptionAnimation(isInView).animate}
            transition={descriptionAnimation(isInView).transition}
            className="mb-6 text-gray-500 text-lg md:text-xl font-heading font-medium text-coolGray-500"
          >
            Estou disponível para conversar com você em tempo real através de um
            chat. Se precisar de ajuda, tirar dúvidas ou simplesmente bater um
            papo, é só iniciar a conversa e estarei aqui para responder o mais
            rápido possível. Vamos conversar agora mesmo!
          </motion.p>
          <div className="flex justify-center">
            <motion.div
              animate={buttonAnimation(isInView).animate}
              transition={buttonAnimation(isInView).transition}
              className="w-full sm:w-32"
            >
              <Button label="Iniciar chat" variant="secondary" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
