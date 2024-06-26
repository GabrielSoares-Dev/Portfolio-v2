import { CardExperienceProps } from '@app/(components)/Career/types'
import { motion } from 'framer-motion'
import { cardAnimation } from '@app/(components)/Career/animations'
import { useTheme } from '@/hooks'
import { checkIsTheme } from '@/functions'
export default function CardExperience({
  position,
  where,
  dateInPosition,
  animation,
}: CardExperienceProps) {
  const { theme } = useTheme()
  return (
    <motion.div
      variants={cardAnimation}
      initial="initial"
      animate={animation?.controls}
      transition={{
        duration: 0.2,
        delay: 1,
      }}
      className="max-w-3xl mx-auto w-full"
    >
      <motion.div
        whileHover={{
          rotate: 1,
        }}
        className="flex flex-col flex-wrap p-10 border-2 border-primary rounded-md shadow-md transition duration-200"
      >
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <h3
            className={`text-lg md:text-xl font-semibold transition duration-500  ${
              checkIsTheme(theme, 'DARK')
                ? 'text-secondary-dark'
                : 'text-secondary-white'
            }`}
          >
            {position}
          </h3>
        </div>
        <div>
          <p className="text-gray-500">
            {where.nameCompany},{where.district},{where.city}, {where.state}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{dateInPosition}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
