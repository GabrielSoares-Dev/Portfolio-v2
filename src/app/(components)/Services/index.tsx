'use client'
import Card from './components/Card'
import Cards from './objects/cards'
import { useServices } from './hooks'
import Badge from '@/components/Badge'
import { motion } from 'framer-motion'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import {
  badgeAnimation,
  titleAnimation,
  descriptionAnimation,
} from './animations'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'

export default function Services() {
  const { ref, controls, theme, currentLanguage } = useServices()

  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 relative md:pb-32  transition duration-500 ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <motion.div
            initial="initial"
            variants={badgeAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            <Badge
              content={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.services.badge
                  : en.services.badge
              }
            />
          </motion.div>

          <motion.h1
            initial="initial"
            animate={controls}
            variants={titleAnimation}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className={`mb-4  text-3xl md:text-4xl leading-tight font-bold tracking-tighter  ${
              checkIsTheme(theme, 'DARK')
                ? 'text-secondary-dark'
                : 'text-secondary-white'
            }`}
          >
            {checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.services.title
              : en.services.title}
          </motion.h1>
          <motion.div
            initial="initial"
            variants={descriptionAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="text-gray-500 text-lg md:text-xl font-medium"
          >
            {checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.services.description
              : en.services.description}
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {Cards(currentLanguage).map((element) => (
            <Card
              animation={{
                controls,
              }}
              key={element.id}
              title={element.title}
              Icon={element.Icon}
              text={element.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
