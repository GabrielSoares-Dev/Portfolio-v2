'use client'
import Button from '@/components/Button'
import { useFilters } from '@app/(components)/MyProjects/hooks'
import { filterAnimation } from '@app/(components)/MyProjects/animations'
import { motion } from 'framer-motion'

type FiltersProps = {
  isInView: boolean
}

export function Filters({ isInView }: FiltersProps) {
  const { isAll, isLaravel, isNodejs, handleSelected } = useFilters()
  return (
    <ul className="flex flex-wrap mb-8 -mx-2 text-center">
      <motion.li
        animate={filterAnimation(isInView).animate}
        transition={filterAnimation(isInView).transition}
        className="w-full mt-3 px-2 md:w-32 md:mt-0"
      >
        <Button
          label="Todos"
          onClick={() => handleSelected('ALL')}
          variant={isAll ? 'primary' : 'secondary'}
        />
      </motion.li>
      <motion.li
        animate={filterAnimation(isInView).animate}
        transition={filterAnimation(isInView).transition}
        className="w-full px-2  mt-3 md:w-32 md:mt-0"
      >
        <Button
          onClick={() => handleSelected('LARAVEL')}
          label="Laravel"
          variant={isLaravel ? 'primary' : 'secondary'}
        />
      </motion.li>
      <motion.li
        animate={filterAnimation(isInView).animate}
        transition={filterAnimation(isInView).transition}
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
