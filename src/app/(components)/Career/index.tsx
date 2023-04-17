'use client'
import Badge from '@/components/Badge'
import CardExperience from './components/Card'
import { experiences } from './objects'
import { useCareer } from './hooks'
import { motion } from 'framer-motion'
import { badgeAnimation, titleAnimation } from './animations'

export default function Career() {
  const { isInView, ref } = useCareer()
  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.div
            animate={badgeAnimation(isInView).animate}
            transition={badgeAnimation(isInView).transition}
          >
            <Badge content="Experiência" />
          </motion.div>

          <motion.h3
            animate={titleAnimation(isInView).animate}
            transition={titleAnimation(isInView).transition}
            className="mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter"
          >
            Experiência Profissional
          </motion.h3>
        </div>
        {experiences.map((element) => (
          <CardExperience
            animation={{
              isInView,
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
