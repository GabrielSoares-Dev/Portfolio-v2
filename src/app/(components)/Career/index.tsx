'use client'
import Badge from '@/components/Badge'
import CardExperience from './components/Card'
import { experiences } from './objects'
import { useCareer } from './hooks'
import { motion } from 'framer-motion'
import { badgeAnimation, titleAnimation } from './animations'

export default function Career() {
  const { ref, controls } = useCareer()
  return (
    <section id="career" className="py-24  bg-black">
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
            className="mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter"
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
