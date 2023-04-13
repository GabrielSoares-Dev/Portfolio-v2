'use client'
import CardContact from './components/CardContact'
import Badge from '@/components/Badge'
import { motion } from 'framer-motion'
import { useContact } from './hooks'
import {
  badgeAnimation,
  titleAnimation,
  descriptionAnimation,
} from './animations'

import Cards from './domains/cards'
export default function Contact() {
  const { isInView, ref } = useContact()
  return (
    <section ref={ref} className="pt-20  bg-black">
      <div className="container  px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            animate={badgeAnimation(isInView).animate}
            transition={badgeAnimation(isInView).transition}
          >
            <Badge content="CONTATO" />
          </motion.div>

          <motion.h3
            animate={titleAnimation(isInView).animate}
            transition={titleAnimation(isInView).transition}
            className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter"
          >
            Entre em contato comigo
          </motion.h3>
          <motion.p
            animate={descriptionAnimation(isInView).animate}
            transition={descriptionAnimation(isInView).transition}
            className="text-gray-500 text-lg md:text-xl font-medium"
          >
            Se você precisa de um desenvolvedor habilidoso para o seu próximo
            projeto, não precisa procurar mais! Entre em contato comigo hoje
            mesmo e vamos trabalhar juntos para alcançar seus objetivos. Estou
            ansioso para ouvir de você!
          </motion.p>
        </div>
        <div className="flex flex-wrap -mx-4 pb-16">
          {Cards.map((element) => (
            <CardContact
              animation={{
                isInView,
              }}
              Icon={element.Icon}
              text={element.text}
              title={element.title}
              key={element.id}
              socials={element.socials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
