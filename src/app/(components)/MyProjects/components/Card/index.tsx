'use client'
import Image from 'next/image'
import Button from '@/components/Button'
import { CardProjectProps } from '@app/(components)/MyProjects/types'
import { cardAnimation } from '@app/(components)/MyProjects/animations'
import { motion } from 'framer-motion'

export function CardProject({
  title,
  description,
  image,
  animation,
}: CardProjectProps) {
  return (
    <motion.div
      animate={cardAnimation(animation?.isInView!).animate}
      transition={cardAnimation(animation?.isInView!).transition}
      className="w-full md:w-1/2 px-4 mb-8"
    >
      <div>
        <Image
          className="rounded-lg"
          width={500}
          height={500}
          src={image}
          alt=""
        />
      </div>

      <p className="inline-block mb-4 mt-5 text-2xl text-white leading-tight text-coolGray-800  font-bold">
        {title}
      </p>
      <p className="mb-4 text-base md:text-lg text-gray-500 font-medium">
        {description}
      </p>
      <div className="w-32">
        <Button label="Ver Código" variant="secondary" />
      </div>
    </motion.div>
  )
}
