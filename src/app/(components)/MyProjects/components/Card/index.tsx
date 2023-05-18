'use client'
import Image from 'next/image'
import { Button } from '@/components'
import { CardProjectProps } from '@app/(components)/MyProjects/types'
import { cardAnimation } from '@app/(components)/MyProjects/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage, useTheme } from '@/hooks'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'

export function CardProject({
  title,
  description,
  image,
  url,
  animation,
}: CardProjectProps) {
  const { theme } = useTheme()
  const { currentLanguage } = useLanguage()
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        variants={cardAnimation}
        animate={animation?.controls}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="w-full md:w-1/2 px-4 mb-8"
      >
        <div className="w-auto">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src={image}
            alt=""
          />

          <p
            className={`inline-block mb-4 mt-5 text-2xl  leading-tight  font-bold transition duration-500 ${
              checkIsTheme(theme, 'DARK')
                ? 'text-secondary-dark'
                : 'text-secondary-white'
            }`}
          >
            {title}
          </p>
          <p className="mb-4 w-full lg:w-[500px] text-base md:text-lg text-gray-500 font-medium">
            {description}
          </p>
        </div>

        <div className="w-full md:w-32">
          <Button
            label={
              checkIsLanguage(currentLanguage, 'PT-BR')
                ? ptBr.projects.btnCards
                : en.projects.btnCards
            }
            onClick={() => window.open(url)}
            variant="secondary"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
