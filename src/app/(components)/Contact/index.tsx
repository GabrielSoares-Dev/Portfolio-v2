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
import Cards from './objects/cards'
import { checkIsTheme } from '@/functions'
export default function Contact() {
  const { controls, ref, theme } = useContact()
  return (
    <section
      id="contact"
      ref={ref}
      className={`pt-20 relative transition duration-500  ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      } `}
    >
      <div className="container  px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial="initial"
            variants={badgeAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >
            <Badge content="CONTATO" />
          </motion.div>

          <motion.h3
            initial="initial"
            variants={titleAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className={`mb-4 text-4xl md:text-5xl leading-tight  font-bold tracking-tighter ${
              checkIsTheme(theme, 'DARK')
                ? 'text-secondary-dark'
                : 'text-secondary-white'
            }`}
          >
            Entre em contato comigo
          </motion.h3>
          <motion.p
            initial="initial"
            variants={descriptionAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
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
                controls,
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
