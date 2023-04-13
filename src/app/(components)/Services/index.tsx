'use client'
import Card from './components/Card'
import Cards from './domains/cards'
import { useServices } from './hooks'
import Badge from '@/components/Badge'
import { motion } from 'framer-motion'
import {
  badgeAnimation,
  titleAnimation,
  descriptionAnimation,
} from './animations'

export default function Services() {
  const { ref, isInView } = useServices()

  return (
    <section className="py-24 md:pb-32 bg-black">
      <div ref={ref} className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <motion.div
            animate={badgeAnimation(isInView).animate}
            transition={badgeAnimation(isInView).transition}
          >
            <Badge content="SERVIÇOS" />
          </motion.div>

          <motion.h1
            animate={titleAnimation(isInView).animate}
            transition={titleAnimation(isInView).transition}
            className="mb-4 text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
          >
            Transformando ideias em realidade através da tecnologia
          </motion.h1>
          <motion.div
            animate={descriptionAnimation(isInView).animate}
            transition={descriptionAnimation(isInView).transition}
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
                isInView,
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
