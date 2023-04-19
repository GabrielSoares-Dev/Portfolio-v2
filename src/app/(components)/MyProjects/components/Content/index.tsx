'use client'
import { CardProject, Filters } from '@app/(components)/MyProjects/components'
import Badge from '@/components/Badge'
import { projects } from '@app/(components)/MyProjects/objects'
import { useProjects } from '@app/(components)/MyProjects/hooks'
import {
  titleAnimation,
  badgeAnimation,
  descriptionAnimation,
} from '@app/(components)/MyProjects/animations'
import { motion } from 'framer-motion'
export function Content() {
  const { isInView, ref } = useProjects()
  return (
    <div ref={ref} className="container px-4 mx-auto">
      <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
        <motion.div
          animate={badgeAnimation(isInView).animate}
          transition={badgeAnimation(isInView).transition}
        >
          <Badge content="PROJETOS" />
        </motion.div>

        <motion.h3
          animate={titleAnimation(isInView).animate}
          transition={titleAnimation(isInView).transition}
          className="mb-4 text-white text-3xl md:text-5xl leading-tight font-bold tracking-tighter"
        >
          Meus Projetos em Destaque
        </motion.h3>
        <motion.p
          animate={descriptionAnimation(isInView).animate}
          transition={descriptionAnimation(isInView).transition}
          className="mb-10 text-gray-500 text-lg md:text-xl font-medium"
        >
          Confira meus projetos em desenvolvimento web e tecnologia. Apresento
          alguns dos meus melhores trabalhos, criados com habilidade e inovação
          para atender aos objetivos dos clientes.
        </motion.p>
      </div>
      <Filters isInView={isInView} />
      <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
        {projects.map((element) => (
          <CardProject
            animation={{
              isInView,
            }}
            key={element.id}
            title={element.title}
            description={element.description}
            image={element.image}
          />
        ))}
      </div>
    </div>
  )
}
