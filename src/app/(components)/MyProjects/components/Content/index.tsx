'use client'
import { CardProject, Filters } from '@app/(components)/MyProjects/components'
import Badge from '@/components/Badge'
import { useProjects } from '@app/(components)/MyProjects/hooks'
import {
  titleAnimation,
  badgeAnimation,
  descriptionAnimation,
} from '@app/(components)/MyProjects/animations'
import { motion } from 'framer-motion'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'

export function Content() {
  const { ref, controls, theme, currentLanguage, projects, isLoading } =
    useProjects()

  return (
    <div className="container px-4 mx-auto">
      <div ref={ref} className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
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
                ? ptBr.projects.badge
                : en.projects.badge
            }
          />
        </motion.div>

        <motion.h3
          initial="initial"
          variants={titleAnimation}
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className={`mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter   ${
            checkIsTheme(theme, 'DARK')
              ? 'text-secondary-dark'
              : 'text-secondary-white'
          }`}
        >
          {checkIsLanguage(currentLanguage, 'PT-BR')
            ? ptBr.projects.title
            : en.projects.title}
        </motion.h3>
        <motion.p
          initial="initial"
          variants={descriptionAnimation}
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="mb-10 text-gray-500 text-lg md:text-xl font-medium"
        >
          {checkIsLanguage(currentLanguage, 'PT-BR')
            ? ptBr.projects.description
            : en.projects.description}
        </motion.p>
      </div>
      <Filters controls={controls} />
      {!isLoading && (
        <div className="flex items-center flex-wrap mx-4 mb-12 md:mb-20">
          {projects!.map((element) => (
            <CardProject
              animation={{
                controls,
              }}
              height={element.height}
              width={element.width}
              key={element.id}
              url={element.url}
              title={element.title}
              description={element.description}
              image={element.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}
