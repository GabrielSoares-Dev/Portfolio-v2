'use client'
import Badge from '@/components/Badge'
import CardExperience from './components/Card'
import { experiences } from './objects'
import { useCareer } from './hooks'
import { motion } from 'framer-motion'
import { badgeAnimation, titleAnimation } from './animations'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'

export default function Career() {
  const { ref, controls, theme, currentLanguage } = useCareer()
  return (
    <section
      id="career"
      className={` relative py-24 transition duration-500  ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <div ref={ref} className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.div
            animate={controls}
            initial="initial"
            variants={badgeAnimation}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            <Badge
              content={
                checkIsLanguage(currentLanguage, 'PT-BR')
                  ? ptBr.career.badge
                  : en.career.badge
              }
            />
          </motion.div>

          <motion.h3
            initial="initial"
            animate={controls}
            variants={titleAnimation}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className={`mb-4 text-3xl md:text-4xl leading-tight  font-bold tracking-tighter  ${
              checkIsTheme(theme, 'DARK')
                ? 'text-secondary-dark'
                : 'secondary-white'
            }`}
          >
            {checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.career.title
              : en.career.title}
          </motion.h3>
        </div>
        <div className="flex flex-col gap-10">
          {experiences(currentLanguage).map((element) => (
            <CardExperience
              animation={{
                controls,
              }}
              key={element.id}
              dateInPosition={element.dateInPosition}
              position={element.position}
              where={element.where}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
