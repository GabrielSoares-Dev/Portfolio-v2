import { CardExperienceProps } from '@app/(components)/Career/types'
import { motion } from 'framer-motion'
import { cardAnimation } from '@app/(components)/Career/animations'
export default function CardExperience({
  position,
  where,
  dateInPosition,
  animation,
}: CardExperienceProps) {
  return (
    <motion.div
      animate={cardAnimation(animation.isInView).animate}
      transition={cardAnimation(animation.isInView).transition}
      className="max-w-3xl mx-auto"
    >
      <motion.div
        whileHover={{
          rotate: 1,
        }}
        className="flex flex-col flex-wrap p-10 border-2 border-primary rounded-md shadow-md transition duration-200"
      >
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <h3 className="text-lg md:text-xl text-white group-hover:text-coolGray-900 font-semibold">
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
