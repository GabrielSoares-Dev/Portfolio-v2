'use client'
import { useState } from 'react'
import { CardSkillProps } from './types'
import { AnimatePresence, motion } from 'framer-motion'
import { cardAnimation } from '@app/(components)/Skills/animations'
import { useTheme } from '@/hooks'
import { checkIsTheme } from '@/functions'

export default function Card({ Icon, stack, animations }: CardSkillProps) {
  const [showText, setShowText] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
      <motion.div
        initial="initial"
        variants={cardAnimation}
        animate={animations?.controls}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
        className={`relative flex items-center justify-center py-5 px-5 h-20  border-2 border-primary rounded-3xl  ${
          checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
        }`}
        onMouseOver={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        {showText ? (
          <AnimatePresence>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-semibold text-xl">{stack}</p>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon fontSize={40} className="fill-primary" />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
