'use client'
import Badge from '@components/Badge'
import { CardsBackend, CardsFrotend } from '@app/(components)/Skills/objects'
import { textAnimation } from '@app/(components)/Skills/animations'
import { useSkills } from '@app/(components)/Skills/hooks'
import { motion } from 'framer-motion'
import Card from './components/Card'

export default function Skills() {
  const { controls, ref } = useSkills()
  return (
    <section
      id="skills"
      ref={ref}
      className="relative pt-28 pb-36 bg-black overflow-hidden"
    >
      <div className="relative z-10 container px-4 mx-auto">
        <motion.div
          initial="initial"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex justify-center mb-10"
        >
          <Badge content="HABILIDADES" />
        </motion.div>
        <div>
          <div className="flex justify-center mb-5">
            <motion.h1
              initial="initial"
              variants={textAnimation}
              animate={controls}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-4 text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
            >
              Frontend
            </motion.h1>
          </div>
          <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            {CardsFrotend.map((element) => (
              <Card
                animations={{
                  controls,
                }}
                stack={element.stack}
                key={element.id}
                Icon={element.Icon}
              />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <motion.h1
              initial="initial"
              variants={textAnimation}
              animate={controls}
              transition={{ duration: 0.9, delay: 0.3 }}
              className=" text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
            >
              Backend
            </motion.h1>
          </div>
          <div className="flex flex-wrap max-w-5xl mx-auto mt-10">
            {CardsBackend.map((element) => (
              <Card
                animations={{
                  controls,
                }}
                stack={element.stack}
                key={element.id}
                Icon={element.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
