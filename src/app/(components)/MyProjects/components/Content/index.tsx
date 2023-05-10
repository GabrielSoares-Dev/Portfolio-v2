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
import { checkIsTheme } from '@/functions'
export function Content() {
  const { ref, hasFilter, projectFiltered, controls, theme } = useProjects()
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
          <Badge content="PROJETOS" />
        </motion.div>

        <motion.h3
          initial="initial"
          variants={titleAnimation}
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className={`mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter  ${
            checkIsTheme(theme, 'DARK') ? 'text-white' : 'text-black'
          }`}
        >
          Meus Projetos em Destaque
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
          Confira meus projetos em desenvolvimento web e tecnologia. Apresento
          alguns dos meus melhores trabalhos, criados com habilidade e inovação
          para atender aos objetivos dos clientes.
        </motion.p>
      </div>
      <Filters controls={controls} />
      <div className="flex items-center flex-wrap mx-4 mb-12 md:mb-20">
        <>
          {hasFilter ? (
            projectFiltered.map((element) => (
              <CardProject
                animation={{
                  controls,
                }}
                url={element.url}
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
              />
            ))
          ) : (
            <>
              {projects.map((element) => (
                <CardProject
                  animation={{
                    controls,
                  }}
                  key={element.id}
                  url={element.url}
                  title={element.title}
                  description={element.description}
                  image={element.image}
                />
              ))}
            </>
          )}
        </>
      </div>
    </div>
  )
}
