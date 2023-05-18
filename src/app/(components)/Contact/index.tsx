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
import { checkIsTheme, checkIsLanguage } from '@/functions'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
export default function Contact() {
  const { controls, ref, theme, currentLanguage } = useContact()
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
            <Badge
              content={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.contact.badge
                  : en.contact.badge
              }
            />
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
            {checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.contact.title
              : en.contact.title}
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
            {checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.contact.description
              : en.contact.description}
          </motion.p>
        </div>
        <div className="flex flex-wrap -mx-4 pb-16">
          {Cards(currentLanguage).map((element) => (
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
