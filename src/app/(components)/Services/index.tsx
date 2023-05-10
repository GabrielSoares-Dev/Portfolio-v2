'use client'
import Card from './components/Card'
import Cards from './objects/cards'
import { useServices } from './hooks'
import Badge from '@/components/Badge'
import { motion } from 'framer-motion'
import { checkIsTheme } from '@/functions'
import {
  badgeAnimation,
  titleAnimation,
  descriptionAnimation,
} from './animations'

export default function Services() {
  const { ref, controls, theme } = useServices()

  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 md:pb-32 ${
        checkIsTheme(theme, 'DARK') ? 'bg-black' : 'bg-white'
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
            <Badge content="SERVIÇOS" />
          </motion.div>

          <motion.h1
            initial="initial"
            animate={controls}
            variants={titleAnimation}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className={`mb-4  text-3xl md:text-4xl leading-tight font-bold tracking-tighter ${
              checkIsTheme(theme, 'DARK') ? 'text-white' : 'text-black'
            }`}
          >
            Transformando ideias em realidade através da tecnologia
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
            Ofereço serviços de desenvolvimento de software personalizado,
            aplicativos móveis, websites e APIs para ajudar empresas e
            empreendedores a atingir seus objetivos de negócios com soluções
            tecnológicas inovadoras.
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {Cards.map((element) => (
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
