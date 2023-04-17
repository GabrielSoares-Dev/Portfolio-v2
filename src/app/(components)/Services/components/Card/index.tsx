'use client'
import type { CardServicesProps } from './types'
import { motion } from 'framer-motion'

export default function Card({
  Icon,
  text,
  title,
  animation,
}: CardServicesProps) {
  return (
    <motion.div
      animate={{
        y: animation?.isInView ? 0 : -130,
        opacity: animation?.isInView ? 1 : 0,
      }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full mt-5 md:w-1/2 lg:w-1/3 px-4"
    >
      <motion.div
        whileHover={{
          rotate: 1,
        }}
        className="h-full p-8 text-center border-2 cursor-pointer border-primary  rounded-md hover:shadow-xl transition duration-200"
      >
        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center border-2 border-primary justify-center bg-black rounded-lg">
          <Icon className="fill-primary" fontSize={30} />
        </div>
        <h3 className="mb-4 text-xl text-white md:text-2xl leading-tight font-bold">
          {title}
        </h3>
        <p className="text-gray-500 font-medium">{text}</p>
      </motion.div>
    </motion.div>
  )
}
