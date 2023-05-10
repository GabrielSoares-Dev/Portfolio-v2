'use client'
import Badge from '@/components/Badge'
import CardExperience from './components/Card'
import { experiences } from './objects'
import { useCareer } from './hooks'
import { motion } from 'framer-motion'
import { badgeAnimation, titleAnimation } from './animations'
import { checkIsTheme } from '@/functions'

export default function Career() {
  const { ref, controls, theme } = useCareer()
  return (
    <section
      id="career"
      className={`py-24  ${
        checkIsTheme(theme, 'DARK') ? 'bg-black' : 'bg-white'
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
            <Badge content="Experiência" />
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
              checkIsTheme(theme, 'DARK') ? 'text-white' : 'text-black'
            }`}
          >
            Experiência Profissional
          </motion.h3>
        </div>
        {experiences.map((element) => (
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
    </section>
  )
}
