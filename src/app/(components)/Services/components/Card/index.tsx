'use client'
import type { CardServicesProps } from './types'
import { motion } from 'framer-motion'
import { cardAnimation } from '@app/(components)/Services/animations'
import { useTheme } from '@/hooks'
import { checkIsTheme } from '@/functions'
export default function Card({
  Icon,
  text,
  title,
  animation,
}: CardServicesProps) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial="initial"
      variants={cardAnimation}
      animate={animation?.controls}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="w-full mt-5 md:w-1/2 lg:w-1/3 px-4"
    >
      <motion.div
        whileHover={{
          rotate: 1,
        }}
        className="h-full p-8 text-center border-2  border-primary  rounded-md hover:shadow-xl transition duration-200"
      >
        <div
          className={`inline-flex h-16 w-16 mb-6 mx-auto items-center border-2 border-primary justify-center rounded-lg ${
            checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
          }`}
        >
          <Icon className="fill-primary" fontSize={30} />
        </div>
        <h3
          className={`mb-4 text-xl md:text-2xl leading-tight font-bold ${
            checkIsTheme(theme, 'DARK')
              ? 'text-secondary-dark'
              : 'text-secondary-white'
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-500 font-medium">{text}</p>
      </motion.div>
    </motion.div>
  )
}
