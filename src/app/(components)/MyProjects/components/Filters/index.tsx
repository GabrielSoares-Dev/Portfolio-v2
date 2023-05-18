'use client'
import { Button } from '@/components'
import { useFilters } from '@app/(components)/MyProjects/hooks'
import { filterAnimation } from '@app/(components)/MyProjects/animations'
import { motion, AnimationControls } from 'framer-motion'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'
import { checkIsLanguage } from '@/functions'

type FiltersProps = {
  controls: AnimationControls
}

export function Filters({ controls }: FiltersProps) {
  const { isAll, isLaravel, isNodejs, currentLanguage, handleSelected } =
    useFilters(controls)
  return (
    <ul className="flex justify-center flex-wrap mb-8 -mx-2 text-center">
      <motion.li
        initial="initial"
        variants={filterAnimation}
        animate={controls}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
        className="w-full mt-3 px-2 md:w-32 md:mt-0"
      >
        <Button
          label={
            checkIsLanguage(currentLanguage, 'PT-BR')
              ? ptBr.projects.btnAll
              : en.projects.btnAll
          }
          onClick={() => handleSelected('ALL')}
          variant={isAll ? 'primary' : 'secondary'}
        />
      </motion.li>
      <motion.li
        initial="initial"
        variants={filterAnimation}
        animate={controls}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
        className="w-full px-2  mt-3 md:w-32 md:mt-0"
      >
        <Button
          onClick={() => handleSelected('LARAVEL')}
          label="Laravel"
          variant={isLaravel ? 'primary' : 'secondary'}
        />
      </motion.li>
      <motion.li
        initial="initial"
        variants={filterAnimation}
        animate={controls}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
        className="w-full  mt-3 px-2 md:w-32 md:mt-0"
      >
        <Button
          label="NodeJS"
          onClick={() => handleSelected('NODEJS')}
          variant={isNodejs ? 'primary' : 'secondary'}
        />
      </motion.li>
    </ul>
  )
}
